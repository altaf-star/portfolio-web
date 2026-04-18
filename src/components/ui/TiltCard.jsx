import { motion } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  )
}
