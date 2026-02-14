function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">County Farm Collective</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Website is under construction</h1>
        <p className="mb-8 text-base text-slate-600 sm:text-lg">
          We’re building the new CFC site. In the meantime, you can order directly from our storefront.
        </p>

        <a
          href="https://cfc.localline.ca"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
        >
          Go to Storefront
        </a>
      </div>
    </main>
  )
}

export default App
