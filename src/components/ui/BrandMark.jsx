import { useEffect, useState } from 'react'

const SRC = '/logo.jpg'
const THRESHOLD = 235
const CACHE_KEY = `brandmark-transparent-v1-${THRESHOLD}`

export default function BrandMark({ className = '', alt = 'AA Dev Studio' }) {
  const [src, setSrc] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY)
    if (cached) {
      setSrc(cached)
      return
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = SRC
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
          const min = Math.min(data[i], data[i + 1], data[i + 2])
          if (min >= THRESHOLD) {
            data[i + 3] = 0
          } else if (min > THRESHOLD - 20) {
            const falloff = (min - (THRESHOLD - 20)) / 20
            data[i + 3] = Math.round(data[i + 3] * (1 - falloff))
          }
        }
        ctx.putImageData(imageData, 0, 0)
        const url = canvas.toDataURL('image/png')
        try { sessionStorage.setItem(CACHE_KEY, url) } catch {}
        setSrc(url)
      } catch {
        setFailed(true)
      }
    }
    img.onerror = () => setFailed(true)
  }, [])

  if (failed) return <img src={SRC} alt={alt} className={className} draggable="false" />
  if (!src) return <span className={className} aria-label={alt} />
  return <img src={src} alt={alt} className={className} draggable="false" />
}
