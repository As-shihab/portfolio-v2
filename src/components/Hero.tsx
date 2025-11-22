import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa'
import { SiPrisma } from 'react-icons/si'

const stackIcons = [
  { icon: FaReact, label: 'React', top: '18%', left: '14%', driftX: 10, driftY: -8 },
  { icon: FaNodeJs, label: 'Node.js', top: '60%', left: '20%', driftX: -12, driftY: 10 },
  { icon: SiPrisma, label: 'Prisma', top: '40%', left: '70%', driftX: 14, driftY: -6 },
  { icon: FaLaravel, label: 'Laravel', top: '72%', left: '62%', driftX: -8, driftY: 12 },
]

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yStars = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const yGlow = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const yFloaters = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const scaleContent = useTransform(scrollYProgress, [0, 1], [1, 0.96])
  const opacityContent = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  const stackTransforms = stackIcons.map((icon) => ({
    x: useTransform(scrollYProgress, [0, 1], ['0px', `${icon.driftX}px`]),
    y: useTransform(scrollYProgress, [0, 1], ['0px', `${icon.driftY}px`]),
  }))

  return (
    <section id="home" className="section hero" ref={ref}>
      <motion.div className="stars" style={{ y: yStars }} />
      <motion.div className="hero-bg" style={{ y: yGlow }}>
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="grid-overlay" />
      </motion.div>
      <motion.div className="floaters" style={{ y: yFloaters }}>
        <motion.span className="floater f1" animate={{ y: [0, -12, 0], rotate: [0, 6, -4, 0] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} />
        <motion.span className="floater f2" animate={{ y: [0, 10, 0], rotate: [0, -8, 6, 0] }} transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }} />
        <motion.span className="floater f3" animate={{ y: [0, -8, 0], rotate: [0, 4, -6, 0] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }} />
      </motion.div>
      <div className="hero-stack">
        {stackIcons.map(({ icon: Icon, label, top, left }, index) => (
          <motion.span
            key={label}
            className="hero-stack-icon"
            style={{ top, left, x: stackTransforms[index].x, y: stackTransforms[index].y }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6 + index, ease: 'easeInOut', delay: index * 0.2 }}
          >
            <Icon />
            <small>{label}</small>
          </motion.span>
        ))}
      </div>

      <motion.div className="container hero-content" style={{ y: yContent, scale: scaleContent, opacity: opacityContent }}>
        <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Full-stack software developer
        </motion.p>
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Hi, I&apos;m <span>As-Shihab</span>
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
          I build cinematic digital products with seamless motion, scalable code, and purposeful storytelling across the stack.
        </motion.p>
        <motion.div className="cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn ghost">Contact Me</a>
        </motion.div>
      </motion.div>
    </section>
  )
}


