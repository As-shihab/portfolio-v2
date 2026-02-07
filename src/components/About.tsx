const highlights = [
  {
    title: 'Career objective',
    description: 'To work in a challenging environment, achieve in the respective field, and build my skills with an energetic and progressive mindset.',
  },
  {
    title: 'Delivery focus',
    description: 'ERP systems, microservices, and scalable services with modern CI/CD practices.',
  },
  {
    title: 'Collaboration',
    description: 'Comfortable working with teams, clients, and stakeholders to deliver reliable software solutions.',
  },
]

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <p className="section-eyebrow">Summary</p>
            <h2 id="about-title" className="section-title gradient-title">About</h2>
            <p className="section-lede">
              I build software applications with a focus on clean architecture, scalable services, and polished user interfaces.
              I enjoy working on ERP systems, microservices, and modern web apps. Founder of Aptigen.
            </p>
            <p className="section-lede" style={{ marginTop: '1rem' }}>
              My goal is to keep improving, take on challenging work, and contribute to teams that value quality engineering.
            </p>
          </div>

          <div className="about-photo">
            <div className="about-photo-inner glass-panel">
              <div className="about-photo-img" />
            </div>
          </div>
        </div>

        <div className="about-panels">
          {highlights.map((item) => (
            <article key={item.title} className="about-card glass-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
