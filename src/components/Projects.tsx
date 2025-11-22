const projects = [
  {
    title: 'Aurora Gameplay Hub',
    description: 'Real-time dashboard for a gaming startup with reactive charts, lobby previews, and live squad coordination.',
    cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    role: 'Lead Frontend Engineer',
    year: '2024',
    features: ['Next.js + Vite microfrontends', 'WebGL particle scenes', 'Role-based dashboards'],
    links: [
      { label: 'Case study', href: '#', variant: 'primary' },
      { label: 'Live demo', href: '#', variant: 'ghost' },
    ],
  },
  {
    title: 'Lumen Commerce Studio',
    description: 'Premium marketing automation portal focusing on tactile motion and instant feedback loops.',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    role: 'Product Engineer',
    year: '2023',
    features: ['Design system led dev', 'Framer Motion timelines', 'Custom analytics primitives'],
    links: [
      { label: 'Product video', href: '#', variant: 'primary' },
    ],
  },
  {
    title: 'Atlas Knowledge Base',
    description: 'Content editing environment with multiplayer presence, AI helpers, and editorial quality gates.',
    cover: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80',
    role: 'Senior Engineer',
    year: '2022',
    features: ['CRDT powered sync', 'Custom rich text toolkit', 'Accessibility-first architecture'],
    links: [
      { label: 'Read doc', href: '#', variant: 'primary' },
    ],
  },
]

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <p className="section-eyebrow">Signature builds</p>
        <h2 id="projects-title" className="section-title">Projects I'm proud of</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-media" style={{ backgroundImage: `url(${project.cover})` }}>
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>{project.role}</span>
                </div>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} className={`btn ${link.variant}`} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


