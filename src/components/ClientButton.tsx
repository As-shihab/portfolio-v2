'use client'

import { useState } from 'react'

type ClientButtonProps = {
  label: string
  value: string
  className?: string
}

export function ClientButton({ label, value, className }: ClientButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" className={`btn ${className ?? ''}`.trim()} onClick={handleClick}>
      {copied ? 'Copied' : label}
    </button>
  )
}
