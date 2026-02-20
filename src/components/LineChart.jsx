export default function LineChart({ data, selectedMonth }) {
  if (!data?.length) return <p className="text-sm text-[#6d5f50]">No monthly data available yet.</p>

  const width = 900
  const height = 260
  const pad = 30

  const values = data.flatMap((d) => [d.operatingCash, d.vendorPayouts, d.totalProductsSold]).filter((v) => typeof v === 'number')
  const maxVal = Math.max(...values, 1)

  const x = (i) => pad + (i * (width - pad * 2)) / Math.max(data.length - 1, 1)
  const y = (v) => height - pad - (v / maxVal) * (height - pad * 2)

  const pathFor = (key) => {
    const pts = data
      .map((d, i) => ({ x: x(i), y: y(d[key]), ok: typeof d[key] === 'number' }))
      .filter((p) => p.ok)
    if (!pts.length) return ''
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  }

  const lines = [
    { key: 'operatingCash', label: 'Operating Cash', color: '#2F5D50' },
    { key: 'vendorPayouts', label: 'Vendor Payouts', color: '#B86F4B' },
    { key: 'totalProductsSold', label: 'Total Products Sold', color: '#3B82F6' },
  ]

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full rounded border border-[#e3d8c9] bg-white">
        <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="#d8ccbc" />
        <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="#d8ccbc" />

        {lines.map((line) => (
          <path key={line.key} d={pathFor(line.key)} fill="none" stroke={line.color} strokeWidth="2.5" />
        ))}

        {data.map((d, i) => {
          const cx = x(i)
          const isSelected = d.month === selectedMonth
          return (
            <g key={d.month}>
              <line x1={cx} y1={height - pad} x2={cx} y2={height - pad + 5} stroke="#b9ac9b" />
              <text x={cx} y={height - 8} textAnchor="middle" fontSize="10" fill={isSelected ? '#2F5D50' : '#7b6f61'}>
                {d.month}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="mt-3 flex flex-wrap gap-4 text-sm">
        {lines.map((line) => (
          <div key={line.key} className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: line.color }} />
            <span>{line.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
