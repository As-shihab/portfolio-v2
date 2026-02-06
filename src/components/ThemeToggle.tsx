'use client'

import { useEffect, useMemo, useState } from 'react'

type ThemePref = 'light' | 'dark' | 'system'

const storageKey = 'theme'

const resolveTheme = (pref: ThemePref) => {
  if (pref === 'system') {
    const systemPrefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches
    return systemPrefersLight ? 'light' : 'dark'
  }
  return pref
}

export function ThemeToggle() {
  const [pref, setPref] = useState<ThemePref>('system')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(storageKey) as ThemePref | null
    const nextPref: ThemePref =
      stored === 'light' || stored === 'dark' || stored === 'system'
        ? stored
        : 'system'

    setPref(nextPref)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const resolved = resolveTheme(pref)
    document.documentElement.setAttribute('data-theme', resolved)
    document.documentElement.setAttribute('data-theme-pref', pref)

    const media = window.matchMedia?.('(prefers-color-scheme: light)')
    if (!media) return
    const handler = () => {
      if (pref !== 'system') return
      const nextResolved = resolveTheme('system')
      document.documentElement.setAttribute('data-theme', nextResolved)
    }
    media.addEventListener?.('change', handler)
    return () => media.removeEventListener?.('change', handler)
  }, [pref])

  const cycleTheme = () => {
    const next: ThemePref = pref === 'system' ? 'dark' : pref === 'dark' ? 'light' : 'system'
    setPref(next)
    localStorage.setItem(storageKey, next)
    const resolved = resolveTheme(next)
    document.documentElement.setAttribute('data-theme', resolved)
    document.documentElement.setAttribute('data-theme-pref', next)
  }

  const label = useMemo(() => {
    if (pref === 'system') return 'Theme: System'
    if (pref === 'dark') return 'Theme: Dark'
    return 'Theme: Light'
  }, [pref])

  return (
    <button type="button" className="btn ghost theme-toggle" onClick={cycleTheme}>
      {label}
    </button>
  )
}
