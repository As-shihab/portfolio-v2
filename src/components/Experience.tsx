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

  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="container">
        <p className="section-eyebrow">Experience</p>
        <h2 id="exp-title" className="section-title">Professional experience</h2>
        <div className="experience-grid">
          {roles.map((r) => (
            <article key={r.company} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{r.title}</h3>
                  <p className="muted">{r.company} - {r.period}</p>
                </div>
                <div className="experience-tags">
                  {r.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <ul className="experience-bullets">
                {r.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
