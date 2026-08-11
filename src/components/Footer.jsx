export default function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-6 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sky-deep text-sm font-extrabold">
                CB
              </span>
              <span className="text-lg font-extrabold">CodeBuzz</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Learn, experiment, and deploy with confidence. Everyone starts somewhere — at
              CodeBuzz, you don&apos;t start alone.
            </p>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">Product</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#tracks" className="hover:text-white">AI Fundamentals</a></li>
              <li><a href="#curriculum" className="hover:text-white">Machine Learning</a></li>
              <li><a href="#tracks" className="hover:text-white">Data Science</a></li>
              <li><a href="#curriculum" className="hover:text-white">Deep Learning</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">Support</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#pricing" className="hover:text-white">Help Center</a></li>
              <li><a href="#mentors" className="hover:text-white">Contact Us</a></li>
              <li><a href="#reviews" className="hover:text-white">Community</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#mentors" className="hover:text-white">About Us</a></li>
              <li><a href="https://www.codebuzz.us/" className="hover:text-white">Careers</a></li>
              <li><a href="https://www.codebuzz.us/" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="https://www.codebuzz.us/" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CodeBuzz. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.codebuzz.us/" className="hover:text-white">Terms</a>
            <a href="https://www.codebuzz.us/" className="hover:text-white">Privacy</a>
            <a href="https://www.codebuzz.us/" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
