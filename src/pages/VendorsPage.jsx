import { Link } from 'react-router-dom'
import InfoBlock from '../components/InfoBlock'

export default function VendorsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-4xl font-bold tracking-tight">Vendor Information</h2>
      <p className="mb-8 text-[#6d5f50]">Interested in selling through County Farm Collective? Start with a quick intro email and we’ll guide the next step.</p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <h3 className="mb-2 text-lg font-semibold">How it works</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-[#5f5244]">
            <li>Share your product list and expected weekly availability.</li>
            <li>CFC supports merchandising, communication, and order coordination.</li>
            <li>Products move through a weekly fulfillment rhythm for County customers.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <h3 className="mb-2 text-lg font-semibold">Program focus</h3>
          <p className="text-sm leading-6 text-[#5f5244]">
            We help strong producers stay focused on growing and making while CFC handles customer-facing coordination, repeat purchasing, and transparent payout flow.
          </p>
        </div>
      </div>

      <a href="mailto:info@countyfarmcollective.com?subject=Vendor%20Inquiry%20-%20County%20Farm%20Collective" className="mb-8 inline-flex rounded-full bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] hover:bg-[#264d43]">Email to get started</a>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <Link to="/code-of-conduct" className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 transition hover:border-[#8FA27A] hover:bg-[#f8f4ec]">
          <p className="text-xs uppercase tracking-[0.16em] text-[#8a7b69]">Governance</p>
          <h3 className="mt-2 text-lg font-semibold">Code of Conduct</h3>
          <p className="mt-2 text-sm text-[#5f5244]">Membership standards, product eligibility, and enforcement guardrails.</p>
        </Link>
        <Link to="/transparency" className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 transition hover:border-[#8FA27A] hover:bg-[#f8f4ec]">
          <p className="text-xs uppercase tracking-[0.16em] text-[#8a7b69]">Reporting</p>
          <h3 className="mt-2 text-lg font-semibold">Transparency Dashboard</h3>
          <p className="mt-2 text-sm text-[#5f5244]">Monthly metrics, payout visibility, and operating trend context.</p>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoBlock title="Weekly cadence" points={[
          'Weekly intake and fulfillment schedule is shared in advance.',
          'Vendors get clear deadlines for availability updates.',
          'Operational notes are consolidated into one weekly flow.',
        ]} />
        <InfoBlock title="Pricing + payout" points={[
          'Pricing expectations are reviewed before products go live.',
          'Payout calculations are handled with a transparent ledger workflow.',
          'Weekly payout summaries are documented and traceable.',
        ]} />
        <InfoBlock title="Onboarding" points={[
          'Initial fit call and product review.',
          'Basic catalog setup and operating expectations.',
          'First-cycle support through listing to payout completion.',
        ]} />
      </div>
    </section>
  )
}
