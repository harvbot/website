export default function VendorLogo({ name, src, className = 'h-14 w-14' }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  if (src) {
    return <img src={src} alt={`${name} logo`} className={`${className} rounded-lg border border-[#d9cebf] bg-white object-cover`} loading="lazy" />
  }

  return (
    <div className={`${className} flex items-center justify-center rounded-lg border border-[#d9cebf] bg-[#f3ece1] text-xs font-semibold tracking-wide text-[#6d5f50]`}>
      {initials}
    </div>
  )
}
