export default function InfoBlock({ title, points }) {
  return (
    <div className="rounded-lg border border-[#d9cebf] bg-[#fffdf8] p-4">
      <h4 className="mb-2 text-base font-semibold text-[#3F3228]">{title}</h4>
      <ul className="list-disc space-y-1 pl-5 text-sm text-[#5f5244]">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}
