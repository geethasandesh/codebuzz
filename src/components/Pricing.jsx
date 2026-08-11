import { useState } from 'react'
import { Check } from 'lucide-react'
import AnimateIn from './ui/AnimateIn'
import { ScribbleUnderline } from './scribbles/Scribbles'
import { plans } from '../data/content'

export default function Pricing() {
  const [active, setActive] = useState(plans.find((p) => p.featured)?.id || plans[0].id)
  const selected = plans.find((p) => p.id === active) || plans[0]

  return (
    <section id="pricing" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="font-scribble text-2xl text-scribble">fair price</p>
          <ScribbleUnderline className="mx-auto mb-3 h-3 w-24" />
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Get solid direction
          </h2>
          <p className="mt-3 text-lg font-semibold text-mute">Competitive plans for every learner</p>
        </AnimateIn>

        <AnimateIn className="mt-12 overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,40,80,0.08)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3 border-b border-black/5 p-5 lg:border-b-0 lg:border-r">
              {plans.map((plan) => {
                const isActive = plan.id === active
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setActive(plan.id)}
                    className={`w-full rounded-[1.4rem] px-5 py-5 text-left transition ${
                      isActive ? 'bg-ink text-white' : 'bg-paper text-ink hover:bg-sky-soft/50'
                    }`}
                  >
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-lg font-extrabold">{plan.name} plan</p>
                        <p className={`mt-1 text-sm ${isActive ? 'text-white/70' : 'text-mute'}`}>
                          {plan.blurb}
                        </p>
                      </div>
                      <p className="text-2xl font-extrabold">
                        {plan.price}
                        {plan.period && (
                          <span className={`text-sm font-semibold ${isActive ? 'text-white/70' : 'text-mute'}`}>
                            {plan.period}
                          </span>
                        )}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-deep">
                What&apos;s included
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-ink">{selected.name} plan</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {selected.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl bg-paper px-4 py-3">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-sky text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-ink">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://www.codebuzz.us/"
                  className="inline-flex items-center justify-center rounded-2xl bg-ink px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-ink-soft"
                >
                  Enroll now
                </a>
                <p className="text-sm text-mute">
                  Not sure? Start free — no credit card required.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {['Mentor-led learning', 'Real project practice', '24/7 support available'].map((item, i) => (
            <AnimateIn key={item} delay={i * 0.05}>
              <div className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-bold text-ink shadow-sm">
                {item}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
