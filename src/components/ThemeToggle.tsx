'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'theme'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(storageKey)
    const systemPrefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches
    const nextTheme: Theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : systemPrefersLight
          ? 'light'
          : 'dark'

    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem(storageKey, nextTheme)
  }

  const label = theme === 'light' ? 'Dark mode' : 'Light mode'

  return (
    <button type="button" className="btn ghost theme-toggle" onClick={toggleTheme}>
      {label}
    </button>
  )
}
