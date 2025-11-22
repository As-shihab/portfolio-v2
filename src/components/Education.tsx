export function Education() {
  const items = [
    { school: 'North South University', degree: 'B.Sc. in Computer Science & Engineering', period: '2013 — 2017' },
    { school: 'Design & Motion Labs', degree: 'Advanced Interaction Design Residency', period: '2022' },
    { school: 'Continuous Learning', degree: 'Workshops on product leadership & accessibility', period: 'Ongoing' },
  ]

  return (
    <section className="section" aria-labelledby="edu-title">
      <div className="container">
        <h2 id="edu-title" className="section-title">Education & Qualifications</h2>
        <div className="timeline">
          {items.map((it) => (
            <div key={it.school} className="timeline-item">
              <div className="dot" />
              <div className="content">
                <h3>{it.degree}</h3>
                <p className="muted">{it.school} • {it.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


