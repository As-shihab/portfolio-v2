import { useEffect } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Gallery } from './components/Gallery'
import { TechStack } from './components/TechStack'
import { Blogs } from './components/Blogs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { NeonCursor } from './components/NeonCursor'
import { ScrollProgress } from './components/ScrollProgress'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="app dark">
      <ScrollProgress />
      <NeonCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <motion.div id="experience" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
          <Experience />
        </motion.div>
        <motion.div id="education" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Education />
        </motion.div>
        <motion.div id="projects" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Projects />
        </motion.div>
        <motion.div id="gallery" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Gallery />
        </motion.div>
        <motion.div id="tech" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}>
          <TechStack />
        </motion.div>
        <motion.div id="blogs" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Blogs />
        </motion.div>
        <motion.div id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Contact />
        </motion.div>
      </main>
        <Footer />
    </div>
  )
}


