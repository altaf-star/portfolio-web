import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import WhyUs from './components/sections/WhyUs'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onReady = () => {
      // small delay so the loader doesn't flash
      setTimeout(() => setLoading(false), 600)
    }
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
        <Services />
        <Portfolio />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
