import { companies } from '../data/content'
import AnimateIn from './ui/AnimateIn'

export default function TrustedBy() {
  const row = [...companies, ...companies]

  return (
    <section className="border-y border-black/5 bg-paper py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn>
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-[0.18em] text-mute">
            Instructors & mentors from top companies
          </p>
        </AnimateIn>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-paper to-transparent" />
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
            {row.map((company, i) => (
              <div
                key={`${company}-${i}`}
                className="flex h-14 min-w-[140px] items-center justify-center rounded-2xl bg-white px-5 text-sm font-extrabold tracking-wide text-ink/70 shadow-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-mute">
          Company logos represent instructor or mentor professional experience. No endorsement
          or affiliation is implied.
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
