import { motion } from 'framer-motion'
import Container from '../ui/Container'

export default function About() {
  return (
    <section
      id="about"
      style={{ paddingTop: '2.4rem', paddingBottom: '2.4rem' }}
      className="relative"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-dashed border-[color:var(--teal)]/25"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                className="absolute inset-20 rounded-full border border-dashed border-[color:var(--signature)]/30"
              />
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[linear-gradient(135deg,var(--teal),var(--signature))] shadow-[0_0_60px_-10px_rgba(199,36,101,0.6)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[color:var(--teal-soft)] font-semibold mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
              Small team. Big care.
            </h2>
            <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed max-w-lg">
              Direct communication with the people building your project. No hand-offs, no outsourcing.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
