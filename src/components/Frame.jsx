import { Link } from 'react-router-dom'

export default function Frame({ children }) {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#3F3228]">
      <header className="border-b border-[#d8ccbc] bg-[#fdfaf4]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8a7b69]">Prince Edward County</p>
            <Link to="/" className="text-lg font-semibold hover:text-[#2F5D50]">County Farm Collective</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/transparency" className="rounded-md border border-[#8FA27A] px-4 py-2 text-sm font-semibold text-[#2F5D50] hover:bg-[#edf3e8]">
              Transparency
            </Link>
            <a
              href="https://cfc.localline.ca"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#2F5D50] px-4 py-2 text-sm font-semibold text-[#f7f4ed] hover:bg-[#264d43]"
            >
              Shop Weekly
            </a>
          </div>
        </div>
      </header>
      {children}
    </main>
  )
}
