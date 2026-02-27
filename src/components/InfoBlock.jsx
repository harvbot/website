export default function InfoBlock({ title, points }) {
  return (
    <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-5 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
      <h4 className="mb-3 text-lg font-semibold text-[#3F3228]">{title}</h4>
      <ul className="space-y-2 text-sm leading-6 text-[#5f5244]">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8FA27A]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
