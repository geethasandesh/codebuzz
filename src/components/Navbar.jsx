import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/30 bg-white/20 px-4 py-3 shadow-[0_8px_32px_rgba(15,40,80,0.08)] backdrop-blur-xl backdrop-saturate-150 sm:px-6 ${
          scrolled
            ? 'border-white/40 bg-white/35 shadow-[0_10px_36px_rgba(15,40,80,0.12)]'
            : ''
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="text-lg font-extrabold tracking-tight text-orange-500">CodeBuzz</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-soft/80 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://users.codebuzz.us/auth"
            className="text-sm font-semibold text-ink-soft transition hover:text-ink"
          >
            Sign In
          </a>
          <a
            href="https://users.codebuzz.us/auth"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-ink-soft"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full bg-white/30 text-ink backdrop-blur-md md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/30 bg-white/25 p-5 shadow-[0_8px_32px_rgba(15,40,80,0.1)] backdrop-blur-xl backdrop-saturate-150 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-2.5 text-base font-semibold text-ink hover:bg-paper"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.codebuzz.us/"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
              >
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
