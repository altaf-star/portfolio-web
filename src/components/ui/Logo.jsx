// Static, pre-processed transparent logo assets (no runtime canvas work).
//   variant="mark" -> symbol only (navbar, favicon, compact spots)
//   variant="full" -> full lockup with wordmark (hero, footer)
const SOURCES = {
  mark: '/logo-mark.png',
  full: '/logo-full.png',
}

export default function Logo({ variant = 'mark', className = '', alt = 'AA Dev Studio' }) {
  return (
    <img
      src={SOURCES[variant] ?? SOURCES.mark}
      alt={alt}
      className={className}
      draggable="false"
      loading="eager"
      decoding="async"
    />
  )
}
