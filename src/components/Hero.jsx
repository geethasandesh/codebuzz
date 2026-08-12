import { motion, useReducedMotion } from 'framer-motion'
import { Check, Play, Star } from 'lucide-react'
import BlurText from './BlurText'
import {
  CartoonBook,
  CartoonCode,
  CartoonRocket,
  CloudDivider,
  FloatingCharm,
  ScribbleCurveArrow,
  ScribbleStar,
  ScribbleUnderline,
  ScribbleWavyUnderline,
  ScribbleZigzag,
} from './scribbles/Scribbles'
import { heroBullets } from '../data/content'
import { ease, staggerContainer, fadeUp } from '../lib/motion'

const secondLineWords = [
  { text: 'At CodeBuzz', pill: true },
  { text: "you" },
  { text: "don't" },
  { text: 'start' },
  { text: 'alone.' },
]

function HeadlineLine({ words, startDelay = 0, delay = 45 }) {
  const reduce = useReducedMotion()

  return (
    <span className="inline-flex flex-wrap items-center justify-center gap-x-[0.3em]">
      {words.map((word, index) => (
        <motion.span
          key={`${word.text}-${index}`}
          className="relative inline-block will-change-[transform,filter,opacity]"
          initial={
            reduce
              ? false
              : { filter: 'blur(8px)', opacity: 0, y: -20 }
          }
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: (startDelay + index * delay) / 1000,
            ease,
          }}
        >
          {word.pill ? (
            <span className="relative z-10 rounded-2xl bg-orange-500 px-3 py-1 text-white sm:px-4">
              {word.text}
            </span>
          ) : (
            word.text
          )}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-linear-to-b from-[#fafafa] via-[#f5f5f5] to-[#f0f0f0] pt-28 pb-0 text-ink"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto w-full text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-ink/60">
            CodeBuzz
          </p>

          <div className="mx-auto flex w-full max-w-5xl items-center justify-center gap-3 md:gap-5">
            {/* Left rail — same width as right so content stays centered */}
            <div className="pointer-events-none hidden w-28 shrink-0 flex-col items-center justify-center sm:flex md:w-32 lg:w-36">
              <ScribbleCurveArrow className="mx-auto h-20 w-24 rotate-[-8deg] md:h-24 md:w-28" color="#3b8eea" />
              <p className="font-scribble mt-1 w-full text-center text-lg text-sky-deep md:text-xl">
                start here
              </p>
            </div>

            <h1 className="mx-auto min-w-0 flex-1 text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[2.15rem] md:text-4xl lg:text-[3.25rem]">
              <span className="relative mx-auto inline-block whitespace-nowrap max-[420px]:whitespace-normal">
                <BlurText
                  as="span"
                  text="Everyone starts somewhere."
                  delay={45}
                  stepDuration={0.18}
                  animateBy="words"
                  direction="top"
                  nowrap
                  className="justify-center"
                />
                <ScribbleWavyUnderline
                  className="absolute -bottom-1 left-1/2 h-5 w-[min(100%,420px)] -translate-x-1/2 sm:h-6"
                  color="#ef4444"
                />
              </span>
              <span className="mt-3 flex justify-center whitespace-nowrap max-[520px]:whitespace-normal">
                <HeadlineLine words={secondLineWords} startDelay={220} delay={45} />
              </span>
            </h1>

            {/* Right rail — matching width */}
            <div className="pointer-events-none hidden w-28 shrink-0 flex-col items-center justify-center sm:flex md:w-32 lg:w-36">
              <ScribbleStar className="mx-auto mb-2 h-7 w-7 md:h-8 md:w-8" color="#f59e0b" />
              <ScribbleZigzag className="mx-auto h-14 w-28 rotate-[6deg] md:h-16 md:w-32" color="#141414" />
            </div>
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease }}
            className="mx-auto mt-6 max-w-2xl text-center text-base font-medium text-ink/75 sm:text-lg md:text-xl"
          >
            Faster. Smarter. Better. Learn, experiment, and deploy AI/ML skills with
            confidence.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : staggerContainer(0.06, 0.1)}
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'show'}
            viewport={{ once: true, margin: '-40px' }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-5"
          >
            {heroBullets.map((item) => (
              <motion.div
                key={item}
                variants={reduce ? undefined : fadeUp}
                className="flex items-center gap-2 text-xs font-semibold text-ink sm:text-sm"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-[#fafafa]">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 px-2 sm:flex-row"
          >
            <a
              href="https://www.codebuzz.us/"
              className="inline-flex w-full min-w-0 items-center justify-center rounded-2xl bg-ink px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(20,20,20,0.18)] transition hover:-translate-y-0.5 sm:w-auto sm:min-w-[240px]"
            >
              Get Started For Free
            </a>
            <a
              href="#curriculum"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-ink/15 bg-white/60 px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink backdrop-blur transition hover:bg-white sm:w-auto"
            >
              <Play size={16} fill="currentColor" />
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.15, ease }}
            className="relative mx-auto mt-3 w-fit"
          >
            <p className="font-scribble text-xl text-scribble sm:text-2xl">start learning today</p>
            <ScribbleUnderline className="mx-auto -mt-1 h-4 w-40" color="#ef4444" />
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="relative mx-auto mt-10 max-w-4xl sm:mt-12"
        >
          <FloatingCharm className="absolute -left-2 top-8 z-20 hidden sm:block md:-left-8" delay={0.2}>
            <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur">
              <CartoonBook className="h-16 w-16" />
            </div>
          </FloatingCharm>

          <FloatingCharm className="absolute -right-1 top-0 z-20 hidden sm:block md:-right-6" delay={0.8}>
            <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur">
              <CartoonRocket className="h-16 w-16" />
            </div>
          </FloatingCharm>

          <FloatingCharm className="absolute bottom-16 right-4 z-20 hidden md:block" delay={1.2}>
            <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur">
              <CartoonCode className="h-14 w-14" />
            </div>
          </FloatingCharm>

          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/80 bg-ink shadow-[0_30px_80px_rgba(10,30,60,0.35)]">
            <div className="aspect-[16/10] bg-[radial-gradient(circle_at_20%_20%,#3b8eea,transparent_40%),radial-gradient(circle_at_80%_30%,#34d399,transparent_35%),linear-gradient(160deg,#1a2a3a,#0f1720)] p-6 sm:p-10">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <button
                    type="button"
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-lg"
                    aria-label="Play demo"
                  >
                    <Play size={20} fill="currentColor" />
                  </button>
                  <div className="rounded-2xl bg-white/95 px-4 py-3 text-left shadow-lg">
                    <div className="mb-1 flex items-center gap-1 text-sun">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm font-extrabold text-ink">4.9 learner rating</p>
                    <p className="text-xs font-medium text-mute">Trusted by growing AI talent</p>
                  </div>
                </div>

                <div className="mt-8 max-w-md rounded-3xl bg-white/10 p-5 text-left text-white backdrop-blur-md sm:mt-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-soft">
                    Learning preview
                  </p>
                  <p className="mt-2 text-2xl font-extrabold leading-tight">
                    From Python foundations to production AI — with mentors beside you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <CloudDivider className="relative z-10 mt-10" fill="#ffffff" />
    </section>
  )
}
