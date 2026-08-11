import AnimateIn from './ui/AnimateIn'
import { CartoonRocket, ScribbleUnderline } from './scribbles/Scribbles'
import { tracks } from '../data/content'

export default function Tracks() {
  return (
    <section id="tracks" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <AnimateIn>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">Programs</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Pick a path. Build real AI skills.
            </h2>
            <div className="mt-2">
              <p className="font-scribble text-2xl text-sky-deep">career tracks</p>
              <ScribbleUnderline className="h-3 w-28" color="#3b8eea" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <CartoonRocket className="h-20 w-20" />
          </AnimateIn>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tracks.map((track, i) => (
            <AnimateIn key={track.id} delay={i * 0.05}>
              <article className="group h-full rounded-[1.75rem] border border-black/5 bg-paper p-5 transition hover:-translate-y-1 hover:border-sky/40 hover:bg-sky-soft/40">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sky-deep">
                  {track.id}
                </p>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{track.title}</h3>
                <p className="mt-2 text-sm text-mute">{track.subtitle}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
