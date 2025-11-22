import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa'
import { SiPrisma, SiMysql, SiMongodb, SiNestjs, SiTailwindcss } from 'react-icons/si'

const tech = [
  { label: 'React', icon: FaReact },
  { label: 'Node.js', icon: FaNodeJs },
  { label: 'Prisma', icon: SiPrisma },
  { label: 'MySQL', icon: SiMysql },
  { label: 'MongoDB', icon: SiMongodb },
  { label: 'NestJS', icon: SiNestjs },
  { label: 'Laravel', icon: FaLaravel },
  { label: 'Tailwind CSS', icon: SiTailwindcss },
]

const floaters = [
  { className: 'tech-orb orb-1', range: ['0%', '25%'] as [string, string] },
  { className: 'tech-orb orb-2', range: ['0%', '18%'] as [string, string] },
  { className: 'tech-orb orb-3', range: ['0%', '30%'] as [string, string] },
]

type TechItem = (typeof tech)[number]

function TechCard({ item }: { item: TechItem }) {
  const { icon: Icon, label } = item
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10
    const y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10
    setTilt({ x, y })
  }

  const reset = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      className="tech-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      <span className="tech-icon">
        <Icon />
      </span>
      <p>{label}</p>
    </motion.div>
  )
}

export function TechStack() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section className="section tech" id="tech" ref={ref}>
      <div className="tech-parallax">
        {floaters.map((orb) => {
          const y = useTransform(scrollYProgress, [0, 1], orb.range)
          return <motion.span key={orb.className} className={orb.className} style={{ y }} />
        })}
      </div>
      <div className="container">
        <p className="section-eyebrow">Toolbox</p>
        <h2 className="section-title">Tech stack I rely on</h2>
        <div className="tech-grid">
          {tech.map((item) => (
            <TechCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}


