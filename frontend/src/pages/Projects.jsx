import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl text-left">
        <h2 className="text-2xl md:text-3xl">Projects</h2>
        <p className="mt-2 text-text">A few things I&apos;ve built recently.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
