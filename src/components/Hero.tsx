export function Hero() {
  return (
    <section id="inicio" className="hero-bg flex min-h-screen items-center px-6 pb-16 pt-28">
      <div className="container mx-auto max-w-[1080px] text-center">
        <p className="mb-3 text-lg font-semibold text-accent">Olá, eu sou</p>
        <h1 className="mb-2 text-4xl font-extrabold leading-tight tracking-tight text-fg md:text-6xl">
          Vinícius Silva Castro
        </h1>
        <p className="mb-5 text-xl font-semibold text-muted md:text-3xl">
          Desenvolvedor <span className="text-accent">Back-End Java</span>
        </p>
        <p className="mx-auto mb-8 max-w-[620px] text-base text-muted md:text-lg">
          Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por criar soluções de
          software com Java, Python e bancos de dados.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-outline">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}
