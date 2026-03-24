// Token singleton — persists across warm invocations of the same function instance
const auth = {
  access: null,
  refresh: null,
  accessExpiresAt: 0,
}

function parseExpiry(token) {
  try {
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
    return payload.exp * 1000
  } catch {
    return 0
  }
}

async function getAccessToken() {
  const now = Date.now()

  // Use cached access token if still valid (30s buffer)
  if (auth.access && auth.accessExpiresAt > now + 30000) {
    return auth.access
  }

  // Try refresh token first
  if (auth.refresh) {
    const res = await fetch('https://localline.ca/api/backoffice/v2/token/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: auth.refresh }),
    })
    if (res.ok) {
      const data = await res.json()
      auth.access = data.access
      auth.accessExpiresAt = parseExpiry(data.access)
      return auth.access
    }
    // Refresh token expired — fall through to full re-auth
    auth.refresh = null
  }

  // Full re-auth with username/password
  const res = await fetch('https://localline.ca/api/backoffice/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: process.env.LOCALLINE_USERNAME,
      password: process.env.LOCALLINE_PASSWORD,
    }),
  })
  if (!res.ok) throw new Error(`LocalLine auth failed: ${res.statusText}`)

  const data = await res.json()
  auth.access = data.access
  auth.refresh = data.refresh
  auth.accessExpiresAt = parseExpiry(data.access)
  return auth.access
}

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
      return Response.json({ error: 'Failed to register email' }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('subscribe error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
