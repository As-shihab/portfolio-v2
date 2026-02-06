type ClientButtonProps = {
  label: string
  className?: string
}

export function ClientButton({ label, className }: ClientButtonProps) {
  return (
    <button type="button" className={`btn ${className ?? ''}`.trim()}>
      {label}
    </button>
  )
}
