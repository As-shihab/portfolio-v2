import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-photo-inner">
            <div className="about-photo-img" />
          </div>
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="section-eyebrow">About</p>
          <h2 id="about-title" className="section-title">Product-minded engineer</h2>
          <p>
            I partner with founders and design teams to ship digital products that feel intentional. My process blends systems thinking,
            tasteful motion, and solid engineering so experiences stay delightful from hero sections to complex dashboards.
          </p>
          <p>
            From crafting reactive micro-frontends to tuning backend APIs, I enjoy owning the stack while keeping storytelling at the center.
            Currently open for collaborations, contract work, and ambitious long-term roles.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


