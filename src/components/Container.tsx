import type { ReactNode } from 'react'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export function Container({ className = '', children }: ContainerProps) {
  return <div className={`container mx-auto max-w-[1080px] px-6 ${className}`}>{children}</div>
}
