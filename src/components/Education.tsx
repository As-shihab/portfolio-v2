export function Education() {
  const education = [
    {
      school: 'Presidency University of Bangladesh',
      degree: 'Bachelor of Science (B.Sc.)',
      period: 'Running student',
      meta: ['Major: Engineering', 'Minor: Computer Science and Engineering (CSE)'],
    },
    {
      school: 'Darunnajat Siddikia Kamil Madrasah',
      degree: 'Higher Secondary Certificate (HSC)',
      period: 'Passing Year: 2021 - 2022',
      meta: ['Board: Madrasah', 'Group: Science', 'GPA: 5.00 / 5.00'],
    },
    {
      school: 'Cumilla E-alia Madrasah',
      degree: 'Secondary School Certificate (SSC)',
      period: 'Passing Year: 2019',
      meta: ['Board: Madrasah', 'Group: Science', 'GPA: 4.78 / 5.00'],
    },
  ]

  const certifications = [
    { name: 'Microservices Architecture', issuer: 'Project Experience', year: '2024' },
    { name: 'CI/CD Automation', issuer: 'AWS EC2 Deployment', year: '2024' },
    { name: 'Web Application Delivery', issuer: 'Internship Experience', year: '2023' },
  ]

  const awards = [
    { name: 'ERP Delivery Milestone', issuer: 'Hybritech Innovation Ltd', year: '2024' },
    { name: 'Internship Completion', issuer: 'Simec System Ltd', year: '2023' },
    { name: 'Academic Progress', issuer: 'Presidency University', year: 'Ongoing' },
  ]

  const community = [
    { name: 'Languages', detail: 'English, Bangla' },
    { name: 'Availability', detail: 'Open to full-time or contract roles' },
    { name: 'Location', detail: 'Dhaka, Bangladesh' },
  ]

  return (
    <section className="section" id="education" aria-labelledby="edu-title">
      <div className="container">
        <p className="section-eyebrow">Education</p>
        <h2 id="edu-title" className="section-title gradient-title">Education and credentials</h2>

        <div className="credential-grid" style={{ marginTop: '2.5rem' }}>
          <div className="timeline-section glass-panel">
            <h3>Academic Timeline</h3>
            <div className="timeline">
              {education.map((it) => (
                <div key={it.school} className="timeline-item">
                  <span className="dot" />
                  <h4>{it.degree}</h4>
                  <p className="muted">{it.school}</p>
                  <p className="muted" style={{ color: 'var(--primary-glow)' }}>{it.period}</p>
                  <ul className="credential-meta">
                    {it.meta.map((meta) => (
                      <li key={meta}>{meta}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="credential-stack">
            {[
              { title: 'Highlights', items: certifications },
              { title: 'Achievements', items: awards },
              { title: 'Profile', items: community.map((c) => ({ name: c.name, issuer: c.detail, year: '' })) },
            ].map((group) => (
              <div key={group.title} className="credential-card glass-panel">
                <h3>{group.title}</h3>
                <ul className="credential-list">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.issuer} {item.year ? `- ${item.year}` : ''}</span>
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
