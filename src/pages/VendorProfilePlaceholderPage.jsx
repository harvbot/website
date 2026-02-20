import { Link } from 'react-router-dom'
import InfoBlock from '../components/InfoBlock'

export default function VendorProfilePlaceholderPage() {
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
