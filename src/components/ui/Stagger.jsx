import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/motion'

export function Stagger({
  children,
  className = '',
  blur = false,
  stagger = 0.08,
  delay = 0.06,
  margin = '-60px',
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', blur = false }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={blur ? fadeUpBlur : fadeUp}>
      {children}
    </motion.div>
  )
}
