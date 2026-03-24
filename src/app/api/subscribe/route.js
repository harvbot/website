import { getAccessToken } from '../../../lib/localline'

export async function POST(request) {
  const body = await request.json().catch(() => ({}))
  const { email, firstName = '', lastName = '' } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Valid email required' }, { status: 400 })
  }

  try {
    const token = await getAccessToken()

    const customerRes = await fetch('https://localline.ca/api/backoffice/v2/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ first_name: firstName, last_name: lastName, email }),
    })

    if (!customerRes.ok) {
      const text = await customerRes.text()
      console.error('LocalLine customer error:', customerRes.status, text)
      try {
        const errData = JSON.parse(text)
        const msgs = [errData.email, errData.detail].flat().filter(Boolean).join(' ')
        if (customerRes.status === 400 && /already exists|duplicate/i.test(msgs)) {
          return Response.json({ error: 'already_exists' }, { status: 409 })
        }
      } catch { /* not JSON — fall through */ }
      return Response.json({ error: 'Failed to register email' }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('subscribe error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
