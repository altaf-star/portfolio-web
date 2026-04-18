import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

// Add new projects here — e.g. Mahi School. Each entry renders one card.
const projects = [
{
    title: 'Mahi School',
    category: 'School Management System',
    description:
      'A full-stack school management portal with student enrollment, graduation, withdrawal tracking, and CSV export — secured with JWT auth.',
    stack: ['React', 'Express', 'MongoDB', 'Tailwind'],
    gradient: 'from-cyan-400 via-blue-500 to-violet-600',
    accent: 'text-blue-300',
    live: 'https://mahischool.org',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 sm:py-24 lg:py-32 bg-slate-50/60 dark:bg-white/[0.015]">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Recent projects we're proud of"
          subtitle="A small selection from our recent client work — every project is designed and engineered with care."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500"
            >
              {/* Visual mock */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                {/* Floating browser mock */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="absolute inset-x-6 bottom-0 translate-y-6 rounded-t-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-2xl overflow-hidden border border-white/40"
                >
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200/60 dark:border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <div className="h-2 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <div className={`h-3 w-1/3 rounded-full bg-gradient-to-r ${p.gradient}`} />
                  </div>
                </motion.div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.live && (
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-11 h-11 rounded-full bg-white/95 text-slate-900 flex items-center justify-center hover:bg-white"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={18} />
                  </motion.a>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-medium tracking-widest uppercase text-brand-600 dark:text-brand-300 mb-1.5">
                  {p.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={p.live || '#'}
                  target={p.live ? '_blank' : undefined}
                  rel={p.live ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white group/link"
                >
                  Live Demo
                  <FiArrowUpRight className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button href="#contact" variant="outline">
            Start your project
            <FiArrowUpRight />
          </Button>
        </div>
      </Container>
    </section>
  )
}
