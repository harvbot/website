'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition ${isActive ? 'text-brand-primary' : 'text-[#5f5244] hover:text-brand-primary'}`}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e2d8ca] bg-[#fdfaf4]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/cabbage.png" alt="" className="h-10 w-auto" />
          <span className="font-amatic text-2xl font-bold leading-none">County Farm Collective</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          <NavLink href="/customers">Customers</NavLink>
          <NavLink href="/vendors">Vendors</NavLink>
        </nav>

        <a
          href="https://cfc.localline.ca"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-primary-dark"
        >
          Shop Weekly
        </a>
      </div>
    </header>
  )
}
