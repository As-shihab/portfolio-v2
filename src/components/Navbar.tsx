import { FiMenu, FiHome, FiUser, FiBriefcase, FiAward, FiBox, FiCpu, FiBookOpen, FiMail } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home', icon: FiHome },
  { href: '#about', label: 'Summary', icon: FiUser },
  { href: '#experience', label: 'Experience', icon: FiBriefcase },
  { href: '#education', label: 'Education', icon: FiAward },
  { href: '#projects', label: 'Projects', icon: FiBox },
  { href: '#skills', label: 'Skills', icon: FiCpu },
  { href: '#writing', label: 'Writing', icon: FiBookOpen },
  { href: '#contact', label: 'Contact', icon: FiMail },
]

export function Navbar() {
  return (
    <header className="nav">
      <a className="logo" href="#home">Shihab</a>
      <nav className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
      </div>
      <details className="nav-mobile">
        <summary aria-label="Toggle menu">
          <FiMenu />
        </summary>
        <nav className="nav-drawer" aria-label="Mobile navigation">
          {links.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href}>
              <Icon />
              <span>{label}</span>
            </a>
          ))}
          <div className="nav-theme">
            <ThemeToggle />
          </div>
        </nav>
      </details>
    </header>
  )
}
