import { SITE_URL } from '../lib/site'
import { vendorMap } from '../data/vendors'

export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/customers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/vendors`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/code-of-conduct`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const vendorPages = vendorMap.map(v => ({
    url: `${SITE_URL}/vendors/${v.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...vendorPages]
}
