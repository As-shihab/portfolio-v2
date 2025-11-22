import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const isTouchDevice = () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

export function NeonCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const cursorX = useSpring(x, { stiffness: 300, damping: 40 })
  const cursorY = useSpring(y, { stiffness: 300, damping: 40 })

  useEffect(() => {
    if (isTouchDevice()) return
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [x, y])

  if (isTouchDevice()) return null

  return (
    <>
      <motion.div className="neon-cursor core" style={{ translateX: cursorX, translateY: cursorY }} />
      <motion.div className="neon-cursor glow" style={{ translateX: cursorX, translateY: cursorY }} />
    </>
  )
}


