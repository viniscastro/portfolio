export interface SkillGroup {
  title: string
  items: string[]
}

export interface TimelineItem {
  title: string
  meta: string
  text: string
}

export interface Project {
  title: string
  badge: string
  context: string
  text: string
  highlights?: string[]
  tech: string[]
  url: string
}

export interface Contact {
  icon: string
  title: string
  value: string
  href: string
}

export const skillGroups: SkillGroup[] = [
  { title: 'Linguagens', items: ['Python', 'Java', 'JavaScript', 'TypeScript'] },
  { title: 'Front-End', items: ['HTML5', 'CSS3', 'React', 'Next.js', 'Tailwind CSS'] },
  {
    title: 'Back-End & Dados',
    items: ['PostgreSQL', 'SQLite', 'FastAPI', 'Prisma', 'Docker'],
  },
  {
    title: 'IA & Dados',
    items: ['LLMs', 'RAG', 'Busca semântica', 'Embeddings', 'ChromaDB', 'Ollama'],
  },
  { title: 'Ferramentas & Ágil', items: ['Git CLI', 'GitHub', 'Scrum', 'Vibe Coding'] },
  {
    title: 'Competências Pessoais',
    items: [
      'Resolução de problemas',
      'Aprendizado rápido',
      'Curiosidade',
      'Comunicação',
      'Organização',
      'Trabalho em equipe',
    ],
  },
]

export const timeline: TimelineItem[] = [
  {
    title: 'Gerenciador de Barbearia',
    meta: '1º período · em dupla · Python, CustomTkinter, SQLite',
    text: 'Primeiro projeto da graduação: sistema desktop para gestão de clientes e agendamentos de uma barbearia.',
  },
  {
    title: 'Sistema de Gerenciamento Financeiro',
    meta: '2º período · em grupo (6 a 7 pessoas) · Java, Swing, SQLite',
    text: 'Aplicação em equipe com POO, Scrum e Git: controle de receitas, despesas e metas, com gráficos e envio de e-mails.',
  },
  {
    title: 'Barber Manager',
    meta: '3º período · em dupla · FastAPI, PostgreSQL, Docker, AWS EC2',
    text: 'Evolução do gerenciador para a web, com arquitetura de microsserviços. Atuei no frontend, na integração de APIs e em UI/UX.',
  },
  {
    title: 'Gestor Financeiro',
    meta: 'Projeto individual · Next.js, TypeScript, PostgreSQL',
    text: 'Aplicação full stack de finanças pessoais desenvolvida sozinho, de ponta a ponta, com autenticação, PWA, testes e monitoramento.',
  },
  {
    title: 'GameFinder RAG',
    meta: '5º período · em dupla · Python, Ollama, ChromaDB',
    text: 'Projeto da disciplina TEIA (IFPE): recomendador de jogos da Steam com LLM e RAG, explorando IA aplicada ao desenvolvimento.',
  },
]

export const projects: Project[] = [
  {
    title: 'GameFinder RAG',
    badge: 'IA',
    context: '5º período · em dupla',
    text: 'Recomenda jogos da Steam a partir de pedidos em linguagem natural, usando LLM e RAG com busca semântica sobre um dataset público da Steam.',
    highlights: [
      'Extrai filtros do pedido com LLM (preço, plataforma, modo e ano)',
      'Recomenda 5 jogos com justificativas e validação contra alucinações',
      'Interface em Gradio e benchmark hit@5 com e sem RAG',
    ],
    tech: ['Python', 'Ollama', 'ChromaDB', 'Gradio', 'pandas', 'scikit-learn', 'Plotly', 'UMAP'],
    url: 'https://github.com/viniscastro/TEIA',
  },
  {
    title: 'Gestor Financeiro',
    badge: 'Full Stack',
    context: 'Projeto individual',
    text: 'Aplicação web de finanças pessoais com múltiplas contas e transferências, cartões com faturas, importação CSV/OFX, orçamentos por categoria, metas e gráficos.',
    highlights: [
      'Autenticação com confirmação de e-mail, push e PWA instalável',
      'Relatório mensal em PDF enviado por e-mail',
      'Rate limiting, sanitização contra XSS, Sentry e testes com Vitest',
    ],
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'Recharts', 'Zod'],
    url: 'https://github.com/viniscastro/gestor-financeiro',
  },
  {
    title: 'Barber Manager',
    badge: 'Web',
    context: '3º período · em dupla',
    text: 'Sistema web de gestão para barbearias: cadastro de clientes com validação de WhatsApp, catálogo de serviços e agenda com validação de horários e status.',
    highlights: [
      '3 microsserviços com banco por serviço e Nginx como API Gateway',
      'Publicado na AWS EC2',
      'Atuação: frontend, integração de APIs e UI/UX',
    ],
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Docker', 'Nginx', 'AWS EC2'],
    url: 'https://github.com/viniscastro/barber-manager',
  },
  {
    title: 'Sistema de Gerenciamento Financeiro',
    badge: 'Desktop',
    context: '2º período · em grupo',
    text: 'Controle de receitas, despesas e metas, com gráficos para acompanhar os resultados e envio de e-mails.',
    highlights: ['POO, Scrum e Git em equipe de 6 a 7 pessoas'],
    tech: ['Java', 'Swing', 'SQLite', 'JFreeChart', 'Jakarta Mail'],
    url: 'https://github.com/isjustjefferson/Projeto-LPOO',
  },
  {
    title: 'Gerenciador de Barbearia',
    badge: 'Desktop',
    context: '1º período · em dupla',
    text: 'Sistema desktop para gestão de clientes e agendamentos, pensado para simplificar a rotina de atendimento.',
    tech: ['Python', 'CustomTkinter', 'SQLite'],
    url: 'https://github.com/viniscastro/Gerenciador-de-Barbearia',
  },
]

export const contacts: Contact[] = [
  {
    icon: '✉',
    title: 'E-mail',
    value: 'vinislad17@gmail.com',
    href: 'mailto:vinislad17@gmail.com',
  },
  {
    icon: '☎',
    title: 'WhatsApp',
    value: '(81) 98346-4502',
    href: 'https://wa.me/5581983464502',
  },
  {
    icon: 'in',
    title: 'LinkedIn',
    value: '@viniscastro',
    href: 'https://www.linkedin.com/in/viniscastro/',
  },
  {
    icon: '</>',
    title: 'GitHub',
    value: '@viniscastro',
    href: 'https://github.com/viniscastro',
  },
]
