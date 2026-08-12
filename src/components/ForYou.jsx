import { ArrowDownRight, Check, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { FloatingCharm } from './scribbles/Scribbles'
import { forYou, notForYou } from '../data/content'
import keychainImg from '../assets/keychain.png'
import { ease } from '../lib/motion'

export default function ForYou() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="relative mx-auto mb-14 max-w-4xl sm:mb-16 md:mb-20">
          <div className="pointer-events-none absolute -left-2 top-2 hidden sm:block md:-left-10 lg:-left-16">
            <ArrowDownRight
              size={28}
              strokeWidth={2}
              className="ml-8 text-[#ef4444]"
              aria-hidden="true"
            />
            <p className="font-scribble text-lg leading-tight text-[#ef4444] md:text-xl">
              Check again before enroll
            </p>
          </div>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease }}
            className="text-center text-[clamp(2.75rem,9vw,5.75rem)] font-extrabold leading-[1.02] tracking-tight text-ink"
          >
            Is this for you?
          </motion.h2>

          <FloatingCharm
            className="pointer-events-none absolute -right-1 top-0 hidden sm:block md:-right-4 md:-top-2 lg:-right-8"
            delay={0.2}
          >
            <img
              src={keychainImg}
              alt=""
              className="h-20 w-auto object-contain mix-blend-screen md:h-24 lg:h-28"
              loading="lazy"
            />
          </FloatingCharm>

          <p className="mt-3 text-center font-scribble text-lg text-[#ef4444] sm:hidden">
            Check again before enroll
          </p>
        </div>

        {/* Split card — compact, centered */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl sm:rounded-[1.35rem] lg:grid lg:grid-cols-2"
        >
          {/* Not for you — light panel */}
          <div className="bg-[#eef1f4] p-5 sm:p-6">
            <h3 className="text-sm font-extrabold text-ink sm:text-[15px]">
              This is not for you if:
            </h3>
            <ul className="mt-3.5 space-y-2">
              {notForYou.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease }}
                  className="flex items-center gap-2.5 rounded-lg bg-white px-3 py-2.5"
                >
                  <X
                    size={15}
                    strokeWidth={2.5}
                    className="shrink-0 text-[#ef4444]"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] leading-snug text-[#6b7280]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* For you — dark panel */}
          <div className="bg-[#2b2525] p-5 sm:p-6">
            <h3 className="text-sm font-extrabold text-white sm:text-[15px]">
              This is for you if:
            </h3>
            <ul className="mt-3.5 space-y-2">
              {forYou.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease }}
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.06] px-3 py-2.5"
                >
                  <span
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#fbbf24]/15"
                    aria-hidden="true"
                  >
                    <Check size={12} strokeWidth={2.5} className="text-[#fbbf24]" />
                  </span>
                  <span className="text-[13px] leading-snug text-white/85">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
