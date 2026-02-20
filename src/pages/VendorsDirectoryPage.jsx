import { Link } from 'react-router-dom'
import VendorLogo from '../components/VendorLogo'
import { getVendorLogo, vendorList } from '../data/vendors'
import { slugify } from '../utils/strings'

export default function VendorsDirectoryPage() {
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
            className="flex items-center gap-3 rounded-lg border border-[#d9cebf] bg-[#fffdf8] px-4 py-3 text-sm font-medium text-[#3F3228] hover:bg-[#f3ece1]"
          >
            <VendorLogo name={vendor} src={getVendorLogo(vendor)} className="h-10 w-10" />
            <span>{vendor}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
