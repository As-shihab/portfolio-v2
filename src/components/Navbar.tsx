import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Summary' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
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

      <MobileMenu links={links} />
    </header>
  )
}
