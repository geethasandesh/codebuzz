import { motion, useReducedMotion } from 'framer-motion'
import {
  ScribbleCircle,
  ScribbleCurveArrow,
  ScribbleStar,
  ScribbleUnderline,
} from './scribbles/Scribbles'
import { team } from '../data/content'
import saneetaImg from '../assets/mentors/saneeta1.png'
import siddharthImg from '../assets/mentors/siddarth2.png'
import raviImg from '../assets/mentors/ravi3.png'
import dilipImg from '../assets/mentors/dilip4.png'
import vijayImg from '../assets/mentors/vijay5.png'

const ease = [0.22, 1, 0.36, 1]

const mentorImages = {
  'Saneeta Narrlla': saneetaImg,
  'Siddharth Pothukuchi': siddharthImg,
  'Ravi Doddasomayajula': raviImg,
  'Dilip Yeluguri': dilipImg,
  'Vijay Chakilam': vijayImg,
}

const cardColors = ['#fbbf24', '#fb923c', '#f97316', '#fdba74', '#ea580c']

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease },
  }),
}

function MentorCard({ mentor, index, imageLeft = false }) {
  const reduce = useReducedMotion()
  const color = cardColors[index % cardColors.length]
  const image = mentorImages[mentor.name]

  return (
    <motion.article
      custom={index}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariant}
      whileHover={reduce ? undefined : { y: -5, transition: { duration: 0.2 } }}
      className="relative flex min-h-[420px] min-w-[220px] shrink-0 snap-center flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[460px] sm:min-w-[240px] lg:min-w-0"
      style={{ backgroundColor: color }}
    >
      <div className="relative z-10 px-4 pt-5 sm:px-5 sm:pt-6">
        <h3 className="text-base font-extrabold leading-tight text-white sm:text-lg">
          {mentor.name}
        </h3>
        <p className="mt-1.5 text-xs font-semibold leading-snug text-white/90 sm:text-sm">
          {mentor.title}
        </p>
        {mentor.subtitle && (
          <p className="mt-1 text-xs font-medium leading-snug text-white/80">{mentor.subtitle}</p>
        )}
        {mentor.bio && (
          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75">{mentor.bio}</p>
        )}
      </div>

      <div className="relative mt-auto min-h-[220px] flex-1 sm:min-h-[240px]">
        {image && (
          <img
            src={image}
            alt={mentor.name}
            className={`absolute bottom-0 max-h-[240px] w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)] sm:max-h-[260px] ${
              imageLeft ? 'left-0' : 'left-1/2 -translate-x-1/2'
            }`}
            loading="lazy"
          />
        )}
      </div>
    </motion.article>
  )
}

export default function Mentors() {
  const reduce = useReducedMotion()

  return (
    <section id="mentors" className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-24 h-44 w-44 rounded-full border-[12px] border-orange-200/60" />
      <div className="pointer-events-none absolute -right-16 top-40 h-32 w-32 rounded-full border-[10px] border-orange-100" />
      <div className="pointer-events-none absolute left-8 top-32 hidden sm:block">
        <ScribbleStar className="h-10 w-10 text-orange-400" color="#fb923c" />
      </div>
      <div className="pointer-events-none absolute right-12 top-20 hidden md:block">
        <ScribbleCurveArrow className="h-20 w-24 rotate-[12deg] opacity-70" color="#fb923c" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto w-fit">
            <p className="font-scribble text-3xl text-orange-500 md:text-4xl">Say hello</p>
            <ScribbleUnderline className="mx-auto -mt-1 h-3 w-24" color="#fb923c" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Meet our{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">team</span>
              <ScribbleCircle className="absolute -inset-x-2 -inset-y-1 z-0 opacity-80" color="#fb923c" />
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
            Learn directly from professionals shaping today&apos;s tech industry — mentors who
            guide, support, and help you grow with confidence.
          </p>
        </motion.div>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0">
          {team.map((mentor, i) => (
            <MentorCard
              key={mentor.name}
              mentor={mentor}
              index={i}
              imageLeft={i === 0}
            />
          ))}
        </div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto mt-10 w-fit font-scribble text-2xl text-orange-500"
        >
          mentors who care ✦
        </motion.p>
      </div>
    </section>
  )
}
