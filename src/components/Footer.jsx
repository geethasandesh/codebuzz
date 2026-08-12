import { motion, useReducedMotion } from 'framer-motion'
import { ease, fadeUp, staggerContainer } from '../lib/motion'

export default function Footer() {
  const reduce = useReducedMotion()

  return (
    <footer className="bg-ink pb-10 pt-6 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={reduce ? undefined : staggerContainer(0.08, 0.05)}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr]"
        >
          <motion.div variants={reduce ? undefined : fadeUp}>
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold text-orange-500">CodeBuzz</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Learn, experiment, and deploy with confidence. Everyone starts somewhere — at
              CodeBuzz, you don&apos;t start alone.
            </p>
          </motion.div>

          <motion.div variants={reduce ? undefined : fadeUp}>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">Product</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#tracks" className="hover:text-white">AI Fundamentals</a></li>
              <li><a href="#curriculum" className="hover:text-white">Machine Learning</a></li>
              <li><a href="#tracks" className="hover:text-white">Data Science</a></li>
              <li><a href="#curriculum" className="hover:text-white">Deep Learning</a></li>
            </ul>
          </motion.div>

          <motion.div variants={reduce ? undefined : fadeUp}>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">Support</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#faq" className="hover:text-white">Help Center</a></li>
              <li><a href="#mentors" className="hover:text-white">Contact Us</a></li>
              <li><a href="#reviews" className="hover:text-white">Community</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div variants={reduce ? undefined : fadeUp}>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#mentors" className="hover:text-white">About Us</a></li>
              <li><a href="https://www.codebuzz.us/" className="hover:text-white">Careers</a></li>
              <li><a href="https://www.codebuzz.us/" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="https://www.codebuzz.us/" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
          className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} CodeBuzz. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.codebuzz.us/" className="hover:text-white">Terms</a>
            <a href="https://www.codebuzz.us/" className="hover:text-white">Privacy</a>
            <a href="https://www.codebuzz.us/" className="hover:text-white">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
