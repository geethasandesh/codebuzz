import { Star } from 'lucide-react'
import AnimateIn from './ui/AnimateIn'
import { CloudDivider } from './scribbles/Scribbles'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ink pb-0 pt-8 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky">Reviews</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Don&apos;t just take our word for it — see what learners say about CodeBuzz.
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, i) => (
            <AnimateIn key={item.name} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 text-ink">
                <div className="mb-4 flex gap-1 text-ink">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="flex-1 text-[15px] leading-relaxed text-ink-soft">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-mute">
                      {item.role}
                    </p>
                    <p className="mt-1 font-extrabold text-ink">{item.name}</p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-sky-soft text-sm font-extrabold text-sky-deep">
                    {item.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
      <CloudDivider className="mt-16" fill="#ffffff" />
    </section>
  )
}
