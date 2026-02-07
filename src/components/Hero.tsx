import { FaAngular, FaGithub, FaNodeJs } from 'react-icons/fa'
import { SiLaravel, SiPrisma } from 'react-icons/si'

const stackIcons = [
  { icon: FaAngular, label: 'Angular', top: '22%', left: '12%', delay: 0 },
  { icon: FaNodeJs, label: 'Node.js', top: '68%', left: '16%', delay: 1.2 },
  { icon: SiPrisma, label: 'Prisma', top: '32%', left: '78%', delay: 0.6 },
  { icon: SiLaravel, label: 'Laravel', top: '72%', left: '70%', delay: 1.8 },
]

export function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="glow glow-1" />
        <span className="glow glow-2" />
        <span className="grid-overlay" />
        <span className="stars" />
      </div>

      <div className="hero-parallax" aria-hidden="true">
        <span className="parallax-ring ring-1" />
        <span className="parallax-ring ring-2" />
        <span className="parallax-ring ring-3" />
        <span className="parallax-shard shard-1" />
        <span className="parallax-shard shard-2" />
      </div>

      <div className="hero-stack" aria-hidden="true">
        {stackIcons.map(({ icon: Icon, label, top, left, delay }) => (
          <div
            key={label}
            className="hero-stack-icon float"
            style={{ top, left, animationDelay: `${delay}s` }}
          >
            <Icon />
            <small>{label}</small>
          </div>
        ))}
      </div>

      <div className="container hero-content">
        <h1 className="hero-title">
          Abdus Salam <span>Shihab</span>
        </h1>
        <p className="hero-subtitle">
          Building ERP systems, microservices, and modern web apps.
        </p>
        <div className="cta">
          <a
            href="https://github.com/As-shihab/as-shihab/releases/download/resume/shihab_resume.pdf"
            className="btn primary"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/As-shihab"
            className="btn ghost"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
