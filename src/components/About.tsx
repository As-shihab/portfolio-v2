const highlights = [
  {
    title: 'Career objective',
    description: 'To work in a challenging environment, achieve in the respective field, and build my skills with an energetic and progressive mindset.',
  },
  {
    title: 'Full stack focus',
    description: 'Experience across Angular, React, Laravel, Node.js, and microservices with modern CI/CD practices.',
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
            <h2 id="about-title" className="section-title">Software developer with a product mindset</h2>
            <p>
              I build full stack applications with a focus on clean architecture, scalable services, and polished user interfaces.
              I enjoy working on ERP systems, microservices, and modern web apps.
            </p>
            <p>
              My goal is to keep improving, take on challenging work, and contribute to teams that value quality engineering.
            </p>
          </div>
          <div className="about-photo">
            <div className="about-photo-inner">
              <div className="about-photo-img" />
              <div className="about-photo-badge">
                <p>Full stack</p>
                <span>Angular, Laravel, Node</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-panels">
          {highlights.map((item) => (
            <article key={item.title} className="about-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
