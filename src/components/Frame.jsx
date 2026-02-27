import { Link, NavLink } from 'react-router-dom'

const navItem = ({ isActive }) =>
  `text-sm font-medium transition ${isActive ? 'text-[#2F5D50]' : 'text-[#5f5244] hover:text-[#2F5D50]'}`

export default function Frame({ children }) {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#3F3228]">
      <header className="sticky top-0 z-20 border-b border-[#e2d8ca] bg-[#fdfaf4]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7b69]">Prince Edward County</p>
            <Link to="/" className="text-xl font-semibold tracking-tight hover:text-[#2F5D50]">County Farm Collective</Link>
          </div>

          <nav className="hidden items-center gap-5 md:flex">
            <NavLink to="/customers" className={navItem}>Customers</NavLink>
            <NavLink to="/our-vendors" className={navItem}>Vendors</NavLink>
            <NavLink to="/transparency" className={navItem}>Transparency</NavLink>
          </nav>

          <a
            href="https://cfc.localline.ca"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#264d43]"
          >
            Shop Weekly
          </a>
        </div>
      </header>
      {children}
    </main>
  )
}
