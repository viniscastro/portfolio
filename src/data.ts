export interface SkillGroups {
  backend: string[]
  frontend: string[]
}

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
  text: string
  tech: string[]
  url: string
}

export interface Contact {
  icon: string
  title: string
  value: string
  href: string
}

export const skills: SkillGroups = {
  backend: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'SQLite'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'Java Swing', 'Git', 'Docker'],
}

export const skillGroups: SkillGroup[] = [
  { title: 'Back-End & Dados', items: skills.backend },
  { title: 'Front-End & Ferramentas', items: skills.frontend },
]

export const timeline: TimelineItem[] = [
  {
    title: 'Gerenciador de Barbearia',
    meta: 'Aplicação Desktop · Python + Tkinter',
    text: 'Sistema desktop para gestão de uma barbearia, com cadastro de clientes e serviços.',
  },
  {
    title: 'Sistema de Gerenciamento Financeiro',
    meta: 'Aplicação Desktop · Java, Spring Boot, SQLite, Java Swing',
    text: 'Sistema para controle financeiro com interface desktop e persistência em SQLite.',
  },
  {
    title: 'Gerenciador de Barbearia Web',
    meta: 'Web · HTML5, CSS3, JS, PgSQL, Python, FastAPI, Docker',
    text: 'Evolução do gerenciador com arquitetura web completa: front-end, API e banco de dados.',
  },
]

export const projects: Project[] = [
  {
    title: 'Gerenciador de Barbearia',
    badge: 'Desktop',
    text: 'Aplicação desktop para gerenciamento de barbearia, desenvolvida apenas com Python e Tkinter.',
    tech: ['Python', 'Tkinter'],
    url: 'https://github.com/viniscastro/Gerenciador-de-Barbearia',
  },
  {
    title: 'Sistema de Gerenciamento Financeiro',
    badge: 'Desktop',
    text: 'Sistema financeiro desktop com Java, Spring Boot, SQLite e interface em Java Swing.',
    tech: ['Java', 'Spring Boot', 'SQLite', 'Swing'],
    url: 'https://github.com/isjustjefferson/Projeto-LPOO',
  },
  {
    title: 'Gerenciador de Barbearia Web',
    badge: 'Web',
    text: 'Gerenciador web completo com HTML5, CSS3, JS, PostgreSQL, Python, FastAPI e Docker.',
    tech: ['HTML5', 'CSS3', 'JS', 'PgSQL', 'FastAPI', 'Docker'],
    url: 'https://github.com/viniscastro/barber-manager',
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
]
