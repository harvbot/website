import { unstable_cache } from 'next/cache'
import { locallineGet } from './localline'

// Fetch all pages of a paginated LocalLine endpoint
async function fetchAll(path) {
  const results = []
  let url = path
  while (url) {
    const data = await locallineGet(url)
    const page = Array.isArray(data) ? data : (data.results ?? [])
    results.push(...page)
    // Follow next-page cursor if present (relative path or null)
    if (data.next) {
      // Strip the base URL if it's absolute
      url = data.next.replace('https://localline.ca/api/backoffice/v2', '')
    } else {
      url = null
    }
  }
  return results
}

export const getVendors = unstable_cache(
  async () => fetchAll('/vendors'),
  ['localline-vendors'],
  { revalidate: 3600 },
)

export const getVendorProducts = unstable_cache(
  async (vendorId) => fetchAll(`/products?vendor=${vendorId}`),
  ['localline-vendor-products'],
  { revalidate: 3600 },
)
