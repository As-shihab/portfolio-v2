const skillGroups = [
  {
    title: 'Frontend development',
    description: 'Modern UI development with scalable component systems.',
    items: ['Angular', 'React.js', 'Tailwind CSS', 'Electron', 'Responsive UI'],
  },
  {
    title: 'Backend + APIs',
    description: 'Service architecture, data access, and API design.',
    items: ['Node.js', 'Express.js', 'Laravel', 'Prisma', 'OData v4', 'Microservices'],
  },
  {
    title: 'Data + infrastructure',
    description: 'Polyglot databases and deployment tooling.',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS EC2', 'CI/CD pipelines'],
  },
  {
    title: 'Tools + productivity',
    description: 'Everyday tools and work environment.',
    items: ['VS Code', 'Arduino IDE', 'Microsoft Office', 'Windows', 'Linux', 'Ubuntu Server', 'Mac OS'],
  },
]

export function TechStack() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="skills-parallax" aria-hidden="true">
        <span className="skill-orb orb-1" />
        <span className="skill-orb orb-2" />
        <span className="skill-orb orb-3" />
      </div>

      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2 id="skills-title" className="section-title">Technical skills and tools</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group glass-panel">
              <div className="skill-header">
                <h3 className="gradient-title">{group.title}</h3>
                <p className="muted">{group.description}</p>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
