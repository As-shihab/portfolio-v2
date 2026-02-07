'use client'

import { useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Summary' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const menuRef = useRef<HTMLDetailsElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const menu = menuRef.current
      if (!menu || !menu.open) return
      const target = event.target as Node
      if (!menu.contains(target)) {
        menu.open = false
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false
  }

  return (
    <header className="nav">
      <a href="#home" className="logo">Shihab</a>

      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
      </div>

      <details className="nav-menu" ref={menuRef}>
        <summary className="nav-toggle" aria-label="Open navigation menu">
          <FaBars aria-hidden="true" />
        </summary>
        <div className="nav-drawer">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <div className="nav-theme">
            <ThemeToggle />
          </div>
        </div>
      </details>
    </header>
  )
}
