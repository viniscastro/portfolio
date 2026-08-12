import { Reveal } from './Reveal'
import { Section } from './Section'

const info = [
  { label: 'Formação', value: 'ADS — IFPE' },
  { label: 'Foco', value: 'Back-End' },
  { label: 'Localização', value: 'Pernambuco, Brasil' },
]

export function About() {
  return (
    <Section id="sobre" title="Sobre mim" subtitle="Um pouco sobre quem sou e o que faço">
      <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-muted">
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas no IFPE, focado em
              desenvolvimento de software com sólida base em lógica de programação, modelagem de
              dados e arquitetura de sistemas.
            </p>
            <p>
              Experiência prática na criação de aplicações desktop e back-end utilizando Python,
              Java e banco de dados (PostgreSQL).
            </p>
            <p>
              Perfil proativo, colaborativo, habituado ao uso de metodologias ágeis (Scrum) e com
              facilidade para aprender novas tecnologias e solucionar problemas complexos.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-4 rounded-xl border border-line bg-card p-6">
            {info.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-sm text-muted">{item.label}</span>
                <strong className="font-semibold text-fg">{item.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
