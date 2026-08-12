import { Reveal } from './Reveal'
import { Section } from './Section'
import { skills } from '../data'

const groups = [
  { title: 'Back-End & Dados', items: skills.backend },
  { title: 'Front-End & Ferramentas', items: skills.frontend },
]

export function Skills() {
  return (
    <Section
      id="habilidades"
      title="Habilidades"
      subtitle="Tecnologias e ferramentas com as quais trabalho"
      alt
    >
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <Reveal key={group.title} className="h-full">
            <div className="h-full rounded-xl border border-line bg-card p-7">
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
