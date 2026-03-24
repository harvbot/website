import Link from 'next/link'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getVendorProducts } from '../../../lib/localline'
import { vendorMap } from '../../../data/vendors'
import { SITE_URL } from '../../../lib/site'

export function generateStaticParams() {
  return vendorMap.map(v => ({ vendorSlug: v.slug }))
}

export async function generateMetadata({ params }) {
  const { vendorSlug } = await params
  const vendor = vendorMap.find(v => v.slug === vendorSlug)
  if (!vendor) return {}

  const description = vendor.description
    ? vendor.description.replace(/<[^>]+>/g, '').trim().slice(0, 160)
    : `${vendor.name} is a Prince Edward County producer selling through County Farm Collective's weekly local food storefront.`

  return {
    title: vendor.name,
    description,
    alternates: { canonical: `/vendors/${vendor.slug}` },
    openGraph: {
      title: `${vendor.name} | County Farm Collective`,
      description,
      url: `${SITE_URL}/vendors/${vendor.slug}`,
      ...(vendor.logo && { images: [{ url: vendor.logo, alt: vendor.name }] }),
    },
  }
}

// --- Products (async, streamed) -------------------------------------------

// Repeating span pattern — col/row in a 4-column grid
const PATTERN = [
  { col: 2, row: 2 },
  { col: 1, row: 1 },
  { col: 1, row: 2 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
]

function ProductCard({ product, col, row }) {
  const img =
    product.images?.[0]?.full ||
    product.images?.[0]?.thumbnail ||
    product.thumbnail ||
    null

  return (
    <div style={{ gridColumn: `span ${col}`, gridRow: `span ${row}` }}>
      {img ? (
        <div className="relative h-full w-full overflow-hidden">
          <img src={img} alt={product.name} className="block h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-2.5 pb-2.5 pt-8">
            <p className="text-xs font-semibold leading-tight text-white">{product.name}</p>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#ede5d8]">
          <p className="px-3 text-center text-xs font-semibold leading-snug text-[#6d5f50]">{product.name}</p>
        </div>
      )}
    </div>
  )
}

async function VendorProducts({ vendorId, storefrontUrl }) {
  let products = []
  try {
    products = await getVendorProducts(vendorId)
  } catch (err) {
    console.error(`Failed to load products for vendor ${vendorId}:`, err)
  }

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-8 text-center text-sm text-[#8a7b69]">
        Product listings are managed weekly on the CFC storefront.{' '}
        <a
          href={storefrontUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand-primary hover:underline"
        >
          Browse available items →
        </a>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4"
      style={{ gap: 0, gridAutoRows: '200px', gridAutoFlow: 'dense' }}
    >
      {products.map((product, i) => {
        const { col, row } = PATTERN[i % PATTERN.length]
        return <ProductCard key={product.id} product={product} col={col} row={row} />
      })}
    </div>
  )
}

function ProductsSkeleton() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4"
      style={{ gap: 0, gridAutoRows: '200px', gridAutoFlow: 'dense' }}
    >
      {PATTERN.map(({ col, row }, i) => (
        <div
          key={i}
          className="animate-pulse bg-[#e8ddd0]"
          style={{ gridColumn: `span ${col}`, gridRow: `span ${row}` }}
        />
      ))}
    </div>
  )
}

// --- Page ------------------------------------------------------------------

export default async function VendorProfilePage({ params }) {
  const { vendorSlug } = await params

  const vendor = vendorMap.find(v => v.slug === vendorSlug)
  if (!vendor) notFound()

  const storefrontUrl = `https://cfc.localline.ca/resto/vendor/${vendor.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: vendor.name,
    ...(vendor.description && { description: vendor.description.replace(/<[^>]+>/g, '').trim() }),
    url: `${SITE_URL}/vendors/${vendor.slug}`,
    ...(vendor.logo && { image: vendor.logo }),
    ...(vendor.location && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: vendor.location,
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
    }),
    areaServed: 'Prince Edward County, Ontario, Canada',
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/vendors" className="mb-8 inline-block text-sm text-[#6d5f50] hover:underline">
        ← Back to Vendors
      </Link>

      {/* Header — renders immediately from static vendorMap */}
      <div className="mb-10 overflow-hidden rounded-3xl border border-[#e2d8ca] bg-gradient-to-br from-[#fffdf8] to-[#f2e9db] p-8 shadow-[0_12px_32px_rgba(63,50,40,0.08)] md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {vendor.logo && (
            <div className="shrink-0">
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="h-24 w-24 rounded-2xl border border-[#e2d8ca] bg-white object-contain p-2 shadow-sm"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            {vendor.location && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
                {vendor.location}
              </p>
            )}
            <h1 className="font-amatic text-5xl font-bold text-[#3F3228] md:text-6xl">{vendor.name}</h1>
            {vendor.description && (
              <div
                className="mt-4 max-w-2xl text-base leading-7 text-[#5f5244] [&_a]:text-brand-primary [&_a]:underline [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5"
                dangerouslySetInnerHTML={{ __html: vendor.description }}
              />
            )}
            <div className="mt-6">
              <a
                href={storefrontUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] hover:bg-brand-primary-dark"
              >
                Shop {vendor.name} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products — streamed after the header is already painted */}
      <Suspense fallback={<ProductsSkeleton />}>
        <VendorProducts vendorId={vendor.id} storefrontUrl={storefrontUrl} />
      </Suspense>
    </section>
  )
}
