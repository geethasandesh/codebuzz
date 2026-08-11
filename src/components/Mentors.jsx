import AnimateIn from './ui/AnimateIn'
import { CloudDivider } from './scribbles/Scribbles'
import { team } from '../data/content'

const accents = ['#7db8f5', '#34d399', '#fbbf24', '#f472b6', '#a78bfa']

export default function Mentors() {
  return (
    <section id="mentors" className="relative overflow-hidden bg-sky-soft pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-deep">
            The people behind CodeBuzz
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Say hello to our team members
          </h2>
          <p className="mt-4 text-base text-mute">
            Learn directly from professionals shaping today&apos;s tech industry.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <AnimateIn key={person.name} delay={i * 0.05}>
              <article className="h-full rounded-[1.75rem] bg-white p-6 shadow-[0_10px_30px_rgba(15,40,80,0.06)]">
                <div
                  className="mb-5 grid h-16 w-16 place-items-center rounded-[1.25rem] text-xl font-extrabold text-ink"
                  style={{ backgroundColor: accents[i % accents.length] }}
                >
                  {person.name
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="text-xl font-extrabold text-ink">{person.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{person.role}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
      <CloudDivider className="mt-16" fill="#141414" />
    </section>
  )
}
