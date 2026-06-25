import { motion } from 'framer-motion'
import { FiMessageSquare, FiZap, FiAward } from 'react-icons/fi'
import Container from '../ui/Container'
import Logo from '../ui/Logo'

const values = [
  { icon: FiMessageSquare, title: 'Direct communication', text: 'You talk to the people building your project — no hand-offs, no account managers, no outsourcing.' },
  { icon: FiZap, title: 'Fast, fixed timelines', text: 'Clear weekly milestones and demo links. Most sites ship in 2–4 weeks.' },
  { icon: FiAward, title: 'Built to last', text: 'Clean, documented code and a design system your team fully owns after launch.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[color:var(--surface-2)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative card p-10 sm:p-14">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-[color:var(--surface-2)] border border-[color:var(--line)] flex items-center justify-center mb-6">
                  <Logo variant="mark" className="h-14 w-auto" />
                </div>
                <p className="font-display text-2xl font-bold text-[color:var(--ink)] mb-1">AA Dev Studio</p>
                <p className="text-[color:var(--ink-muted)] text-sm mb-9">Web design &amp; development</p>
                <div className="grid grid-cols-3 gap-6 w-full max-w-xs">
                  {[['50+', 'Projects'], ['5★', 'Rated'], ['24/7', 'Support']].map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display text-2xl font-bold gradient-text">{v}</div>
                      <div className="text-[11px] text-[color:var(--ink-muted)] mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="eyebrow mb-5">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[color:var(--ink)] leading-[1.1] mt-4 mb-5">
              Small team. <span className="gradient-text">Big care.</span>
            </h2>
            <p className="text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed max-w-lg mb-9">
              We&rsquo;re a tight, senior team that treats your product like our own — from the first wireframe to launch day and beyond.
            </p>

            <ul className="space-y-5">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <li key={v.title} className="flex gap-4">
                    <div className="shrink-0 icon-tile w-11 h-11"><Icon size={19} /></div>
                    <div>
                      <h3 className="font-semibold text-[color:var(--ink)] mb-0.5">{v.title}</h3>
                      <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">{v.text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
