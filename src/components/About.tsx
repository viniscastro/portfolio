import { Reveal } from './Reveal'
import { Section } from './Section'

const info = [
  { label: 'Formação', value: 'ADS — IFPE (5º período)' },
  { label: 'Previsão de conclusão', value: 'Julho de 2027' },
  { label: 'Foco', value: 'Desenvolvimento de software · IA aplicada' },
  { label: 'Idiomas', value: 'Inglês básico (Prolinfo/UPE)' },
  { label: 'Localização', value: 'Paulista – PE, Brasil' },
]

export function About() {
  return (
    <Section id="sobre" title="Sobre mim" subtitle="Um pouco sobre quem sou e o que faço">
      <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-muted">
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas no IFPE (5º período), com gosto
              por transformar problemas do dia a dia em soluções simples e úteis.
            </p>
            <p>
              Desde o 1º período desenvolvo projetos em Python, Java, TypeScript e React — de
              aplicações desktop a sistemas web full stack, com bancos de dados, APIs e Docker.
            </p>
            <p>
              Trabalho bem em equipe, com Scrum e Git, e também de forma independente: já entreguei
              projetos em dupla, em grupo e sozinho. Aprendo rápido, gosto de resolver problemas e
              tenho interesse em IA aplicada ao desenvolvimento.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="card flex flex-col gap-4 p-6">
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
