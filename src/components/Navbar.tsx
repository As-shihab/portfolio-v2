import { ThemeToggle } from './ThemeToggle'

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

      <details className="nav-menu">
        <summary className="nav-toggle" aria-label="Open navigation menu">Menu</summary>
        <div className="nav-drawer">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
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
