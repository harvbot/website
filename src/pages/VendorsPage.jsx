import { Link } from 'react-router-dom'
import InfoBlock from '../components/InfoBlock'

export default function VendorsPage() {
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

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <Link to="/code-of-conduct" className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-5 transition hover:border-[#8FA27A] hover:bg-[#f8f4ec]">
          <p className="text-xs uppercase tracking-[0.16em] text-[#8a7b69]">Governance</p>
          <h3 className="mt-2 text-lg font-semibold">Code of Conduct</h3>
          <p className="mt-2 text-sm text-[#5f5244]">Review membership standards, product eligibility rules, and enforcement guardrails.</p>
        </Link>
        <Link to="/transparency" className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-5 transition hover:border-[#8FA27A] hover:bg-[#f8f4ec]">
          <p className="text-xs uppercase tracking-[0.16em] text-[#8a7b69]">Reporting</p>
          <h3 className="mt-2 text-lg font-semibold">Transparency Dashboard</h3>
          <p className="mt-2 text-sm text-[#5f5244]">See month-over-month financial trend and payout transparency metrics.</p>
        </Link>
      </div>

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
