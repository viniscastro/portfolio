import { Reveal } from './Reveal'
import { Section } from './Section'
import { projects } from '../data'

export function Projects() {
  return (
    <Section id="projetos" title="Projetos" subtitle="Alguns trabalhos que desenvolvi" alt>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Reveal key={project.title} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-line bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="font-bold text-fg">{project.title}</h3>
                <span className="whitespace-nowrap rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                  {project.badge}
                </span>
              </div>
              <p className="mb-4 flex-grow text-sm text-muted">{project.text}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line bg-white/5 px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm self-start"
              >
                Ver no GitHub
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
