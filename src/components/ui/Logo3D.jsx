import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import BrandMark from './BrandMark'

export default function Logo3D({ className = '', tilt = 16 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tilt, -tilt]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tilt, tilt]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    if (!ref.current) return
    if (window.matchMedia('(hover: none)').matches) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformPerspective: 800 }}
      className="inline-flex items-center gap-2.5"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <BrandMark className={className} />
      </motion.div>
      <span className="hidden sm:flex flex-col leading-none">
        <span className="font-display text-[15px] md:text-base font-bold tracking-wide text-white">
          AA DEV
        </span>
        <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[color:var(--teal-soft)]">
          Studio
        </span>
      </span>
    </motion.div>
  )
}
