import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LineChart from '../components/LineChart'
import MetricCard from '../components/MetricCard'

function fmt(cents) {
  if (typeof cents !== 'number') return '—'
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(cents / 100)
}

function pickNumber(...values) {
  return values.find((v) => typeof v === 'number')
}

export default function TransparencyPage() {
  const { month: monthParam } = useParams()
  const navigate = useNavigate()
  const [summaries, setSummaries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true

    async function load() {
      try {
        setError('')
        const base = import.meta.env.BASE_URL

        let items = []
        try {
          const idxRes = await fetch(`${base}transparency/index.json`)
          if (idxRes.ok) {
            const idx = await idxRes.json()
            items = Array.isArray(idx.months) ? idx.months : []
          }
        } catch {
          // fallback below
        }

        if (items.length === 0) {
          const latestRes = await fetch(`${base}transparency/latest/summary.json`)
          if (!latestRes.ok) throw new Error(`HTTP ${latestRes.status}`)
          const latest = await latestRes.json()
          items = [{ month: latest.month, path: 'latest' }]
        }

        const loaded = await Promise.all(
          items.map(async (item) => {
            const month = item.month
            const path = item.path || item.month
            const res = await fetch(`${base}transparency/${path}/summary.json`)
            if (!res.ok) throw new Error(`HTTP ${res.status} while loading ${month}`)
            const json = await res.json()
            return { ...json, __path: path }
          }),
        )

        loaded.sort((a, b) => a.month.localeCompare(b.month))

        if (!alive) return
        setSummaries(loaded)
      } catch (e) {
        if (!alive) return
        setError(e.message)
      }
    }

    load()
    return () => {
      alive = false
    }
  }, [])

  const currentIndex = useMemo(() => {
    if (!summaries.length) return -1
    if (!monthParam) return summaries.length - 1
    return summaries.findIndex((s) => s.month === monthParam)
  }, [summaries, monthParam])

  const selected = currentIndex >= 0 ? summaries[currentIndex] : summaries[summaries.length - 1]

  const series = useMemo(() => {
    return summaries.map((s) => {
      const m = s.metrics || {}
      return {
        month: s.month,
        operatingCash: pickNumber(m.operating_cash_cents, m.net_operating_result_cents),
        vendorPayouts: pickNumber(m.vendor_payout_paid_cents, m.vendor_payout_accrued_cents),
        totalProductsSold: pickNumber(m.total_products_sold_cents, m.gmv_cents),
      }
    })
  }, [summaries])

  const goToMonth = (idx) => {
    const target = summaries[idx]
    if (!target) return
    navigate(`/transparency/${target.month}`)
  }

  const metrics = selected?.metrics || {}

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link to="/" className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline">← Back to Home</Link>
      <h2 className="mb-3 text-4xl font-bold tracking-tight">Transparency Dashboard</h2>
      <p className="mb-8 text-[#6d5f50]">A simple monthly view of operating metrics and payout visibility.</p>

      {error && <p className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">Could not load transparency data ({error})</p>}
      {!error && !selected && <p className="text-[#6d5f50]">Loading transparency data...</p>}

      {selected && (
        <>
          <div className="mb-6 rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">Monthly trend</h3>
              <div className="flex items-center gap-2">
                <button className="rounded-full border border-[#d8ccbc] px-3 py-1.5 text-sm disabled:opacity-40" onClick={() => goToMonth(currentIndex - 1)} disabled={currentIndex <= 0}>← Previous</button>
                <button className="rounded-full border border-[#d8ccbc] px-3 py-1.5 text-sm disabled:opacity-40" onClick={() => goToMonth(currentIndex + 1)} disabled={currentIndex >= summaries.length - 1}>Next →</button>
              </div>
            </div>

            <p className="mb-3 text-sm text-[#6d5f50]">
              Viewing <strong>{selected.month}</strong> ({selected.status || 'status n/a'})
            </p>

            <LineChart data={series} selectedMonth={selected.month} />
            <p className="mt-3 text-xs text-[#7a6b5c]">Series shown in CAD: Operating Cash, Vendor Payouts, and Total Products Sold.</p>
          </div>

          <div className="mb-6 grid gap-3 md:grid-cols-3">
            <MetricCard label="Month" value={selected.month} />
            <MetricCard label="Status" value={selected.status} />
            <MetricCard label="Currency" value={selected.currency} />
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard label="Operating Cash" value={fmt(pickNumber(metrics.operating_cash_cents, metrics.net_operating_result_cents))} />
            <MetricCard label="Vendor Payouts" value={fmt(pickNumber(metrics.vendor_payout_paid_cents, metrics.vendor_payout_accrued_cents))} />
            <MetricCard label="Total Products Sold" value={fmt(pickNumber(metrics.total_products_sold_cents, metrics.gmv_cents))} />
            <MetricCard label="GMV" value={fmt(metrics.gmv_cents)} />
            <MetricCard label="Commission Revenue" value={fmt(metrics.commission_revenue_cents)} />
            <MetricCard label="Vendor Payout Accrued" value={fmt(metrics.vendor_payout_accrued_cents)} />
            <MetricCard label="Vendor Payout Paid" value={fmt(metrics.vendor_payout_paid_cents)} />
            <MetricCard label="Processing Fees" value={fmt(metrics.processing_fees_cents)} />
            <MetricCard label="Operating Expenses" value={fmt(metrics.operating_expenses_cents)} />
            <MetricCard label="Net Operating Result" value={fmt(metrics.net_operating_result_cents)} />
            <MetricCard label="Ending Vendor Payable" value={fmt(metrics.ending_vendor_payable_cents)} />
          </div>
        </>
      )}
    </section>
  )
}
