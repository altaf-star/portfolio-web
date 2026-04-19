import Container from './ui/Container'
import BrandMark from './ui/BrandMark'
import { brand, navLinks } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-white/5 bg-white/[0.015]">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-10 sm:mb-12">
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3 mb-5">
              <BrandMark className="h-14 w-14 drop-shadow-[0_2px_12px_rgba(199,36,101,0.35)]" />
              <span className="font-display text-lg font-bold tracking-tight text-white">
                AA DEV <span className="text-[color:var(--teal-soft)] font-medium">Studio</span>
              </span>
            </a>
            <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-sm">
              We build modern websites and web applications that grow your
              business. Available for new projects worldwide.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-[color:var(--teal-soft)] transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">
              Get in touch
            </h4>
            <p className="text-sm text-slate-400 mb-1.5 break-all">
              <a href={`mailto:${brand.email}`} className="hover:text-[color:var(--teal-soft)] transition-colors">
                {brand.email}
              </a>
            </p>
            <p className="text-sm text-slate-400">
              {brand.whatsapp}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Crafted with care &amp; clean code.
          </p>
        </div>
      </Container>
    </footer>
  )
}
