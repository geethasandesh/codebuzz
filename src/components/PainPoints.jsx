import { motion, useReducedMotion } from 'framer-motion'
import {
  BarChart3,
  Eye,
  Headphones,
  Presentation,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { painPoints } from '../data/content'
import amazonLogo from '../assets/companies/amazon.png'
import microsoftLogo from '../assets/companies/micorsoft.png'
import huluLogo from '../assets/companies/hulu.png'
import salesforceLogo from '../assets/companies/salesforce.png'
import attLogo from '../assets/companies/att.png'
import transunionLogo from '../assets/companies/transunion.png'

const ease = [0.22, 1, 0.36, 1]

const icons = [Eye, TrendingUp, Sparkles, BarChart3, Headphones, Presentation]

const companyLogos = [
  { name: 'Amazon', src: amazonLogo },
  { name: 'Microsoft', src: microsoftLogo },
  { name: 'Hulu', src: huluLogo },
  { name: 'Salesforce', src: salesforceLogo },
  { name: 'AT&T', src: attLogo },
  { name: 'TransUnion', src: transunionLogo },
]

const logoLoop = [...companyLogos, ...companyLogos]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease },
  },
}

export default function PainPoints() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="font-scribble text-2xl text-orange-500 md:text-3xl">
            Is this you?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Struggling to understand where to start in AI?
          </h2>
        </motion.div>

        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-[1.75rem] border border-black/10 bg-[#f3f4f6]/70 p-3 sm:rounded-[2rem] sm:p-4 md:p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.article
                  key={item.title}
                  variants={reduce ? undefined : cardVariant}
                  whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:rounded-[1.25rem] sm:p-7"
                >
                  <Icon className="mb-5 h-[22px] w-[22px] text-orange-500" strokeWidth={1.75} />
                  <h3 className="text-[1.05rem] font-bold leading-snug tracking-tight text-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#6b7280]">{item.body}</p>
                </motion.article>
              )
            })}
          </div>
        </motion.div>

        <div className="relative mt-16 overflow-hidden pb-8 pt-6">
          <div
            className="pointer-events-none absolute inset-x-[-10%] bottom-[-20%] top-8 h-[220px] opacity-50 sm:h-[260px]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(20,20,20,0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(20,20,20,0.07) 1px, transparent 1px)
              `,
              backgroundSize: '56px 40px',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 18%, black 75%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 18%, black 75%, transparent 100%)',
              transform: 'perspective(700px) rotateX(52deg) scale(1.15)',
              transformOrigin: 'center top',
            }}
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease }}
            className="relative z-10 mb-8 text-center font-scribble text-3xl text-ink md:text-4xl"
          >
            Trusted by:
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease }}
            className="relative z-10"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-24" />

            <div className="overflow-hidden">
              <div className="flex w-max animate-[logo-marquee_28s_linear_infinite] items-center gap-5 sm:gap-7">
                {logoLoop.map((company, i) => (
                  <div
                    key={`${company.name}-${i}`}
                    className="flex h-16 w-[130px] shrink-0 items-center justify-center sm:h-20 sm:w-[150px]"
                  >
                    <img
                      src={company.src}
                      alt={company.name}
                      className="max-h-14 max-w-[130px] object-contain sm:max-h-16 sm:max-w-[150px]"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
