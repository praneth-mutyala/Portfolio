function ProjectCard({ title, description, stack, liveUrl, githubUrl, image }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-12px_rgba(34,211,238,0.5)]">
      <div className="aspect-video w-full border-b border-border bg-bg">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-text/40">
            No preview available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 text-left">
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm text-text">{description}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(liveUrl || githubUrl) && (
          <div className="flex gap-4 pt-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-h transition hover:text-accent"
              >
                <svg className="h-4 w-4 invert brightness-200" aria-hidden="true">
                  <use href="/icons.svg#external-link-icon" />
                </svg>
                Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-h transition hover:text-accent"
              >
                <svg className="h-4 w-4 invert brightness-200" aria-hidden="true">
                  <use href="/icons.svg#github-icon" />
                </svg>
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
