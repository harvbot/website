import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const vendorList = [
  'Edwin County Farms',
  'Fiddlehead',
  'Lambs Quarters',
  'Nomad Mushroom',
  'Paper Kite Farm',
  'Portico Gardens',
  'Return to Earth',
  'Rorafresh',
  'Scott Farms',
  'Sunset Farms',
  'The Elmbrook Farm',
  'Van Stone Farms',
  "Vicki's Veggies",
]

const featuredVendors = [
  { name: 'Fiddlehead', location: 'Wellington', specialty: 'Seasonal vegetables', note: 'Field-grown produce, harvested weekly.' },
  { name: 'Nomad Mushroom', location: 'Picton', specialty: 'Specialty mushrooms', note: 'Fresh cultivated mushrooms with peak flavor.' },
  { name: 'Paper Kite Farm', location: 'Prince Edward County', specialty: 'Mixed farm staples', note: 'Reliable staples and small-batch seasonal harvests.' },
]

function Frame({ children }) {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#3F3228]">
      <header className="border-b border-[#d8ccbc] bg-[#fdfaf4]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8a7b69]">Prince Edward County</p>
            <Link to="/" className="text-lg font-semibold hover:text-[#2F5D50]">County Farm Collective</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/transparency" className="rounded-md border border-[#8FA27A] px-4 py-2 text-sm font-semibold text-[#2F5D50] hover:bg-[#edf3e8]">
              Transparency
            </Link>
            <a
              href="https://cfc.localline.ca"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#2F5D50] px-4 py-2 text-sm font-semibold text-[#f7f4ed] hover:bg-[#264d43]"
            >
              Shop Weekly
            </a>
          </div>
        </div>
      </header>
      {children}
    </main>
  )
}

function Landing() {
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

function CustomersPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-3xl font-bold">Customer Information</h2>
      <p className="mb-8 text-[#6d5f50]">For households and restaurants looking to buy high-quality food from as close as possible in the County.</p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-5">
          <h3 className="mb-2 text-lg font-semibold">How It Works</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-[#5f5244]">
            <li>Browse what’s fresh each week from local vendors.</li>
            <li>Place your order through the CFC storefront.</li>
            <li>Receive your food through scheduled pickup/delivery fulfillment.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-5">
          <h3 className="mb-2 text-lg font-semibold">Why We’re Doing This</h3>
          <p className="text-sm leading-6 text-[#5f5244]">
            To reconnect County citizens with exceptional local food, restore excitement around seasonality,
            and make buying from your neighbors as convenient as shopping at a grocery store.
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <a href="https://cfc.localline.ca" target="_blank" rel="noreferrer" className="rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold hover:bg-[#f3ece1]">Shop Now</a>
        <a href="#newsletter" className="rounded-md border border-[#8FA27A] px-4 py-2 text-sm font-semibold text-[#2F5D50] hover:bg-[#edf3e8]">Join Newsletter</a>
        <Link to="/our-vendors" className="rounded-md border border-[#8FA27A] px-4 py-2 text-sm font-semibold text-[#3F3228] hover:bg-[#f3ece1]">Browse Our Vendors</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoBlock title="Weekly Schedule" points={[
          'Placeholder: Weekly order window and cutoff timing',
          'Placeholder: Fulfillment day(s) for pickup and delivery',
          'Placeholder: Where/when customers receive updates',
        ]} />
        <InfoBlock title="How We Represent Farmers" points={[
          'Placeholder: Producer stories and product origin context',
          'Placeholder: Seasonal curation and availability updates',
          'Placeholder: Transparency standards for customer trust',
        ]} />
        <InfoBlock title="Quality + Proximity Standards" points={[
          'Placeholder: Highest-quality-first sourcing principles',
          'Placeholder: As-close-as-possible local sourcing preference',
          'Placeholder: How tradeoffs are handled when supply is limited',
        ]} />
      </div>

      <div id="newsletter" className="mt-8 rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6">
        <h3 className="mb-2 text-xl font-semibold">Newsletter (Wireframe)</h3>
        <p className="text-[#6d5f50]">Join our newsletter for weekly updates on what’s fresh and available for sale in the County.</p>
      </div>
    </section>
  )
}

function VendorsDirectoryPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/customers" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Customer Info</Link>
      <h2 className="mb-3 text-3xl font-bold">Our Vendors</h2>
      <p className="mb-8 max-w-3xl text-[#6d5f50]">
        Explore the producers currently on the County Farm Collective platform. Click any vendor to view their profile page.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {vendorList.map((vendor) => (
          <Link
            key={vendor}
            to={`/our-vendors/${slugify(vendor)}`}
            className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] px-4 py-3 text-sm font-medium text-[#3F3228] hover:bg-[#f3ece1]"
          >
            {vendor}
          </Link>
        ))}
      </div>
    </section>
  )
}

function VendorProfilePlaceholder() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/our-vendors" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Our Vendors</Link>
      <h2 className="mb-3 text-3xl font-bold">Vendor Profile (Wireframe)</h2>
      <p className="mb-8 text-[#6d5f50]">Placeholder page for individual vendor details, story, products, and link to shop.</p>
      <div className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6">
        <InfoBlock title="Planned Vendor Profile Blocks" points={[
          'Vendor overview / farm story',
          'Product categories and seasonal notes',
          'Quality and growing practices',
          'Featured products in Local Line',
          'Primary CTA: Shop Now',
        ]} />
      </div>
    </section>
  )
}

function VendorsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-3xl font-bold">Vendor Information</h2>
      <p className="mb-8 text-[#6d5f50]">Interested in selling through County Farm Collective? Start with an intro email.</p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-5">
          <h3 className="mb-2 text-lg font-semibold">How It Works</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-[#5f5244]">
            <li>Share your products and availability with CFC.</li>
            <li>We support merchandising, customer communication, and order flow.</li>
            <li>Your products move through coordinated fulfillment across the County.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-5">
          <h3 className="mb-2 text-lg font-semibold">Why We’re Doing This</h3>
          <p className="text-sm leading-6 text-[#5f5244]">
            To empower excellent producers to stay focused on the field while CFC handles marketing,
            accounts receivable, and logistics so local food can reach more County households.
          </p>
        </div>
      </div>

      <a href="mailto:info@countyfarmcollective.com?subject=Vendor%20Inquiry%20-%20County%20Farm%20Collective" className="mb-8 inline-flex rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold hover:bg-[#f3ece1]">Email to Get Started</a>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoBlock title="Weekly Schedule" points={[
          'Placeholder: Order intake cutoff timing',
          'Placeholder: Delivery/pickup fulfillment day',
          'Placeholder: Vendor update and handoff windows',
        ]} />
        <InfoBlock title="Markup Strategy" points={[
          'Placeholder: CFC markup framework overview',
          'Placeholder: How pricing is communicated',
          'Placeholder: Margin and payout transparency notes',
        ]} />
        <InfoBlock title="Program Details" points={[
          'Placeholder: Product standards and expectations',
          'Placeholder: Onboarding checklist',
          'Placeholder: Payment/payout cadence and contacts',
        ]} />
      </div>
    </section>
  )
}

function TransparencyPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}transparency/latest/summary.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(setData)
      .catch((e) => setError(e.message))
  }, [])

  const metrics = data?.metrics || {}

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-3xl font-bold">Transparency Dashboard</h2>
      <p className="mb-8 text-[#6d5f50]">Public monthly operating snapshot from CFC transparency pack JSON.</p>

      {error && <p className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">Could not load summary.json ({error})</p>}

      {!error && !data && <p className="text-[#6d5f50]">Loading latest transparency pack...</p>}

      {data && (
        <>
          <div className="mb-6 grid gap-3 md:grid-cols-3">
            <MetricCard label="Month" value={data.month} />
            <MetricCard label="Status" value={data.status} />
            <MetricCard label="Currency" value={data.currency} />
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard label="GMV" value={fmt(metrics.gmv_cents)} />
            <MetricCard label="Commission Revenue" value={fmt(metrics.commission_revenue_cents)} />
            <MetricCard label="Vendor Payout Accrued" value={fmt(metrics.vendor_payout_accrued_cents)} />
            <MetricCard label="Vendor Payout Paid" value={fmt(metrics.vendor_payout_paid_cents)} />
            <MetricCard label="Processing Fees" value={fmt(metrics.processing_fees_cents)} />
            <MetricCard label="Operating Expenses" value={fmt(metrics.operating_expenses_cents)} />
            <MetricCard label="Net Operating Result" value={fmt(metrics.net_operating_result_cents)} />
            <MetricCard label="Ending Vendor Payable" value={fmt(metrics.ending_vendor_payable_cents)} />
          </div>

          <div className="mt-8 rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-5">
            <h3 className="mb-2 text-lg font-semibold">Raw JSON</h3>
            <pre className="overflow-auto rounded bg-slate-900 p-4 text-xs text-slate-100">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </>
      )}
    </section>
  )
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-[#3F3228]">{value ?? '—'}</p>
    </div>
  )
}

function fmt(cents) {
  if (typeof cents !== 'number') return '—'
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(cents / 100)
}

function InfoBlock({ title, points }) {
  return (
    <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-4">
      <h4 className="mb-2 text-base font-semibold text-[#3F3228]">{title}</h4>
      <ul className="list-disc space-y-1 pl-5 text-sm text-[#5f5244]">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function App() {
  return (
    <Frame>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/our-vendors" element={<VendorsDirectoryPage />} />
        <Route path="/our-vendors/:vendorSlug" element={<VendorProfilePlaceholder />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
      </Routes>
    </Frame>
  )
}
