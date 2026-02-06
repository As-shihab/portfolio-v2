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
      period: 'Passing Year: 2021',
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
    { name: 'Full Stack Web Apps', issuer: 'Internship Experience', year: '2023' },
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
        <h2 id="edu-title" className="section-title">Education and credentials</h2>
        <div className="credential-grid">
          <div className="timeline">
            {education.map((it) => (
              <div key={it.school} className="timeline-item">
                <div className="dot" />
                <div className="content">
                  <h3>{it.degree}</h3>
                  <p className="muted">{it.school} - {it.period}</p>
                  <ul className="credential-meta">
                    {it.meta.map((meta) => (
                      <li key={meta}>{meta}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="credential-stack">
            <div className="credential-card">
              <h3>Highlights</h3>
              <ul className="credential-list">
                {certifications.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.issuer} - {item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="credential-card">
              <h3>Achievements</h3>
              <ul className="credential-list">
                {awards.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.issuer} - {item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="credential-card">
              <h3>Profile</h3>
              <ul className="credential-list">
                {community.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
