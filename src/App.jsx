function Card({ title, blurb, cta, href = '#', external = false }) {
  return (
    <article className="rounded-xl border border-slate-300 bg-white p-6 text-left">
      <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mb-5 text-sm leading-6 text-slate-600">{blurb}</p>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        className="inline-flex items-center rounded-md border border-slate-400 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
      >
        {cta}
      </a>
    </article>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-300 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Wireframe</p>
            <h1 className="text-lg font-semibold">County Farm Collective</h1>
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

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Landing Page IA Draft</p>
        <h2 className="mb-4 text-4xl font-bold tracking-tight">Local food, organized weekly.</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          This page routes visitors quickly to the right next step: shop now, become a customer, or sell as a vendor.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3">
        <Card
          title="Shop Right Now"
          blurb="For people who already know what they need. Fast path to the active Local Line storefront."
          cta="Go to Storefront"
          href="https://cfc.localline.ca"
          external
        />
        <Card
          title="Become a Customer"
          blurb="For new households/restaurants exploring how ordering, fulfillment, and weekly cycles work."
          cta="Customer Info"
          href="#customers"
        />
        <Card
          title="Sell as a Vendor"
          blurb="For producers interested in joining the collective and understanding onboarding and expectations."
          cta="Vendor Info"
          href="#vendors"
        />
      </section>

      <section id="customers" className="mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="rounded-xl border border-slate-300 bg-white p-6">
          <h3 className="mb-2 text-2xl font-semibold">Customer Path (Wireframe)</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>How it works (weekly ordering + fulfillment options)</li>
            <li>Pickup/delivery zones and cadence</li>
            <li>FAQ + link to live storefront</li>
          </ul>
        </div>
      </section>

      <section id="vendors" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-slate-300 bg-white p-6">
          <h3 className="mb-2 text-2xl font-semibold">Vendor Path (Wireframe)</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Who we work with and product expectations</li>
            <li>Weekly flow: intake, fulfillment, payout cadence</li>
            <li>Apply/Contact CTA for onboarding conversation</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
