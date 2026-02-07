'use client'

import { useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

type NavLink = {
  href: string
  label: string
}

type MobileMenuProps = {
  links: NavLink[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="nav-menu" ref={menuRef}>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>

      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={close} aria-hidden="true" />
      <div className={`nav-drawer${open ? ' open' : ''}`} role="menu" aria-hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} role="menuitem" onClick={close}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
