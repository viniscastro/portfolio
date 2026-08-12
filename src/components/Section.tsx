import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  alt?: boolean
  children: ReactNode
}

export function Section({ id, title, subtitle, alt, children }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${alt ? 'border-y border-line bg-bg-alt' : ''}`}>
      <div className="container mx-auto max-w-[1080px] px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mb-12 mt-2 text-center text-muted">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
