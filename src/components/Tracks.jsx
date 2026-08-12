import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Mic,
  PhoneOff,
  UserPlus,
  UserRound,
  Video,
} from 'lucide-react'
import callImage from '../assets/images/call.png'

const ease = [0.22, 1, 0.36, 1]

const features = [
  {
    title: 'Flexible Learning Options',
    body: 'Learn at your own pace with convenient access to lessons anytime.',
    icon: BookOpen,
  },
  {
    title: 'Expert-Led Courses',
    body: 'Learn from industry mentors through practical, skill-focused AI/ML courses.',
    icon: UserRound,
  },
]

const certificateItems = [
  { title: 'AI Fundamentals', meta: 'Certificate earned' },
  { title: 'Machine Learning', meta: 'Project completed' },
  { title: 'Data Science Path', meta: 'Ready to share' },
  { title: 'MLOps Basics', meta: 'In progress' },
]

function CertificateMock() {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="rounded-2xl border border-black/8 bg-[#f7f7f8] p-3.5 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-xs font-extrabold tracking-tight text-ink">Your certificates</p>
          <span className="relative grid h-7 w-7 place-items-center rounded-full bg-orange-500/15 text-orange-500">
            <GraduationCap size={14} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          </span>
        </div>
        <div className="space-y-2.5">
          {certificateItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2.5 rounded-xl bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-500/15 text-orange-500">
                <GraduationCap size={14} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-bold leading-tight text-ink">
                  {item.title}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-mute">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Tracks() {
  const reduce = useReducedMotion()

  return (
    <section id="tracks" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Learn AI/ML &amp; Apply It for Real
          </h2>
          <p className="mt-3 text-base text-mute sm:text-lg">
            This path gives you a clear roadmap to build AI skills from foundation to
            production.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease }}
          className="rounded-[1.75rem] border border-black/10 bg-[#f3f4f6]/80 p-3 sm:rounded-[2rem] sm:p-4 md:p-5"
        >
          <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
            {/* Left stack */}
            <div className="grid gap-3 sm:gap-4">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {features.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.article
                      key={item.title}
                      initial={reduce ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06, ease }}
                      whileHover={reduce ? undefined : { y: -2 }}
                      className="rounded-[1.35rem] border border-black/8 bg-white p-6 sm:p-7"
                    >
                      <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#f3f4f6] text-orange-500">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <h3 className="text-lg font-extrabold tracking-tight text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
                    </motion.article>
                  )
                })}
              </div>

              <motion.article
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12, ease }}
                whileHover={reduce ? undefined : { y: -2 }}
                className="grid items-center gap-6 rounded-[1.35rem] border border-black/8 bg-white p-6 sm:grid-cols-[1.1fr_0.9fr] sm:p-7 md:gap-8"
              >
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                    Certificate Upon Completion
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-mute">
                    Earn a recognized certificate to showcase your skills and achievements.
                  </p>
                  <a
                    href="https://www.codebuzz.us/"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink-soft"
                  >
                    Start Learning Today
                    <ArrowRight size={16} />
                  </a>
                </div>
                <CertificateMock />
              </motion.article>
            </div>

            {/* Right tall mentor / call card */}
            <motion.article
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease }}
              className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-black/8 bg-ink lg:min-h-full"
            >
              <img
                src={callImage}
                alt="Mentor on a live learning session"
                className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-5 flex justify-center px-4">
                <div className="flex items-center gap-2.5 rounded-full bg-white/15 px-3 py-2.5 backdrop-blur-md sm:gap-3 sm:px-4">
                  <button
                    type="button"
                    className="grid h-11 w-11 place-items-center rounded-full bg-red-500 text-white shadow-lg"
                    aria-label="End call"
                  >
                    <PhoneOff size={18} />
                  </button>
                  <button
                    type="button"
                    className="grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-white shadow-lg"
                    aria-label="Add participant"
                  >
                    <UserPlus size={18} />
                  </button>
                  <button
                    type="button"
                    className="grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-white shadow-lg"
                    aria-label="Camera"
                  >
                    <Video size={18} />
                  </button>
                  <button
                    type="button"
                    className="grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-white shadow-lg"
                    aria-label="Microphone"
                  >
                    <Mic size={18} />
                  </button>
                  <button
                    type="button"
                    className="grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-white shadow-lg"
                    aria-label="Chat"
                  >
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
