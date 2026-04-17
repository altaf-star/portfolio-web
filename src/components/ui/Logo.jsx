import { useEffect, useRef, useState } from 'react'

// Loads /logo.png, renders it to a canvas, and sets any near-white pixels to alpha 0.
// Result is returned as a transparent data URL so the logo sits cleanly on any background.
export default function Logo({ className = '', alt = 'AA Dev Studio', threshold = 235 }) {
  const [src, setSrc] = useState(null)
  const [failed, setFailed] = useState(false)
  const cacheKey = useRef(`logo-transparent-v1-${threshold}`)

  useEffect(() => {
    const cached = sessionStorage.getItem(cacheKey.current)
    if (cached) {
      setSrc(cached)
      return
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = '/logo.png'
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          // Near-white → transparent. Soft falloff near the threshold to preserve edges.
          const min = Math.min(r, g, b)
          if (min >= threshold) {
            data[i + 3] = 0
          } else if (min > threshold - 20) {
            const falloff = (min - (threshold - 20)) / 20
            data[i + 3] = Math.round(data[i + 3] * (1 - falloff))
          }
        }
        ctx.putImageData(imageData, 0, 0)
        const url = canvas.toDataURL('image/png')
        sessionStorage.setItem(cacheKey.current, url)
        setSrc(url)
      } catch (err) {
        setFailed(true)
      }
    }
    img.onerror = () => setFailed(true)
  }, [threshold])

  if (failed) {
    return <img src="/logo.png" alt={alt} className={className} />
  }
  if (!src) {
    return <span className={className} aria-label={alt} />
  }
  return <img src={src} alt={alt} className={className} />
}
