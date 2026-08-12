import { motion, useReducedMotion } from 'framer-motion'
import { ease } from '../../lib/motion'

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  y = 28,
  blur = false,
  scale = false,
  once = true,
  margin = '-60px',
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        ...(blur ? { filter: 'blur(6px)' } : {}),
        ...(scale ? { scale: 0.96 } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
      }}
      viewport={{ once, margin }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
