import { motion } from 'framer-motion'

const galleryItems = [
  {
    title: 'Nebula Control Room',
    location: 'Product launch, 2024',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tags: ['Dashboard', 'Realtime'],
  },
  {
    title: 'Immersive Landing',
    location: 'Marketing site, 2023',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    tags: ['Hero', 'Story'],
  },
  {
    title: 'Mobile Portal',
    location: 'Fintech app, 2022',
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80',
    tags: ['Native', 'UX'],
  },
  {
    title: 'Insight Visuals',
    location: 'Data experience, 2024',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80',
    tags: ['Data viz'],
  },
  {
    title: 'Creator Toolkit',
    location: 'SaaS platform, 2021',
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1200&q=80',
    tags: ['Design system'],
  },
  {
    title: 'Audio Stories',
    location: 'Podcast hub, 2020',
    image: 'https://images.unsplash.com/photo-1485199692108-1c28c88b3a09?auto=format&fit=crop&w=1200&q=80',
    tags: ['Media', 'Motion'],
  },
]

export function Gallery() {
  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <p className="section-eyebrow">Gallery</p>
        <h2 id="gallery-title" className="section-title">Visual snapshots</h2>
        <p className="section-lede">Select UI moments that capture my love for cinematic surfaces, data visualisation, and premium polish.</p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <motion.article
            key={item.title}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="gallery-overlay">
              <div>
                <p className="muted">{item.location}</p>
                <h3>{item.title}</h3>
              </div>
              <div className="gallery-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}


