import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const points = [
  'Designed and engineered in-house — no outsourcing.',
  'Direct communication with the people building your project.',
  'Long-term partnership, not a one-off contractor.',
  'Modern stack, clean code, and full ownership of your codebase.',
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-44 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent" />
                  <div>
                    <div className="h-2 w-16 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <div className="h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700 mt-1" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="h-2 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.3 }}
                className="absolute bottom-0 right-0 w-52 glass rounded-2xl p-5 shadow-xl"
              >
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Conversions</div>
                <div className="font-display text-2xl font-bold gradient-text mb-3">
                  +247%
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 60, 35, 80, 55, 95, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-accent"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Center orb */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="absolute inset-12 rounded-full border border-dashed border-brand-500/30 dark:border-brand-400/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                className="absolute inset-20 rounded-full border border-dashed border-accent/30"
              />
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-accent shadow-2xl shadow-brand-500/40" />
            </div>
          </motion.div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A small team obsessed with shipping great work"
              subtitle="At AA Dev Studio, we create digital solutions for businesses worldwide. We&rsquo;re a tight-knit team of designers and developers — small enough to care, experienced enough to deliver."
            />
            <ul className="space-y-3.5">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300 flex items-center justify-center shrink-0">
                    <FiCheck size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
