// Auth token singleton — persists across warm serverless invocations
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

export async function getAccessToken() {
  const now = Date.now()

  if (auth.access && auth.accessExpiresAt > now + 30000) {
    return auth.access
  }

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
    auth.refresh = null
  }

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

export async function locallineGet(path) {
  const token = await getAccessToken()
  const res = await fetch(`https://localline.ca/api/backoffice/v2${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error(`LocalLine GET ${path} failed: ${res.status}`)
  return res.json()
}
