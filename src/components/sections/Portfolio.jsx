import { motion } from 'framer-motion'
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'
import TiltCard from '../ui/TiltCard'

const sub = [
  {
    title: 'Design Language',
    desc: 'Intentional typography, cinematic spacing, and premium interactions on every breakpoint.',
  },
  {
    title: 'Performance Layer',
    desc: 'Fast rendering, clean code, and SEO-ready architecture for growth-focused teams.',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative py-28 sm:py-36 lg:py-44">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-slate-400 font-medium mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Projects we are proud to put our name on.
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-40 w-[380px] h-[380px] rounded-full bg-violet-500/10 blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
          <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-slate-400 font-medium mb-4">
            Featured Build
          </p>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-5 max-w-3xl">
            Mahi School Platform
          </h3>
          <p className="text-[15px] sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
            A complete school management experience with enrollment, reporting, and secure
            role-based access. Clean interface, reliable workflows, measurable outcomes.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href="https://mahischool.org"
              target="_blank"
              rel="noopener noreferrer"
              variant="glow"
              size="lg"
            >
              Open Live Project <FiExternalLink size={16} />
            </Button>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'Express', 'MongoDB', 'Tailwind'].map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          </div>
        </motion.article>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20">
          {sub.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TiltCard className="h-full rounded-xl">
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.035] hover:border-cyan-300/20 px-8 py-9 sm:px-10 sm:py-11 transition-colors">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-14 sm:mt-20">
          <Button href="#contact" variant="outline" className="text-white border-white/15 hover:bg-white/5 hover:border-white/30">
            Start your project <FiArrowUpRight />
          </Button>
        </div>
      </Container>
    </section>
  )
}
