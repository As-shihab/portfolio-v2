import { FaAngular, FaGithub, FaLinkedinIn, FaNodeJs } from 'react-icons/fa'
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
        <div className="hero-layout">
          <div className="hero-main">
            <p className="hero-eyebrow">Full Stack Developer</p>
            <h1 className="hero-title">
              Abdus Salam <span>Shihab</span>
            </h1>
            <p className="hero-subtitle">
              Building ERP systems, microservices, and modern web apps.
            </p>
            <div className="hero-tags" aria-label="Core skills">
              <span className="hero-tag">ERP Systems</span>
              <span className="hero-tag">Microservices</span>
              <span className="hero-tag">REST APIs</span>
            </div>
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
              <a
                href="https://www.linkedin.com/in/as-shihab/"
                className="btn ghost"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-photo-shell" aria-label="As Shihab profile image">
            <span className="hero-photo-glow" aria-hidden="true" />
            <span className="hero-photo-ring" aria-hidden="true" />
            <img
              src="/hero.jpeg"
              alt="As Shihab working at a computer"
              className="hero-photo"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
