import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

const reviews = testimonials.map((item, i) => ({
  ...item,
  rating: i % 3 === 1 ? 4 : 5,
}))

function ReviewCard({ item }) {
  return (
    <article className="flex h-full min-h-[290px] w-[min(100%,300px)] shrink-0 flex-col rounded-2xl border border-white/10 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:w-[320px] sm:p-8">
      <div className="mb-5 flex gap-[2px] text-ink">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            size={14}
            fill={idx < item.rating ? 'currentColor' : 'none'}
            strokeWidth={idx < item.rating ? 0 : 1.6}
            className={idx < item.rating ? 'text-ink' : 'text-black/15'}
          />
        ))}
      </div>

      <p className="flex-1 text-[14.5px] leading-[1.7] text-[#333]">{item.quote}</p>

      <div className="mt-8 flex items-center gap-3">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=e5e5e5&color=1a1a1a&size=96&bold=true`}
          alt=""
          className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-black/5"
          loading="lazy"
        />
        <div className="min-w-0">
          <p className="truncate text-[15px] font-bold leading-tight text-ink">{item.name}</p>
          <p className="mt-0.5 truncate text-[13px] leading-tight text-[#919191]">{item.role}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const total = reviews.length

  useEffect(() => {
    if (reduce) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 4200)
    return () => window.clearInterval(id)
  }, [total, reduce])

  // Show a window of cards centered around index (for visual density)
  const order = Array.from({ length: total }, (_, i) => reviews[(index + i) % total])

  return (
    <section id="reviews" className="relative overflow-hidden bg-[#2b2525] py-20 sm:py-28">
      {/* Fine particle field */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.35) 0.55px, transparent 0.65px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Large blurred Reviews watermark */}
      <p
        className="pointer-events-none absolute left-1/2 top-[18%] z-0 -translate-x-1/2 select-none text-[clamp(5rem,18vw,12.5rem)] font-extrabold leading-none tracking-tight text-white/[0.06] blur-[2px]"
        aria-hidden="true"
      >
        Reviews
      </p>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease }}
          className="relative mx-auto max-w-[40rem] text-center text-[1.6rem] font-bold leading-[1.28] tracking-tight text-white sm:text-[2.35rem] sm:leading-[1.22] md:text-[2.75rem]"
        >
          Don&apos;t just take our word for it — see what our clients have to say
          about their CodeBuzz experience.
        </motion.h2>

        <div className="relative mt-14 sm:mt-[4.5rem]">
          <motion.div
              className="flex justify-center gap-5 py-2"
              key={index}
              initial={reduce ? false : { opacity: 0.55, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              {/* Desktop: 3 cards; mobile: 1 */}
              <div className="hidden gap-5 md:flex">
                {order.slice(0, 3).map((item, i) => (
                  <div
                    key={`${item.name}-${index}-${i}`}
                    className={i === 1 ? '' : 'opacity-95'}
                  >
                    <ReviewCard item={item} />
                  </div>
                ))}
              </div>
              <div className="md:hidden">
                <ReviewCard item={reviews[index]} />
              </div>
            </motion.div>
        </div>

        {/* Dot pagination — one per review */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mt-10 flex items-center justify-center gap-2.5"
        >
          {reviews.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show review from ${item.name}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'scale-110 bg-white'
                  : 'bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
