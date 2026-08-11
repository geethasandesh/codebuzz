import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import AnimateIn from './ui/AnimateIn'
import { CartoonCode, FloatingCharm } from './scribbles/Scribbles'
import { curriculum } from '../data/content'

export default function Curriculum() {
  const [open, setOpen] = useState(0)

  return (
    <section id="curriculum" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimateIn className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">
            Curriculum overview
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Crack the path to elite AI/ML skills.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-mute">
            Experience effective, engaging AI/ML learning with proven layered methods — from
            foundation skills to advanced production systems.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-linear-to-br from-sky to-sky-deep p-6 text-white shadow-xl">
            <FloatingCharm className="absolute right-4 top-4" delay={0.4}>
              <div className="rounded-2xl bg-white p-2 shadow-lg">
                <CartoonCode className="h-14 w-14" />
              </div>
            </FloatingCharm>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/80">
              Why CodeBuzz
            </p>
            <p className="mt-4 max-w-[220px] text-2xl font-extrabold leading-tight">
              Layered learning that actually sticks.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-semibold text-white/95">
              <li>• Live + recorded classes</li>
              <li>• Projects & assessments</li>
              <li>• Mentor feedback loops</li>
            </ul>
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
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
