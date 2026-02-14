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

function InfoBlock({ title, points }) {
  return (
    <div className="rounded-lg border border-slate-300 bg-slate-50 p-4">
      <h4 className="mb-2 text-base font-semibold text-slate-900">{title}</h4>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
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
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-semibold">Customer Path (Wireframe)</h3>
              <p className="text-slate-600">For people exploring how CFC works and ready to buy local food with confidence.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://cfc.localline.ca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Shop Now
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
              >
                Join Newsletter
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <InfoBlock
              title="Weekly Schedule"
              points={[
                'Placeholder: Weekly order window and cutoff timing',
                'Placeholder: Fulfillment day(s) for pickup and delivery',
                'Placeholder: Where/when customers receive updates',
              ]}
            />
            <InfoBlock
              title="How We Represent Farmers"
              points={[
                'Placeholder: How producer stories and product origin are communicated',
                'Placeholder: How we curate and present seasonal availability',
                'Placeholder: How customer trust is built through transparency',
              ]}
            />
            <InfoBlock
              title="Quality + Proximity Standards"
              points={[
                'Placeholder: Highest-quality-first sourcing principles',
                'Placeholder: As-close-as-possible local sourcing preference',
                'Placeholder: How tradeoffs are handled when supply is limited',
              ]}
            />
          </div>
        </div>
      </section>

      <section id="newsletter" className="mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="rounded-xl border border-slate-300 bg-white p-6">
          <h3 className="mb-2 text-2xl font-semibold">Newsletter (Wireframe)</h3>
          <p className="mb-4 text-slate-600">
            Join our newsletter to get up-to-date updates on what’s fresh and available for sale in the County.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoBlock
              title="What Subscribers Receive"
              points={[
                'Weekly fresh product highlights',
                'New arrivals and limited quantities',
                'Order window reminders + key deadlines',
              ]}
            />
            <InfoBlock
              title="Signup CTA"
              points={[
                'Placeholder: newsletter signup form/embed',
                'Placeholder: privacy/consent language',
                'Placeholder: confirmation and welcome flow',
              ]}
            />
          </div>
        </div>
      </section>

      <section id="vendors" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-slate-300 bg-white p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-semibold">Vendor Path (Wireframe)</h3>
              <p className="text-slate-600">Interested in selling through County Farm Collective? Start with a quick intro email.</p>
            </div>
            <a
              href="mailto:info@countyfarmcollective.com?subject=Vendor%20Inquiry%20-%20County%20Farm%20Collective"
              className="inline-flex items-center justify-center rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Email to Get Started
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <InfoBlock
              title="Weekly Schedule"
              points={[
                'Placeholder: Order intake cutoff timing',
                'Placeholder: Delivery/pickup fulfillment day',
                'Placeholder: Vendor update and handoff windows',
              ]}
            />
            <InfoBlock
              title="Markup Strategy"
              points={[
                'Placeholder: CFC markup framework overview',
                'Placeholder: How pricing is communicated',
                'Placeholder: Margin and payout transparency notes',
              ]}
            />
            <InfoBlock
              title="Program Details"
              points={[
                'Placeholder: Product standards and expectations',
                'Placeholder: Onboarding checklist',
                'Placeholder: Payment/payout cadence and contacts',
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
