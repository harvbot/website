import { unstable_cache } from 'next/cache'

const BASE = 'https://localline.ca/api/backoffice/v2'

// ---------------------------------------------------------------------------
// Auth singleton — persists across warm serverless invocations
// ---------------------------------------------------------------------------

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

  if (auth.access && auth.accessExpiresAt > now + 30000) {
    return auth.access
  }

  if (auth.refresh) {
    const res = await fetch(`${BASE}/token/refresh`, {
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

  const res = await fetch(`${BASE}/token`, {
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

// ---------------------------------------------------------------------------
// HTTP helpers (private)
// ---------------------------------------------------------------------------

async function get(path) {
  const token = await getAccessToken()
  const res = await fetch(`${BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error(`LocalLine GET ${path} failed: ${res.status}`)
  return res.json()
}

async function post(path, body) {
  const token = await getAccessToken()
  return fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

async function fetchAll(path) {
  const results = []
  let cursor = path
  while (cursor) {
    const data = await get(cursor)
    results.push(...(Array.isArray(data) ? data : (data.results ?? [])))
    cursor = data.next
      ? data.next.replace(BASE, '')
      : null
  }
  return results
}

// ---------------------------------------------------------------------------
// Vendors
// ---------------------------------------------------------------------------

export const getVendorProducts = unstable_cache(
  (vendorId) => fetchAll(`/products?vendors=${vendorId}`),
  ['localline-vendor-products'],
  { revalidate: 3600 },
)

// ---------------------------------------------------------------------------
// Customers
// ---------------------------------------------------------------------------

export class LocalLineError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

export async function createCustomer({ email, firstName = '', lastName = '' }) {
  const res = await post('/customers', { first_name: firstName, last_name: lastName, email })

  if (!res.ok) {
    const text = await res.text()
    if (res.status === 400) {
      try {
        const err = JSON.parse(text)
        const msgs = [err.email, err.detail].flat().filter(Boolean).join(' ')
        if (/already exists|duplicate/i.test(msgs)) {
          throw new LocalLineError('Customer already exists', 'ALREADY_EXISTS')
        }
      } catch (e) {
        if (e instanceof LocalLineError) throw e
      }
    }
    throw new LocalLineError(`Failed to create customer: ${res.status}`, 'API_ERROR')
  }

  return res.json()
}
