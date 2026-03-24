#!/usr/bin/env node
// One-time script: fetches vendor list from LocalLine and writes static mapping
// to src/data/vendors.js. Re-run whenever vendors are added or removed.
//
// Usage: node scripts/sync-vendors.js

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dir, '..')

// Load .env.local
const envPath = resolve(root, '.env.local')
try {
  readFileSync(envPath, 'utf8')
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
  .map(v => ({ id: v.id, name: v.name, slug: slugify(v.name) }))
  .sort((a, b) => a.name.localeCompare(b.name))

console.log(`Fetched ${vendors.length} vendors:`)
vendors.forEach(v => console.log(`  [${v.id}] ${v.name}  →  ${v.slug}`))

// Read current file, replace the vendorList + add vendorMap
const current = readFileSync(resolve(root, 'src/data/vendors.js'), 'utf8')

const mapLines = vendors.map(v => `  { id: ${v.id}, name: '${v.name}', slug: '${v.slug}' },`).join('\n')
const mapBlock = `export const vendorMap = [\n${mapLines}\n]\n`

const newVendorList = `export const vendorList = vendorMap.map(v => v.name)\n`

// Replace existing vendorList export and inject vendorMap before it (idempotent)
let updated = current
  .replace(/^export const vendorList =.*$/m, '// vendorList replaced — see vendorMap below')
  .replace(/\/\/ vendorList replaced.*\n/, '')

// Prepend vendorMap + new vendorList at the top (after any existing imports)
const insertAt = updated.indexOf('\nexport ')
updated =
  updated.slice(0, insertAt === -1 ? 0 : insertAt) +
  '\n' + mapBlock + '\n' + newVendorList +
  updated.slice(insertAt === -1 ? 0 : insertAt)

// Remove duplicate vendorList if present
updated = updated.replace(/export const vendorList = \[[\s\S]*?\]\n/m, '')

writeFileSync(resolve(root, 'src/data/vendors.js'), updated)
console.log('\nWrote src/data/vendors.js')
