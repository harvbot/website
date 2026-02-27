import { Link } from 'react-router-dom'
import InfoBlock from '../components/InfoBlock'

export default function CustomersPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-4xl font-bold tracking-tight">Customer Information</h2>
      <p className="mb-8 max-w-3xl text-[#6d5f50]">For households and restaurants who want exceptional local food with a predictable weekly routine.</p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <h3 className="mb-2 text-lg font-semibold">How ordering works</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-[#5f5244]">
            <li>Browse weekly availability from County producers.</li>
            <li>Place your order through the CFC storefront.</li>
            <li>Pick up or receive delivery on the weekly schedule.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <h3 className="mb-2 text-lg font-semibold">What to expect</h3>
          <p className="text-sm leading-6 text-[#5f5244]">
            Product mix changes with seasonality, quality standards stay high, and communications stay clear so you always know what is available each week.
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <a href="https://cfc.localline.ca" target="_blank" rel="noreferrer" className="rounded-full bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] hover:bg-[#264d43]">Shop now</a>
        <Link to="/our-vendors" className="rounded-full border border-[#c8bca9] bg-[#fffdf8] px-5 py-2.5 text-sm font-semibold text-[#3F3228] hover:bg-[#f5efe4]">Browse vendors</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoBlock title="Weekly schedule" points={[
          'Order window refreshes weekly with current availability.',
          'Fulfillment timing is communicated clearly during checkout.',
          'You’ll receive confirmation and pickup/delivery details automatically.',
        ]} />
        <InfoBlock title="Food standards" points={[
          'We prioritize County-grown and County-made products first.',
          'Seasonality is reflected honestly in weekly selections.',
          'When supply is tight, we communicate substitutions or limits early.',
        ]} />
        <InfoBlock title="Communication" points={[
          'Weekly updates highlight what is fresh and notable.',
          'Customer messages focus on useful details, not noise.',
          'Support is available through CFC for order issues and clarifications.',
        ]} />
      </div>

      <div id="newsletter" className="mt-8 rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
        <h3 className="mb-2 text-xl font-semibold">Weekly newsletter</h3>
        <p className="text-[#6d5f50]">Get a concise update each week on fresh products, featured vendors, and key notes before ordering closes.</p>
      </div>
    </section>
  )
}
