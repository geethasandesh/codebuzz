import { MessageCircle, Users, Headphones } from 'lucide-react'
import AnimateIn from './ui/AnimateIn'
import { ScribbleArrow } from './scribbles/Scribbles'
import { supportItems } from '../data/content'

const icons = [Headphones, Users, MessageCircle]

export default function Support() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mx-auto max-w-2xl text-center">
          <AnimateIn>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">
              Always around
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Learning Support 24/7
            </h2>
            <p className="mt-4 text-base text-mute">
              Get help whenever you need it — from mentors, support teams, and the CodeBuzz
              community.
            </p>
          </AnimateIn>
          <div className="pointer-events-none absolute -left-4 -top-2 hidden sm:block md:-left-16">
            <ScribbleArrow className="h-16 w-24" />
            <p className="font-scribble -mt-2 ml-2 text-xl text-scribble">never alone</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {supportItems.map((item, i) => {
            const Icon = icons[i]
            return (
              <AnimateIn key={item.title} delay={i * 0.08}>
                <article className="h-full rounded-[1.75rem] border border-black/5 bg-paper p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
                </article>
              </AnimateIn>
            )
          })}
        </div>

        <AnimateIn className="mt-8 text-center">
          <a
            href="#pricing"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-ink-soft"
          >
            Talk To Support
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
