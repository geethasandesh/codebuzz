import { motion, useReducedMotion } from 'framer-motion'
import {
  FloatingCharm,
  ScribbleCircle,
  ScribbleStar,
  ScribbleWavyUnderline,
  CloudDivider,
} from './scribbles/Scribbles'
import { stats } from '../data/content'
import keychainImg from '../assets/stay-connected-keychain.png'

const ease = [0.22, 1, 0.36, 1]

export default function FinalCTA() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#fafafa] via-[#f5f5f5] to-[#f0f0f0] pt-16 text-ink sm:pt-24">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" />
      <ScribbleStar className="pointer-events-none absolute left-8 top-16 h-7 w-7 opacity-80 sm:left-16" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
            className="text-center lg:text-left"
          >
            <p className="font-scribble text-2xl text-orange-500 sm:text-3xl">stay connected</p>
            <ScribbleWavyUnderline className="mx-auto h-3 w-28 lg:mx-0" color="#fb923c" />

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Ready to start your{' '}
              <span className="relative inline-block">
                <span className="relative z-10">AI/ML journey?</span>
                <ScribbleCircle className="absolute -inset-x-3 -inset-y-2 z-0" color="#fb923c" />
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-mute sm:text-lg lg:mx-0 mx-auto">
              Join learners who are already building the future with artificial intelligence —
              with mentors, community, and real projects.
            </p>
            <a
              href="https://www.codebuzz.us/"
              className="mt-8 inline-flex rounded-2xl bg-orange-500 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Get Started Today
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
            className="relative flex justify-center lg:justify-end"
          >
            <FloatingCharm delay={0.15}>
              <img
                src={keychainImg}
                alt="Stay connected keychain"
                className="h-56 w-auto object-contain mix-blend-screen sm:h-64 md:h-72 lg:h-80"
                loading="lazy"
              />
            </FloatingCharm>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="rounded-[1.5rem] border border-black/[0.06] bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <p className="text-3xl font-extrabold text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-mute">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <CloudDivider className="mt-16" fill="#141414" />
    </section>
  )
}
