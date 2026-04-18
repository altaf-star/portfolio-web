import { motion } from 'framer-motion'
import Container from '../ui/Container'
import TiltCard from '../ui/TiltCard'

const capabilities = [
  {
    n: '01',
    title: 'Cinematic Landing Pages',
    desc: 'Scroll choreography, premium visual hierarchy, and strong CTA architecture.',
  },
  {
    n: '02',
    title: 'Conversion-Focused Websites',
    desc: 'Fast, SEO-aware builds that turn product positioning into qualified pipeline.',
  },
  {
    n: '03',
    title: 'Web App Product Interfaces',
    desc: 'High-trust dashboards and SaaS flows with polished UI and scalable architecture.',
  },
]

export default function Capabilities() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 lg:py-44">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-slate-400 font-medium mb-4">
            Capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5">
            Built with the precision of a product team.
          </h2>
          <p className="text-[15px] sm:text-lg text-slate-400 leading-relaxed">
            Strategy, design, and engineering move together so the final experience
            looks iconic and performs like a sales system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TiltCard className="h-full rounded-xl">
                <div className="group relative h-full rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.035] hover:border-cyan-300/20 px-8 py-9 sm:px-10 sm:py-11 transition-colors">
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none"
                    aria-hidden
                  />
                  <div className="relative z-10">
                    <p className="text-xs tracking-widest text-slate-500 font-mono mb-5">
                      {c.n}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-3">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
