import Container from './ui/Container'
import { brand, navLinks } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-slate-200/70 dark:border-white/5 bg-slate-50/40 dark:bg-white/[0.015]">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="AA Dev Studio" className="h-9 w-auto" />
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              We build modern websites and web applications that grow your
              business. Available for new projects worldwide.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-4">
              Get in touch
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              <a href={`mailto:${brand.email}`} className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">
                {brand.email}
              </a>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {brand.whatsapp}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/70 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Crafted with care &amp; clean code.
          </p>
        </div>
      </Container>
    </footer>
  )
}
