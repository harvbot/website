#!/usr/bin/env node
// Syncs vendor id, name, slug, and logo from LocalLine into src/data/vendors.js.
// Re-run whenever vendors are added, removed, or their logos change.
//
// Usage: node scripts/sync-vendors.js

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dir, '..')

// Load .env.local
try {
  readFileSync(resolve(root, '.env.local'), 'utf8')
    .split('\n')
    .forEach(line => {
      const [key, ...rest] = line.split('=')
      if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
    })
} catch {
  console.error('Could not read .env.local — make sure it exists')
  process.exit(1)
}

const BASE = 'https://localline.ca/api/backoffice/v2'

async function auth() {
  const res = await fetch(`${BASE}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: process.env.LOCALLINE_USERNAME,
      password: process.env.LOCALLINE_PASSWORD,
    }),
  })
  if (!res.ok) throw new Error(`Auth failed: ${res.statusText}`)
  return (await res.json()).access
}

async function fetchAll(token, path) {
  const results = []
  let cursor = `${BASE}${path}`
  while (cursor) {
    const res = await fetch(cursor, { headers: { Authorization: `Bearer ${token}` } })
    if (!res.ok) throw new Error(`GET ${cursor} failed: ${res.status}`)
    const data = await res.json()
    results.push(...(Array.isArray(data) ? data : (data.results ?? [])))
    cursor = data.next ?? null
  }
  return results
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const token = await auth()
const raw = await fetchAll(token, '/vendors')

const vendors = raw
  .map(v => ({
    id: v.id,
    name: v.name,
    slug: v.slug || slugify(v.name), // prefer LocalLine's own slug
    logo: v.image_full || null,
    location: v.location || null,
    description: v.description || null,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

console.log(`Fetched ${vendors.length} vendors:`)
vendors.forEach(v =>
  console.log(`  [${v.id}] ${v.name}  logo: ${v.logo ? '✓' : '✗'}  desc: ${v.description ? '✓' : '✗'}  location: ${v.location ?? '(none)'}`)
)

// Use JSON.stringify for description to safely handle HTML, quotes, newlines
function serializeVendor(v) {
  return `  { id: ${v.id}, name: ${JSON.stringify(v.name)}, slug: ${JSON.stringify(v.slug)}, logo: ${JSON.stringify(v.logo)}, location: ${JSON.stringify(v.location)}, description: ${JSON.stringify(v.description)} },`
}

const mapBlock =
  `// Static vendor registry — run \`node scripts/sync-vendors.js\` to refresh.\n` +
  `export const vendorMap = [\n` +
  vendors.map(serializeVendor).join('\n') +
  `\n]\n`

const rest = readFileSync(resolve(root, 'src/data/vendors.js'), 'utf8')
  // Strip everything up to and including the vendorMap block and vendorList line
  .replace(/\/\/ Static vendor registry[\s\S]*?export const vendorList = vendorMap\.map\(v => v\.name\)\n/, '')
  .trimStart()

const output =
  mapBlock +
  `\nexport const vendorList = vendorMap.map(v => v.name)\n\n` +
  rest

writeFileSync(resolve(root, 'src/data/vendors.js'), output)
console.log('\nWrote src/data/vendors.js')
