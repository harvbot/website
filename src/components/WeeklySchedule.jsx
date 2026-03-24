export default function WeeklySchedule({ days }) {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <div className="grid min-w-[560px] grid-cols-7">
        {days.map(({ day, bg, dark, content }, i) => (
          <div
            key={day}
            style={{ backgroundColor: bg }}
            className={`flex flex-col gap-3 px-2 py-4 ${i === 0 ? 'rounded-l-2xl' : ''} ${i === 6 ? 'rounded-r-2xl' : ''}`}
          >
            <p className={`text-center text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-white/80' : 'text-[#3F3228]/70'}`}>
              {day}
            </p>
            <div className={`flex flex-1 items-center justify-center ${dark ? 'text-white' : 'text-[#3F3228]'}`}>
              {content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
