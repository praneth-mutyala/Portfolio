import { experience } from '../data/experience'

function Experience() {
  return (
    <section className="px-6 py-16 text-left md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl">Experience</h2>

        <ol className="mt-10 space-y-12 border-l border-border pl-8">
          {experience.map((role) => (
            <li key={`${role.company}-${role.title}`} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg">{role.title}</h3>
                  <p className="text-sm text-text">
                    {role.company} · {role.location}
                  </p>
                </div>
                <p className="whitespace-nowrap text-sm text-text/70">
                  {role.startDate} – {role.endDate ?? 'Present'}
                </p>
              </div>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
