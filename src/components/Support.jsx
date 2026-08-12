import { motion, useReducedMotion } from 'framer-motion'
import { Headphones, MessageCircle, Users } from 'lucide-react'
import { supportItems } from '../data/content'

const ease = [0.22, 1, 0.36, 1]
const icons = [Headphones, Users, MessageCircle]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease },
  },
}

export default function Support() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-scribble text-3xl text-orange-500 md:text-4xl">Always around</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Learning Support 24/7
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
            Get help whenever you need it — from mentors, support teams, and the CodeBuzz
            community. You&apos;re never learning alone.
          </p>
        </motion.div>

        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {supportItems.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.article
                key={item.title}
                variants={reduce ? undefined : cardVariant}
                whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.2 } }}
                className="rounded-[1.5rem] border border-black/8 bg-[#fafafa] p-7 transition hover:border-orange-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mute">{item.body}</p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease }}
          className="mt-10 text-center"
        >
          <a
            href="#faq"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-ink-soft"
          >
            Talk To Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}
