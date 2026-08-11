import { motion, useReducedMotion } from 'framer-motion'

export function ScribbleUnderline({ className = '', color = '#ef4444' }) {
  const reduce = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 220 18"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M4 11c28-8 56 6 84-2 30-8 58 7 88-1 14-4 30-6 40-3"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
    </svg>
  )
}

export function ScribbleCircle({ className = '', color = '#ef4444' }) {
  const reduce = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 120 70"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M14 36c2-18 28-28 52-26 28 2 46 18 42 36-4 20-34 24-58 20C26 62 10 52 14 36z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </svg>
  )
}

function drawProps(reduce, duration = 0.7, delay = 0) {
  return {
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    animate: reduce ? undefined : { pathLength: 1, opacity: 1 },
    transition: { duration, delay, ease: 'easeOut' },
  }
}

export function ScribbleArrow({ className = '', color = '#141414' }) {
  const reduce = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M10 12c18 8 28 28 34 48M44 60c8-2 16-4 22-10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        {...drawProps(reduce, 0.7)}
      />
      <motion.path
        d="M52 48l14 14-18 2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...drawProps(reduce, 0.4, 0.35)}
      />
    </svg>
  )
}

/** Simple curved arrow (no loop) */
export function ScribbleCurveArrow({ className = '', color = '#141414' }) {
  const reduce = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 140 120"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M18 22c8 28 28 52 62 68 14 6 30 12 46 16"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        {...drawProps(reduce, 0.7)}
      />
      <motion.path
        d="M108 86l18 20-26 2"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...drawProps(reduce, 0.35, 0.4)}
      />
    </svg>
  )
}

/** Messy zigzag scribble underline */
export function ScribbleZigzag({ className = '', color = '#141414' }) {
  const reduce = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 140 56"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M6 18c12 10 18-8 30 2 10 8 14-10 26-2 12 8 16-8 28 2 10 8 16-6 26 0 8 4 12-4 18 2"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...drawProps(reduce, 0.7)}
      />
      <motion.path
        d="M10 34c14 8 20-6 32 2 12 8 16-8 28 0 12 8 18-6 30 2 10 6 14-4 22 0"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...drawProps(reduce, 0.65, 0.12)}
      />
      <motion.path
        d="M18 46c10 4 16-4 26 0 12 5 18-5 28 1 10 5 16-3 24 1"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...drawProps(reduce, 0.55, 0.22)}
      />
    </svg>
  )
}

/** Soft wavy underline under a phrase */
export function ScribbleWavyUnderline({ className = '', color = '#ef4444' }) {
  const reduce = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 260 28"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M6 16c22-10 38 8 60 0 24-8 40 10 64 2 22-8 40 8 62 0 18-6 34 6 50 2"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        {...drawProps(reduce, 0.75, 0.15)}
      />
    </svg>
  )
}

export function ScribbleStar({ className = '', color = '#fbbf24' }) {
  const reduce = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M20 4l3.2 9.4H33l-7.8 5.8 3 9.4L20 23.6 11.8 28.6l3-9.4L7 13.4h9.8L20 4z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
        fill="none"
        {...drawProps(reduce, 0.55, 0.2)}
      />
    </svg>
  )
}

export function FloatingCharm({ className = '', children, delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -12, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export function CartoonBook({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <rect x="22" y="24" width="76" height="72" rx="10" fill="#fff" stroke="#141414" strokeWidth="4" />
      <path d="M38 40h44M38 54h36M38 68h40" stroke="#3b8eea" strokeWidth="5" strokeLinecap="round" />
      <circle cx="86" cy="86" r="16" fill="#fbbf24" stroke="#141414" strokeWidth="3" />
      <path d="M80 86h12M86 80v12" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function CartoonRocket({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M60 18c18 16 22 38 18 58H42c-4-20 0-42 18-58z" fill="#7db8f5" stroke="#141414" strokeWidth="4" />
      <circle cx="60" cy="52" r="10" fill="#fff" stroke="#141414" strokeWidth="3" />
      <path d="M42 70l-14 18c8 4 16 4 18 0l4-12M78 70l14 18c-8 4-16 4-18 0l-4-12" fill="#ef4444" stroke="#141414" strokeWidth="3" />
      <path d="M52 88c2 10 6 16 8 18 2-2 6-8 8-18" fill="#fbbf24" stroke="#141414" strokeWidth="3" />
    </svg>
  )
}

export function CartoonCode({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <rect x="16" y="28" width="88" height="64" rx="16" fill="#fff" stroke="#141414" strokeWidth="4" />
      <path d="M40 50l-12 10 12 10M80 50l12 10-12 10M56 48l8 24" stroke="#3b8eea" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="38" r="3" fill="#ef4444" />
      <circle cx="40" cy="38" r="3" fill="#fbbf24" />
      <circle cx="50" cy="38" r="3" fill="#34d399" />
    </svg>
  )
}

export function CloudDivider({ flip = false, className = '', fill = '#ffffff' }) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        className={`block w-full h-[48px] sm:h-[70px] ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill={fill}
          d="M0 50C90 20 160 70 250 45s170-40 260-10 170 50 270 20 180-55 280-25 170 55 250 25 90-30 130-20v55H0z"
        />
      </svg>
    </div>
  )
}
