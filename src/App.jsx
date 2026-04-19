import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Capabilities from './components/sections/Capabilities'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import About from './components/sections/About'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import StickyCta from './components/ui/StickyCta'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onReady = () => setTimeout(() => setLoading(false), 600)
    if (document.readyState === 'complete') onReady()
    else window.addEventListener('load', onReady, { once: true })
    return () => window.removeEventListener('load', onReady)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <Portfolio />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
