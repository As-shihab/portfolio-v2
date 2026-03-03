import { FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="grid-overlay" />
        <span className="glow glow-1" />
        <span className="glow glow-2" />
        <span className="hero-noise" />
      </div>

      <div className="container hero-content">
        <div className="hero-panel">
          <div className="hero-main">
            <p className="hero-eyebrow">Full Stack Developer</p>
            <h1 className="hero-title">
              <span>Welcome</span> to my new
              <br />
              Portfolio Website
            </h1>
            <p className="hero-subtitle">
              Hello, I&apos;m Abdus Salam Shihab. I build ERP systems, microservices, and modern
              web apps focused on clean architecture and performance.
            </p>
            <div className="cta">
              <a
                href="https://github.com/As-shihab/as-shihab/releases/download/resume/shihab_resume.pdf"
                className="btn primary"
              >
                <FaDownload />
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
            <span className="hero-photo-star star-1" aria-hidden="true" />
            <span className="hero-photo-star star-2" aria-hidden="true" />
            <div className="hero-photo-ring">
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
      </div>
    </section>
  )
}
