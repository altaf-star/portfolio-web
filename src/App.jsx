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
    let done = false
    const finish = () => {
      if (done) return
      done = true
      setLoading(false)
    }
    const onLoad = () => setTimeout(finish, 450)
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad, { once: true })
    }
    // Guarantee the loader never traps the page (covers the load-race + slow assets)
    const fallback = setTimeout(finish, 2000)
    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(fallback)
    }
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
