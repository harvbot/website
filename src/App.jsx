import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold">County Farm Collective</h1>
          <a href="https://cfc.localline.ca" target="_blank" rel="noreferrer" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Shop Storefront</a>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">Project 6 • Public Website</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Fresh food. Local farms. Reliable fulfillment.</h2>
          <p className="max-w-2xl text-lg text-slate-600">County Farm Collective connects local producers with households and restaurants across Prince Edward County.</p>
        </section>
      </main>
    </div>
  )
}

export default App
