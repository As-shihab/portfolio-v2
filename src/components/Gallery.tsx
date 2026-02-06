const galleryItems = [
  {
    title: 'ERP Operations Console',
    location: 'Hybritech Innovation Ltd',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tags: ['ERP', 'Microservices'],
  },
  {
    title: 'Electron Desktop Suite',
    location: 'Enterprise tooling',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80',
    tags: ['Electron', 'Angular'],
  },
  {
    title: 'Angular Admin Workspace',
    location: 'Tailwind UI',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80',
    tags: ['Angular', 'Tailwind'],
  },
  {
    title: 'OData Service Layer',
    location: 'Custom microservices',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Node.js', 'OData v4'],
  },
  {
    title: 'Secure Auth Flow',
    location: 'Simec System Ltd',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Auth'],
  },
  {
    title: 'Product Management',
    location: 'Relational modules',
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80',
    tags: ['REST', 'Prisma'],
  },
]

export function Gallery() {
  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <p className="section-eyebrow">Visual archive</p>
        <h2 id="gallery-title" className="section-title gradient-title">Representative system snapshots</h2>
        <p className="section-lede">Representative visuals inspired by the systems and workflows I helped deliver.</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-item glass-card">
            <img src={item.image} alt={item.title} loading="lazy" className="gallery-image" />
            <div className="gallery-overlay">
              <div>
                <p className="gallery-location">{item.location}</p>
                <h3>{item.title}</h3>
              </div>
              <div className="gallery-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="gallery-title">
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
