import { Reveal } from './Reveal'
import { Section } from './Section'
import { timeline } from '../data'

export function Experience() {
  return (
    <Section id="experiencia" title="Experiência" subtitle="Projetos desenvolvidos durante a faculdade">
      <div className="relative mx-auto max-w-[720px] pl-8">
        <div className="absolute top-1.5 bottom-1.5 left-2 w-0.5 bg-gradient-to-b from-accent to-accent-dark" />
        {timeline.map((item) => (
          <Reveal key={item.title} className="relative mb-8">
            <span className="absolute top-1.5 -left-8 h-[18px] w-[18px] rounded-full border-4 border-bg bg-accent shadow-[0_0_12px_rgba(168,85,247,0.25)]" />
            <div className="card p-6 transition-all duration-200 hover:translate-x-1 hover:border-accent">
              <h3 className="mb-1 font-bold text-fg">{item.title}</h3>
              <p className="mb-3 text-sm font-medium text-accent">{item.meta}</p>
              <p className="text-sm text-muted">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
