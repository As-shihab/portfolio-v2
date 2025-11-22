import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiUser, FiBox, FiImage, FiCpu, FiBookOpen, FiMail } from 'react-icons/fi'

const links = [
  { href: '#home', label: 'Home', icon: FiHome },
  { href: '#about', label: 'About', icon: FiUser },
  { href: '#projects', label: 'Projects', icon: FiBox },
  { href: '#gallery', label: 'Gallery', icon: FiImage },
  { href: '#tech', label: 'Tech', icon: FiCpu },
  { href: '#blogs', label: 'Blogs', icon: FiBookOpen },
  { href: '#contact', label: 'Contact', icon: FiMail },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [showMobile, setShowMobile] = useState(true)

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 80
      setShowMobile(!nearBottom)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
        <a className="logo" href="#home">Shihab.dev</a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>{l.label}</a>
          ))}
        </nav>
        <button className="nav-toggle" aria-label="Toggle Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
        {open && (
          <motion.nav className="nav-drawer" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </motion.nav>
        )}
      </header>
      <nav className={`mobile-nav ${showMobile ? 'visible' : 'hidden'}`}>
        {links.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} className={active === href ? 'active' : ''}>
            <Icon />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}


