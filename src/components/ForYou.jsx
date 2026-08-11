import { Check, X } from 'lucide-react'
import AnimateIn from './ui/AnimateIn'
import { CartoonBook, FloatingCharm, ScribbleArrow } from './scribbles/Scribbles'
import { forYou, notForYou } from '../data/content'

export default function ForYou() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mx-auto mb-12 max-w-2xl text-center">
          <div className="pointer-events-none absolute -left-2 -top-8 sm:-left-16">
            <ScribbleArrow className="h-16 w-24 rotate-[-10deg]" />
            <p className="font-scribble text-xl text-scribble">check again before enroll</p>
          </div>
          <AnimateIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Is this for you?
            </h2>
          </AnimateIn>
          <FloatingCharm className="absolute -right-2 top-0 hidden sm:block md:-right-10" delay={0.3}>
            <div className="rounded-2xl bg-paper p-2 shadow-md">
              <CartoonBook className="h-14 w-14" />
            </div>
          </FloatingCharm>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <AnimateIn>
            <div className="h-full rounded-[2rem] bg-paper p-7">
              <h3 className="text-xl font-extrabold text-ink">This is not for you if:</h3>
              <ul className="mt-6 space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-mute">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-scribble/10 text-scribble">
                      <X size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="h-full rounded-[2rem] bg-ink p-7 text-white">
              <h3 className="text-xl font-extrabold">This is for you if:</h3>
              <ul className="mt-6 space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/20 text-mint">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
