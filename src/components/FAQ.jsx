import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import AnimateIn from './ui/AnimateIn'
import { faqs } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AnimateIn className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">
            Any question left?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Get every single answer from here!
          </h2>
        </AnimateIn>

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <AnimateIn key={item.q} delay={index * 0.04}>
                <div className="overflow-hidden rounded-[1.5rem] bg-paper">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-base font-extrabold text-ink sm:text-lg">{item.q}</span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink transition ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-mute">{item.a}</p>
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
