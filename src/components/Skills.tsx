import { Reveal } from './Reveal'
import { Section } from './Section'
import { skillGroups } from '../data'

export function Skills() {
  return (
    <Section
      id="habilidades"
      title="Habilidades"
      subtitle="Tecnologias e ferramentas com as quais trabalho"
      alt
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal key={group.title} className="h-full">
            <div className="card h-full p-7">
              <h3 className="mb-5 font-bold text-accent">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
