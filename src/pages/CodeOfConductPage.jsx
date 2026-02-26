import { Link } from 'react-router-dom'

const membershipRules = [
  'Members must be active food producers, processors, or value-added makers aligned with CFC’s local-first mission.',
  'Priority is given to producers operating in Prince Edward County; adjacent regions may be considered if they strengthen (not dilute) local resilience.',
  'Members must demonstrate consistent product quality, reliable fulfillment practices, and respectful communication.',
  'Members agree to provide accurate business, product, and pricing information at all times.',
]

const productRules = [
  'Products must be legal, safe, and accurately represented.',
  'Products should be locally grown, raised, made, or materially transformed by the selling member.',
  'CFC may restrict products that are inconsistent with local-first principles, quality standards, or customer trust expectations.',
  'Claims (e.g., organic, pasture-raised, local, regenerative, allergen-safe) must be truthful and verifiable.',
  'CFC reserves the right to decline products that create brand, safety, or mission risk.',
]

const transparencyRules = [
  'Members must not misrepresent origin, ingredients, production methods, availability, or inventory.',
  'Substitutions require clear customer communication and equivalent-or-better value unless otherwise approved.',
  'Pricing must be intentional and fair; bait pricing or misleading promotions are not permitted.',
  'Any known quality/safety issue must be disclosed to CFC immediately.',
]

const operationsRules = [
  'Members are expected to meet agreed order, packing, and delivery timelines.',
  'Chronic late fulfillment, shorting without notice, or repeated quality failures trigger review.',
  'Members must maintain responsive communication with CFC operations on active orders/issues.',
  'CFC systems and workflows (including listing standards and deadlines) are mandatory participation requirements.',
]

const conductRules = [
  'Members treat customers, staff, and other producers with professionalism and respect.',
  'Harassment, discrimination, or abusive behavior is grounds for immediate action.',
  'Members should contribute to a cooperative culture: clear communication, accountability, and problem-solving.',
  'Public conduct that materially harms CFC trust may be reviewed under this code.',
]

const governanceRules = [
  'CFC leadership retains final approval over membership and product eligibility.',
  'Concerns may trigger: warning, corrective action plan, temporary suspension, or removal.',
  'Severe violations (safety, fraud, abuse, repeated bad-faith conduct) may result in immediate suspension/removal.',
  'Members may request a review of decisions; CFC will provide rationale and next steps.',
]

function RuleSection({ title, items }) {
  return (
    <section className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <ul className="space-y-2 text-[#4e4238]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 text-[#2F5D50]">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function CodeOfConductPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Home</Link>

      <div className="mb-8 rounded-xl border border-[#8FA27A] bg-[#edf3e8] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F5D50]">Draft Policy</p>
        <h1 className="mt-2 text-3xl font-bold">CFC Code of Conduct (v0.1)</h1>
        <p className="mt-3 text-[#4e4238]">
          County Farm Collective exists to strengthen local food systems by connecting customers with trusted producers and products that reflect Prince Edward County values: quality, transparency, fairness, and community.
        </p>
      </div>

      <div className="grid gap-5">
        <RuleSection title="1) Membership: Who Can Join" items={membershipRules} />
        <RuleSection title="2) Product Eligibility: What Can Be Sold" items={productRules} />
        <RuleSection title="3) Transparency & Integrity" items={transparencyRules} />
        <RuleSection title="4) Operations Standards" items={operationsRules} />
        <RuleSection title="5) Community Conduct" items={conductRules} />

        <section className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6">
          <h3 className="mb-3 text-xl font-semibold">6) Mission Guardrails (Decision Test)</h3>
          <p className="mb-3 text-[#4e4238]">Before approving a product, member, or policy, ask:</p>
          <ul className="space-y-2 text-[#4e4238]">
            <li>• Does this strengthen local food resilience?</li>
            <li>• Does this increase or erode customer trust?</li>
            <li>• Does this align with CFC’s quality bar?</li>
            <li>• Would we be proud to explain this decision publicly?</li>
          </ul>
          <p className="mt-4 text-sm text-[#6d5f50]">If the answer is unclear, decision is paused pending review.</p>
        </section>

        <RuleSection title="7) Governance & Enforcement" items={governanceRules} />

        <section className="rounded-xl border border-[#d9cebf] bg-[#fffdf8] p-6">
          <h3 className="mb-3 text-xl font-semibold">8) Continuous Improvement</h3>
          <ul className="space-y-2 text-[#4e4238]">
            <li>• This code is a living document and will be reviewed at least quarterly.</li>
            <li>• Standards may evolve with seasonality, growth, and regulatory or operational realities.</li>
            <li>• Updates will be shared clearly with members before enforcement dates.</li>
          </ul>
        </section>
      </div>
    </section>
  )
}
