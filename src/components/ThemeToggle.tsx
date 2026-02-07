'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

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
  const [pref, setPref] = useState<ThemePref>('dark')
  const [resolved, setResolved] = useState<'light' | 'dark'>('dark')
  const [ready, setReady] = useState(false)
  const mountedRef = useRef(false)
  const transitionRef = useRef<number | null>(null)

  const applyTheme = useCallback((nextPref: ThemePref, withTransition: boolean) => {
    if (typeof window === 'undefined') return
    const nextResolved = resolveTheme(nextPref)
    document.documentElement.setAttribute('data-theme', nextResolved)
    document.documentElement.setAttribute('data-theme-pref', nextPref)
    setResolved(nextResolved)

    if (!withTransition) return
    document.documentElement.classList.add('theme-transition')
    if (transitionRef.current) window.clearTimeout(transitionRef.current)
    transitionRef.current = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 360)
  }, [])

  useEffect(() => {
    return () => {
      if (typeof window === 'undefined') return
      if (transitionRef.current) window.clearTimeout(transitionRef.current)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(storageKey) as ThemePref | null
    const nextPref: ThemePref =
      stored === 'light' || stored === 'dark' || stored === 'system'
        ? stored
        : 'dark'

    setPref(nextPref)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    applyTheme(pref, mountedRef.current)
    if (!mountedRef.current) mountedRef.current = true

    const media = window.matchMedia?.('(prefers-color-scheme: light)')
    if (!media) return
    const handler = () => {
      if (pref !== 'system') return
      applyTheme('system', true)
    }
    media.addEventListener?.('change', handler)
    return () => media.removeEventListener?.('change', handler)
  }, [pref, applyTheme, ready])

  const cycleTheme = () => {
    const next: ThemePref = resolved === 'dark' ? 'light' : 'dark'
    applyTheme(next, true)
    setPref(next)
    localStorage.setItem(storageKey, next)
  }

  return (
    <button
      type="button"
      className="theme-switch"
      onClick={cycleTheme}
      role="switch"
      aria-checked={resolved === 'dark'}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="theme-switch-track" aria-hidden="true">
        <span className="theme-switch-thumb" />
      </span>
    </button>
  )
}
