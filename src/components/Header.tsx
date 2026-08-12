import { useState } from 'react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="container mx-auto flex h-[68px] max-w-[1080px] items-center justify-between px-6">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="text-2xl font-extrabold tracking-wide text-fg no-underline"
        >
          VC<span className="text-accent">.</span>
        </a>

        <ul
          className={`fixed top-[68px] right-0 flex flex-col gap-5 border-b border-l border-line bg-bg-alt px-8 py-6 transition-transform duration-300 md:static md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0 md:translate-x-0 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted no-underline transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1.5 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span
            className={`h-0.5 w-6 bg-fg transition-transform duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-fg transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-fg transition-transform duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>
    </header>
  )
}
