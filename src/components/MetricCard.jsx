export default function MetricCard({ label, value }) {
  return (
    <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-[#3F3228]">{value ?? '—'}</p>
    </div>
  )
}
