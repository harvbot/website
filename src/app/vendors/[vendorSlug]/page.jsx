import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getVendorProducts } from '../../../lib/localline'
import { vendorMap } from '../../../data/vendors'

export function generateStaticParams() {
  return vendorMap.map(v => ({ vendorSlug: v.slug }))
}

function ProductCard({ product }) {
  const img =
    product.images?.[0]?.image ||
    product.images?.[0]?.url ||
    product.image_url ||
    null

  return (
    <div className="overflow-hidden rounded-xl border border-[#e2d8ca] bg-[#fffdf8] shadow-[0_4px_12px_rgba(63,50,40,0.05)]">
      {img ? (
        <div className="aspect-square w-full overflow-hidden bg-[#f2e9db]">
          <img src={img} alt={product.name} className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-[#f2e9db] to-[#e8ddd0]">
          <span className="text-4xl opacity-30">🌿</span>
        </div>
      )}
      <div className="p-3">
        <p className="text-sm font-semibold text-[#3F3228]">{product.name}</p>
        {product.category_name && (
          <p className="mt-0.5 text-xs text-[#8a7b69]">{product.category_name}</p>
        )}
      </div>
    </div>
  )
}

export default async function VendorProfilePage({ params }) {
  const { vendorSlug } = await params

  const vendor = vendorMap.find(v => v.slug === vendorSlug)
  if (!vendor) notFound()

  let productList = []
  try {
    productList = await getVendorProducts(vendor.id)
  } catch (err) {
    console.error(`Failed to load products for vendor ${vendor.id}:`, err)
  }

  const storefrontUrl = `https://cfc.localline.ca/vendors/${vendor.id}`

  const byCategory = productList.reduce((acc, p) => {
    const cat = p.category_name || p.category || 'Products'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(p)
    return acc
  }, {})

  const categories = Object.entries(byCategory)

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link href="/vendors" className="mb-8 inline-block text-sm text-[#6d5f50] hover:underline">
        ← Back to Vendors
      </Link>

      {/* Header */}
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

      {/* Products */}
      {categories.length > 0 ? (
        <div className="space-y-10">
          {categories.map(([category, items]) => (
            <div key={category}>
              <h2 className="mb-4 text-xl font-semibold text-[#3F3228]">{category}</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </section>
  )
}
