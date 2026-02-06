import type { CSSProperties } from 'react'
import { FaAngular, FaNodeJs } from 'react-icons/fa'
import { SiLaravel, SiPrisma } from 'react-icons/si'

const stackIcons = [
  { icon: FaAngular, label: 'Angular', top: '18%', left: '14%', driftX: 12, driftY: -10 },
  { icon: FaNodeJs, label: 'Node.js', top: '60%', left: '20%', driftX: -14, driftY: 12 },
  { icon: SiPrisma, label: 'Prisma', top: '40%', left: '70%', driftX: 16, driftY: -8 },
  { icon: SiLaravel, label: 'Laravel', top: '72%', left: '62%', driftX: -10, driftY: 14 },
]

export function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      <div className="hero-bg">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="grid-overlay" />
      </div>
      <div className="hero-haze" />
      <div className="hero-parallax">
        <span className="parallax-ring ring-1" />
        <span className="parallax-ring ring-2" />
        <span className="parallax-ring ring-3" />
        <span className="parallax-shard shard-1" />
        <span className="parallax-shard shard-2" />
      </div>
      <div className="floaters">
        <span className="floater f1" />
        <span className="floater f2" />
        <span className="floater f3" />
      </div>
      <div className="hero-stack" aria-hidden="true">
        {stackIcons.map(({ icon: Icon, label, top, left, driftX, driftY }, index) => (
          <span
            key={label}
            className="hero-stack-icon"
            style={
              {
                top,
                left,
                '--drift-x': `${driftX}px`,
                '--drift-y': `${driftY}px`,
                animationDelay: `${index * 0.4}s`,
              } as CSSProperties
            }
          >
            <Icon />
            <small>{label}</small>
          </span>
        ))}
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Full stack software developer</p>
        <h1 id="hero-title" className="hero-title">
          Abdus Salam <span>Shihab</span>
        </h1>
        <p className="hero-subtitle">
          To work in a challenging environment, build my skills, and contribute with energy and progress.
        </p>
        <div className="cta">
          <a href="https://github.com/As-shihab/as-shihab/releases/download/resume/shihab_resume.pdf" className="btn primary">Download resume</a>
          <a href="#experience" className="btn ghost">View experience</a>
        </div>
      </div>
    </section>
  )
}
