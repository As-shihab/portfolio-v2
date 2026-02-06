const projects = [
  {
    title: 'ERP Microservices Platform',
    description: 'Enterprise ERP suite built with microservices and a polyglot data layer for scalable operations.',
    cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    company: 'Hybritech Innovation Ltd',
    role: 'Software Developer',
    stack: ['Microservices', 'Angular', 'Laravel', 'Node.js', 'OData v4'],
    outcomes: [
      'Polyglot databases across MySQL, PostgreSQL, and MongoDB',
      'Electron desktop client with Angular + Tailwind UI',
      'CI/CD automation and AWS EC2 deployments',
    ],
    links: [
      { label: 'Case study', href: '#', variant: 'primary' },
    ],
  },
  {
    title: 'Web Platform with Secure APIs',
    description: 'Full web applications and REST APIs with authentication, verification, and product management flows.',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    company: 'Simec System Ltd',
    role: 'Web Developer (Intern)',
    stack: ['React.js', 'Node.js', 'Express.js', 'Prisma', 'MySQL/MongoDB'],
    outcomes: [
      'Token-based authentication and email verification',
      'FTP workflows and relational product management modules',
      'REST APIs with Prisma data access layer',
    ],
    links: [
      { label: 'Case study', href: '#', variant: 'primary' },
    ],
  },
]

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <p className="section-eyebrow">Selected work</p>
        <h2 id="projects-title" className="section-title">Project highlights from recent roles</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-media" style={{ backgroundImage: `url(${project.cover})` }}>
                <div className="project-meta">
                  <span>{project.company}</span>
                  <span>{project.role}</span>
                </div>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ul className="project-features">
                  {project.outcomes.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} className={`btn ${link.variant}`} href={link.href}>
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
