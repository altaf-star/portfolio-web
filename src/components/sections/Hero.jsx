import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'

const stats = [
  { v: '50+', l: 'Projects shipped' },
  { v: '247%', l: 'Avg. conversion lift' },
  { v: '2–4 wks', l: 'Typical launch' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* one soft, subtle wash */}
      <div className="blob w-[40rem] h-[30rem] bg-[color:var(--mint)]/12 -top-32 left-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="eyebrow mb-7">Web design &amp; development studio</span>

          <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl md:leading-[1.03] font-bold tracking-[-0.03em] text-[color:var(--ink)] max-w-3xl">
            Websites that feel <span className="gradient-text">iconic</span>.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[color:var(--ink-soft)] leading-relaxed max-w-xl">
            Design, engineering, and motion — delivered by one tight team.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="#contact" variant="primary" size="lg">
              Start your project <FiArrowRight />
            </Button>
            <Button href="#work" variant="white" size="lg">
              See our work <FiArrowUpRight />
            </Button>
          </div>
        </motion.div>

        {/* stats — quiet, single row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-20 sm:mt-24 flex flex-wrap justify-center gap-x-14 gap-y-8 sm:gap-x-20"
        >
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-[color:var(--ink)] mb-1.5">{s.v}</div>
              <div className="text-sm text-[color:var(--ink-muted)]">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
