import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, Minus, Plus } from 'lucide-react'
import {
  ScribbleCircle,
  ScribbleStar,
  ScribbleUnderline,
  ScribbleWavyUnderline,
} from './scribbles/Scribbles'
import { faqs } from '../data/content'
import { ease, fadeUp, staggerContainer } from '../lib/motion'

export default function FAQ() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="relative overflow-hidden rounded-[1.75rem] bg-[#ececec] p-6 sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12"
        >
          <ScribbleStar className="pointer-events-none absolute right-8 top-8 h-8 w-8 opacity-90 sm:right-12 sm:top-10" />
          <ScribbleWavyUnderline
            className="pointer-events-none absolute bottom-16 left-6 h-4 w-28 opacity-80 sm:bottom-20 sm:left-10"
            color="#fb923c"
          />

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
            {/* Left column */}
            <div className="relative flex flex-col justify-between gap-10">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500 text-white shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
                    <GraduationCap size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-orange-200 bg-white px-3.5 py-1 font-scribble text-lg text-orange-500">
                    FAQ
                  </span>
                </div>

                <div className="relative mt-6 max-w-md">
                  <ScribbleCircle
                    className="pointer-events-none absolute -left-3 -top-2 h-16 w-24 opacity-70"
                    color="#fb923c"
                  />
                  <h2 className="relative z-10 font-scribble text-[2.35rem] leading-[1.08] text-orange-500 sm:text-[2.85rem] md:text-[3.25rem]">
                    Frequently Asked Questions
                  </h2>
                  <ScribbleUnderline className="relative z-10 mt-2 h-3 w-40" color="#fb923c" />
                </div>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5c5c5c] sm:text-base">
                  CodeBuzz answers common questions for a smooth learning experience.
                </p>
              </motion.div>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="relative rounded-[1.35rem] bg-white p-6 sm:p-7"
              >
                <ScribbleWavyUnderline
                  className="pointer-events-none absolute -top-1 right-6 h-3 w-20 opacity-70"
                  color="#fb923c"
                />
                <h3 className="text-lg font-extrabold text-ink sm:text-xl">
                  Ready to start learning?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
                  CodeBuzz is a hands-on AI/ML learning platform with mentors, live
                  sessions, and real projects.
                </p>
                <a
                  href="https://www.codebuzz.us/"
                  className="mt-5 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Get instant Access
                </a>
              </motion.div>
            </div>

            {/* Right column — accordion */}
            <motion.div
              variants={reduce ? undefined : staggerContainer(0.07, 0.08)}
              initial={reduce ? false : 'hidden'}
              whileInView={reduce ? undefined : 'show'}
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-3"
            >
              {faqs.map((item, index) => {
                const isOpen = open === index

                return (
                  <motion.div
                    key={item.q}
                    variants={reduce ? undefined : fadeUp}
                    className="overflow-hidden rounded-[1.15rem] bg-white sm:rounded-[1.25rem]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-5"
                      aria-expanded={isOpen}
                    >
                      <span className="pt-0.5 text-[15px] font-bold leading-snug text-ink sm:text-base">
                        {item.q}
                      </span>
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f0f0f0] text-ink"
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus size={16} strokeWidth={2.5} />
                        ) : (
                          <Plus size={16} strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={reduce ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-[#6b7280] sm:px-6 sm:pb-6 sm:text-[15px]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
