import { ClientButton } from './ClientButton'

type ContactLink = { label: string; value: string; href: string }

const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'study.shihab@gmail.com', href: 'mailto:study.shihab@gmail.com' },
  { label: 'Phone', value: '+8801604279418', href: 'tel:+8801604279418' },
  { label: 'Website', value: 'as-shihab.netlify.app', href: 'https://as-shihab.netlify.app' },
]

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-aside">
            <p className="section-eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">Let us build something bold</h2>
            <p className="section-lede">
              Flat: 4-B, House No: 173/27, Shahjadpur, 1212 Dhaka. Reach out for opportunities or collaborations.
            </p>
            <div className="contact-actions">
              <ClientButton label="Copy email" value="study.shihab@gmail.com" className="primary" />
              <a className="btn ghost" href="mailto:study.shihab@gmail.com">Email me</a>
            </div>
            <div className="contact-list">
              {contactLinks.map((item) => (
                <a key={item.label} href={item.href} className="contact-item" target="_blank" rel="noreferrer">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
          <form className="form contact-form" action="mailto:study.shihab@gmail.com" method="post" encType="text/plain">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label className="full">
              <span>Message</span>
              <textarea rows={5} name="message" placeholder="Tell me about the project" required />
            </label>
            <button className="btn primary" type="submit">Send message</button>
            <p className="muted form-note">This opens your email client to send the message.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
