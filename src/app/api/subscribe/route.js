import { createCustomer, LocalLineError } from '../../../lib/localline'

export async function POST(request) {
  const { email, firstName, lastName } = await request.json().catch(() => ({}))

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Valid email required' }, { status: 400 })
  }

  try {
    await createCustomer({ email, firstName, lastName })
    return Response.json({ ok: true })
  } catch (err) {
    if (err instanceof LocalLineError && err.code === 'ALREADY_EXISTS') {
      return Response.json({ error: 'already_exists' }, { status: 409 })
    }
    console.error('subscribe error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
