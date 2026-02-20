import { Link } from 'react-router-dom'
import VendorLogo from '../components/VendorLogo'
import { featuredVendors, getVendorLogo } from '../data/vendors'
import { slugify } from '../utils/strings'

export default function LandingPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#8a7b69]">County Farm Collective</p>
        <h2 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight text-[#3F3228] md:text-5xl">From Prince Edward County farms to County tables.</h2>
        <p className="max-w-3xl text-base leading-7 text-[#5f5244] md:text-lg">
          Shop weekly. We consolidate local orders, pack fresh, and deliver every week.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-10 md:grid-cols-3">
        <article className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6 text-left shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Shop Right Now</h3>
          <p className="mb-5 text-sm leading-6 text-[#6d5f50]">Fast path to this week’s local products and pickup/delivery options.</p>
          <a href="https://cfc.localline.ca" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-[#2F5D50] px-4 py-2 text-sm font-medium text-[#f7f4ed] hover:bg-[#264d43]">Go to Storefront</a>
        </article>

        <article className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6 text-left shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Become a Customer</h3>
          <p className="mb-5 text-sm leading-6 text-[#6d5f50]">Learn the weekly flow, quality standards, and what to expect each week.</p>
          <Link to="/customers" className="inline-flex items-center rounded-md border border-[#8FA27A] px-4 py-2 text-sm font-medium text-[#2F5D50] hover:bg-[#edf3e8]">Customer Info</Link>
        </article>

        <article className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6 text-left shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Sell as a Vendor</h3>
          <p className="mb-5 text-sm leading-6 text-[#6d5f50]">Get clear on schedule, onboarding, and how your products reach County homes.</p>
          <Link to="/vendors" className="inline-flex items-center rounded-md border border-[#8FA27A] px-4 py-2 text-sm font-medium text-[#2F5D50] hover:bg-[#edf3e8]">Vendor Info</Link>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#3F3228]">Featured County Vendors</h3>
          <Link to="/our-vendors" className="text-sm font-semibold text-[#2F5D50] hover:underline">View all vendors →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredVendors.map((vendor) => (
            <article key={vendor.name} className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-5 shadow-sm">
              <div className="mb-3">
                <VendorLogo name={vendor.name} src={getVendorLogo(vendor.name)} className="h-14 w-14" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#B86F4B]">{vendor.location}</p>
              <h4 className="mt-1 text-xl font-semibold text-[#3F3228]">{vendor.name}</h4>
              <p className="mt-2 text-sm text-[#2F5D50]">{vendor.specialty}</p>
              <p className="mt-3 text-sm leading-6 text-[#6d5f50]">{vendor.note}</p>
              <Link to={`/our-vendors/${slugify(vendor.name)}`} className="mt-4 inline-flex text-sm font-semibold text-[#2F5D50] hover:underline">
                View vendor
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
