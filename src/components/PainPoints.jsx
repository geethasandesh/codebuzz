import AnimateIn from './ui/AnimateIn'
import { ScribbleUnderline } from './scribbles/Scribbles'
import { painPoints } from '../data/content'

export default function PainPoints() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">
            Is this you?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Struggling to understand where to start in AI?
          </h2>
          <div className="mx-auto mt-2 w-fit">
            <p className="font-scribble text-2xl text-scribble">we get it</p>
            <ScribbleUnderline className="mx-auto h-3 w-24" />
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.05}>
              <article className="h-full rounded-[1.75rem] bg-paper p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,40,80,0.08)]">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-sky text-sm font-extrabold text-white">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-extrabold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
