interface ScrollRevealProps {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  className?: string
}

export const ScrollReveal = ({
  children,
  width = 'fit-content',
  className = '',
}: ScrollRevealProps) => {
  return (
    <div style={{ width }} className={className}>
      {children}
    </div>
  )
}
