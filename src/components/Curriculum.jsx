import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Minus, Plus, Star } from 'lucide-react'
import AnimateIn from './ui/AnimateIn'
import { curriculum } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

const whyPoints = [
  'Live + recorded classes',
  'Projects & assessments',
  'Mentor feedback loops',
]

export default function Curriculum() {
  const [open, setOpen] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section id="curriculum" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimateIn className="relative">
          <p className="font-scribble text-3xl text-orange-500 md:text-2xl">
            Curriculum overview
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Crack the path to elite AI/ML skills.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-mute">
            Experience effective, engaging AI/ML learning with proven layered methods — from
            foundation skills to advanced production systems.
          </p>

          <div
            className="relative mt-8 overflow-hidden rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(249,115,22,0.18)] sm:p-7"
            style={{
              background:
                'linear-gradient(145deg, #fff7ed 0%, #ffedd5 28%, #fdba74 72%, #fb923c 100%)',
            }}
          >
            {/* Soft vertical light streaks */}
            <div
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent 0 18px, rgba(255,255,255,0.35) 18px 28px, transparent 28px 46px)',
              }}
            />

            <div className="relative z-10">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex gap-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span
                  className="font-serif text-5xl leading-none text-orange-600/80 sm:text-6xl"
                  aria-hidden="true"
                >
                  ”
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-sm font-extrabold text-orange-500 shadow-sm ring-2 ring-white/80">
                  CB
                </div>
                <div>
                  <p className="text-base font-extrabold tracking-tight text-ink">
                    Why CodeBuzz
                  </p>
                  <p className="text-sm font-medium text-ink/65">
                    Layered learning that actually sticks.
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-[15px] font-semibold leading-relaxed text-ink/85">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>

        <div className="space-y-3">
          {curriculum.map((layer, index) => {
            const isOpen = open === index
            return (
              <AnimateIn key={layer.title} delay={index * 0.06}>
                <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sky-deep">
                        {layer.week} · {layer.module}
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold text-ink">{layer.title}</h3>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-ink">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                      >
                        <div className="border-t border-black/5 px-5 pb-5 pt-4">
                          <p className="text-sm leading-relaxed text-mute">{layer.summary}</p>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {layer.items.map((item, i) => (
                              <div key={item.label} className="rounded-2xl bg-paper p-4">
                                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sky-deep">
                                  {String(i + 1).padStart(2, '0')}
                                </p>
                                <p className="mt-1 font-extrabold text-ink">{item.label}</p>
                                <p className="mt-1 text-sm text-mute">{item.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
