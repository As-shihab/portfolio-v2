export function Experience() {
  const roles = [
    {
      company: 'Hybritech Innovation Ltd',
      title: 'Software Developer',
      period: 'Onsite',
      tags: ['Microservices', 'ERP', 'CI/CD'],
      bullets: [
        'Built a full ERP solution using a microservices architecture and a polyglot data layer (MySQL, PostgreSQL, MongoDB).',
        'Implemented CI/CD pipelines on AWS EC2 for automated testing and deployment.',
        'Developed an Electron desktop app, Angular + Tailwind frontend, and Laravel/Node.js backend services.',
        'Used OData v4 in custom services for flexible data querying.',
      ],
    },
    {
      company: 'Simec System Ltd',
      title: 'Web Developer (Intern)',
      period: 'Onsite',
      tags: ['Node.js', 'React', 'APIs'],
      bullets: [
        'Built REST APIs with Node.js and Express.js using Prisma, MySQL, and MongoDB.',
        'Delivered full web applications with React.js and token-based authentication.',
        'Implemented email verification and file transfer workflow features.',
        'Developed relational product management modules and admin tools.',
      ],
    },
    {
      company: 'NR Business LTD',
      title: 'Funding Manager',
      period: 'Onsite',
      tags: ['Client communication', 'Finance'],
      bullets: [
        'Collaborated with American clients to understand business positions.',
        'Supported loan processing with Benchmark Capital under client terms and conditions.',
      ],
    },
  ]

  const highlights = [
    {
      title: 'Core focus',
      items: ['ERP microservices', 'REST APIs', 'OData v4 querying', 'CI/CD automation'],
    },
    {
      title: 'Frontend delivery',
      items: ['Angular + Tailwind', 'React.js', 'Electron desktop apps', 'Admin portals'],
    },
    {
      title: 'Backend + data',
      items: ['Laravel', 'Node.js / Express', 'Prisma ORM', 'MySQL, PostgreSQL, MongoDB'],
    },
  ]

  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="container">
        <p className="section-eyebrow">Experience</p>
        <h2 id="exp-title" className="section-title gradient-title">Professional experience</h2>

        <div className="credential-grid" style={{ marginTop: '2.5rem' }}>
          <div className="timeline-section glass-panel">
            <h3>Career Timeline</h3>
            <div className="timeline">
              {roles.map((role) => (
                <div key={role.company} className="timeline-item">
                  <span className="dot" />
                  <h4>{role.title}</h4>
                  <p className="muted">{role.company}</p>
                  <p className="muted" style={{ color: 'var(--primary-glow)' }}>{role.period}</p>
                  <div className="experience-tags" style={{ marginTop: '0.5rem' }}>
                    {role.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <ul className="experience-bullets">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="credential-stack">
            {highlights.map((group) => (
              <div key={group.title} className="credential-card glass-panel">
                <h3>{group.title}</h3>
                <ul className="credential-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
