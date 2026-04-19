import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Accordion from '../ui/Accordion'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most marketing sites ship in 2–4 weeks. Web apps run 6–12 weeks depending on scope. We set clear weekly milestones from day one.',
  },
  {
    q: 'What does a project cost?',
    a: 'Websites start at $2k, web apps at $6k. We scope every project after a 30-min discovery call so the price reflects what you actually need.',
  },
  {
    q: 'Do you work with clients outside your timezone?',
    a: 'Yes — we ship for teams worldwide. Async-first workflow with two weekly live checkpoints keeps things moving regardless of timezone.',
  },
  {
    q: 'Who owns the code and design files?',
    a: 'You do. We hand over the Git repo, Figma files, deployment access, and documentation at launch. No vendor lock-in, ever.',
  },
  {
    q: 'Can you take over an existing project?',
    a: 'Absolutely. We audit the existing codebase first, then propose a path forward — whether that\'s incremental improvements or a clean rebuild.',
  },
]

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{ paddingTop: '2.4rem', paddingBottom: '2.4rem' }}
      className="relative"
    >
      <Container>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[color:var(--teal-soft)] font-semibold mb-4">
              Questions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
              Good to know.
            </h2>
            <p className="text-[15px] text-slate-300/80 leading-relaxed max-w-sm">
              Can&rsquo;t find what you&rsquo;re looking for? Drop us a line — we reply within a few hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] px-7 py-6 sm:px-9 sm:py-8"
          >
            <Accordion items={faqs} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
