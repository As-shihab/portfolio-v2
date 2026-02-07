import type { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'

type ContactLink = {
  label: string
  value: string
  href: string
  icon: IconType
}

const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'study.shihab@gmail.com', href: 'mailto:study.shihab@gmail.com', icon: FaEnvelope },
  { label: 'Phone', value: '+8801604279418', href: 'tel:+8801604279418', icon: FaPhoneAlt },
  { label: 'Website', value: 'as-shihab.netlify.app', href: 'https://as-shihab.netlify.app', icon: FaGlobe },
  { label: 'GitHub', value: 'github.com/As-shihab', href: 'https://github.com/As-shihab', icon: FaGithub },
  { label: 'LinkedIn', value: 'linkedin.com/in/as-shihab', href: 'https://www.linkedin.com/in/as-shihab/', icon: FaLinkedinIn },
]

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-shell glass-panel">
          <div className="contact-aside">
            <p className="section-eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title gradient-title">Let us build something bold</h2>
            <p className="section-lede">
              Flat: 4-B, House No: 173/27, Shahjadpur, 1212 Dhaka. Reach out for opportunities or collaborations.
            </p>

            <div className="contact-actions">
              <a className="btn primary" href="mailto:study.shihab@gmail.com">Email me</a>
              <a className="btn ghost" href="https://github.com/As-shihab" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div className="contact-list">
              {contactLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} className="contact-item" target="_blank" rel="noreferrer">
                    <span className="contact-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div className="contact-text">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <form
            className="form contact-form"
            action="mailto:study.shihab@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label>
              <span>Name</span>
              <input type="text" className="w-full" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" className="w-full" placeholder="you@example.com" required />
            </label>
            <label className="full">
              <span>Message</span>
              <textarea rows={5} name="message" placeholder="Tell me about the project" required />
            </label>

            <button className="btn primary full" type="submit">Send message</button>
            <p className="muted form-note full">This opens your email client to send the message.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
