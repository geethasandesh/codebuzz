import { motion, useReducedMotion } from 'framer-motion'
import { Check, Play } from 'lucide-react'
import BlurText from './BlurText'
import { ContainerScroll } from './ui/container-scroll-animation'
import {
  CloudDivider,
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
      className="relative overflow-x-hidden bg-linear-to-b from-[#fafafa] via-[#f5f5f5] to-[#f0f0f0] pt-28 pb-0 text-ink"
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
            className="relative mx-auto mt-2 w-fit"
          >
            <p className="font-scribble text-xl text-scribble sm:text-2xl">start learning today</p>
            <ScribbleUnderline className="mx-auto -mt-1 h-4 w-40" color="#ef4444" />
          </motion.div>
        </div>

        <div className="relative mx-auto -mt-2 max-w-5xl sm:-mt-1">
          <ContainerScroll
            caption={
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: 0.1, ease }}
                className="relative mx-auto w-fit"
              >
                <ScribbleZigzag
                  className="pointer-events-none absolute -left-10 -top-3 hidden h-8 w-16 rotate-[-6deg] sm:block"
                  color="#fb923c"
                />
                <p className="font-scribble text-2xl text-orange-500 sm:text-3xl">
                  try the app live — it&apos;s your dashboard
                </p>
                <ScribbleUnderline className="mx-auto -mt-1 h-4 w-56" color="#ef4444" />
                <p className="mt-1 font-scribble text-lg text-ink/55 sm:text-xl">
                  scroll, click &amp; explore ✦
                </p>
              </motion.div>
            }
          >
            {/* CafeOS-style live app embed: no browser chrome — just the product UI */}
            <iframe
              title="CodeBuzz learning app"
              src="https://learning.codebuzz.us/instructor/schedule"
              className="h-full min-h-[24rem] w-full border-0 bg-white sm:min-h-[28rem] md:min-h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allow="clipboard-write; fullscreen"
            />
          </ContainerScroll>
        </div>
      </div>

      <CloudDivider className="relative z-10 mt-10" fill="#ffffff" />
    </section>
  )
}
