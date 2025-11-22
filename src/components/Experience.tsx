export function Experience() {
  const roles = [
    {
      company: 'Nebula Studio',
      title: 'Lead Frontend Engineer',
      period: '2023 — Present',
      bullets: [
        'Shaped the design system that powers every product surface',
        'Built cinematic launch pages using React, Vite, and Framer Motion',
        'Partnered with product to ship experiments that lifted activation by 18%',
      ],
    },
    {
      company: 'Independent',
      title: 'Senior Product Engineer',
      period: '2020 — 2023',
      bullets: [
        'Delivered premium marketing and customer portals for SaaS founders',
        'Obsessed over performance budgets and Core Web Vitals',
        'Mentored teams through TypeScript, testing, and accessibility upgrades',
      ],
    },
    {
      company: 'PixelSmith Agency',
      title: 'UI Engineer',
      period: '2018 — 2020',
      bullets: [
        'Rapid prototyping for VC pitches and immersive brand stories',
        'Created interactive data visualisations for enterprise pitches',
        'Introduced a component library that cut delivery time in half',
      ],
    },
  ]

  return (
    <section className="section" aria-labelledby="exp-title">
      <div className="container">
        <h2 id="exp-title" className="section-title">Experience</h2>
        <div className="cards">
          {roles.map((r) => (
            <article key={r.company} className="card">
              <h3>{r.title}</h3>
              <p className="muted">{r.company} • {r.period}</p>
              <ul>
                {r.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


