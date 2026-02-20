import { Link } from 'react-router-dom'
import InfoBlock from '../components/InfoBlock'

export default function CustomersPage() {
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
