import { Container } from './Container'

export function Hero() {
  return (
    <section id="inicio" className="hero-bg flex min-h-screen items-center pb-16 pt-28">
      <Container className="text-center">
        <p className="mb-3 text-lg font-semibold text-accent">Olá, eu sou</p>
        <h1 className="mb-2 text-4xl font-extrabold leading-tight tracking-tight text-fg md:text-6xl">
          Vinícius Silva Castro
        </h1>
        <p className="mb-5 text-xl font-semibold text-muted md:text-3xl">
          Desenvolvedor de <span className="text-accent">Software</span>
        </p>
        <p className="mx-auto mb-8 max-w-[620px] text-base text-muted md:text-lg">
          Estudante de Análise e Desenvolvimento de Sistemas no IFPE, transformando problemas do
          dia a dia em soluções simples e úteis com Python, Java, TypeScript e React.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-outline">
            Entrar em contato
          </a>
        </div>
      </Container>
    </section>
  )
}
