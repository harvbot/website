import { Link, Route, Routes } from 'react-router-dom'

function Frame({ children }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-300 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Wireframe</p>
            <Link to="/" className="text-lg font-semibold hover:underline">County Farm Collective</Link>
          </div>
          <a
            href="https://cfc.localline.ca"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Shop Now
          </a>
        </div>
      </header>
      {children}
    </main>
  )
}

function Landing() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Landing Page IA Draft</p>
        <h2 className="mb-4 text-4xl font-bold tracking-tight">Local food, organized weekly.</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          Choose the path that fits what you need right now.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3">
        <article className="rounded-xl border border-slate-300 bg-white p-6 text-left">
          <h3 className="mb-2 text-xl font-semibold">Shop Right Now</h3>
          <p className="mb-5 text-sm leading-6 text-slate-600">Fast path to the active Local Line storefront.</p>
          <a href="https://cfc.localline.ca" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-slate-400 px-4 py-2 text-sm font-medium hover:bg-slate-100">Go to Storefront</a>
        </article>

        <article className="rounded-xl border border-slate-300 bg-white p-6 text-left">
          <h3 className="mb-2 text-xl font-semibold">Become a Customer</h3>
          <p className="mb-5 text-sm leading-6 text-slate-600">Explore ordering flow, quality standards, and newsletter.</p>
          <Link to="/customers" className="inline-flex items-center rounded-md border border-slate-400 px-4 py-2 text-sm font-medium hover:bg-slate-100">Customer Info</Link>
        </article>

        <article className="rounded-xl border border-slate-300 bg-white p-6 text-left">
          <h3 className="mb-2 text-xl font-semibold">Sell as a Vendor</h3>
          <p className="mb-5 text-sm leading-6 text-slate-600">See schedule, markup framework, and onboarding path.</p>
          <Link to="/vendors" className="inline-flex items-center rounded-md border border-slate-400 px-4 py-2 text-sm font-medium hover:bg-slate-100">Vendor Info</Link>
        </article>
      </section>
    </>
  )
}

function CustomersPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-slate-600 hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-3xl font-bold">Customer Information</h2>
      <p className="mb-8 text-slate-600">For households and restaurants looking to buy high-quality food from as close as possible in the County.</p>

      <div className="mb-8 flex flex-wrap gap-2">
        <a href="https://cfc.localline.ca" target="_blank" rel="noreferrer" className="rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100">Shop Now</a>
        <a href="#newsletter" className="rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Join Newsletter</a>
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

      <div id="newsletter" className="mt-8 rounded-xl border border-slate-300 bg-white p-6">
        <h3 className="mb-2 text-xl font-semibold">Newsletter (Wireframe)</h3>
        <p className="text-slate-600">Join our newsletter for weekly updates on what’s fresh and available for sale in the County.</p>
      </div>
    </section>
  )
}

function VendorsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-slate-600 hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-3xl font-bold">Vendor Information</h2>
      <p className="mb-8 text-slate-600">Interested in selling through County Farm Collective? Start with an intro email.</p>

      <a href="mailto:info@countyfarmcollective.com?subject=Vendor%20Inquiry%20-%20County%20Farm%20Collective" className="mb-8 inline-flex rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100">Email to Get Started</a>

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

function InfoBlock({ title, points }) {
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-4">
      <h4 className="mb-2 text-base font-semibold text-slate-900">{title}</h4>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <Frame>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
      </Routes>
    </Frame>
  )
}
