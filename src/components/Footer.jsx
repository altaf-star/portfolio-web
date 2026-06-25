import Container from './ui/Container'
import Logo from './ui/Logo'
import { brand, navLinks } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 border-t border-[color:var(--line)] bg-[color:var(--surface-2)]">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-10 sm:mb-12">
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-5">
              <Logo variant="mark" className="h-10 w-auto" />
              <span className="font-display text-lg font-extrabold tracking-tight text-[color:var(--ink)]">
                AA Dev <span className="text-[color:var(--emerald)]">Studio</span>
              </span>
            </a>
            <p className="text-sm sm:text-[15px] text-[color:var(--ink-soft)] leading-relaxed max-w-sm">
              We build modern websites and web applications that grow your business. Available for new projects worldwide.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-[color:var(--ink)] text-sm mb-4 tracking-wide">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--emerald)] transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold text-[color:var(--ink)] text-sm mb-4 tracking-wide">Get in touch</h4>
            <p className="text-sm text-[color:var(--ink-soft)] mb-1.5 break-all">
              <a href={`mailto:${brand.email}`} className="hover:text-[color:var(--emerald)] transition-colors">
                {brand.email}
              </a>
            </p>
            <p className="text-sm text-[color:var(--ink-soft)]">{brand.whatsapp}</p>
          </div>
        </div>

        <div className="pt-6 border-t border-[color:var(--line)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-[color:var(--ink-muted)]">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-[color:var(--ink-muted)]">Crafted with care &amp; clean code.</p>
        </div>
      </Container>
    </footer>
  )
}
