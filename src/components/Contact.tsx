import { Reveal } from './Reveal'
import { Section } from './Section'
import { contacts } from '../data'

export function Contact() {
  return (
    <Section
      id="contato"
      title="Contato"
      subtitle="Vamos conversar? Estou disponível para novas oportunidades"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact) => (
          <Reveal key={contact.title} className="h-full">
            <a
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="card block h-full px-6 py-8 text-center text-fg no-underline transition-all duration-200 hover:-translate-y-1 hover:border-accent"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-xl font-extrabold text-accent">
                {contact.icon}
              </span>
              <h3 className="mb-1 font-semibold">{contact.title}</h3>
              <p className="break-words text-sm text-muted">{contact.value}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
