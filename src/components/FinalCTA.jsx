import AnimateIn from './ui/AnimateIn'
import { CloudDivider, ScribbleCircle } from './scribbles/Scribbles'
import { stats } from '../data/content'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#8ec5f8] to-[#5aa3ec] pt-16 text-white sm:pt-24">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Ready to start your{' '}
            <span className="relative inline-block">
              <span className="relative z-10">AI/ML journey?</span>
              <ScribbleCircle className="absolute -inset-x-3 -inset-y-2 z-0" color="#fbbf24" />
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Join learners who are already building the future with artificial intelligence —
            with mentors, community, and real projects.
          </p>
          <a
            href="https://www.codebuzz.us/"
            className="mt-8 inline-flex rounded-2xl bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-ink shadow-lg transition hover:-translate-y-0.5"
          >
            Get Started Today
          </a>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.05}>
              <div className="rounded-[1.5rem] bg-white/15 px-4 py-6 text-center backdrop-blur">
                <p className="text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
      <CloudDivider className="mt-16" fill="#141414" />
    </section>
  )
}
