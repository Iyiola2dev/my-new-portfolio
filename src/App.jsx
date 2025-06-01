import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    // console.log(`Theme changed to ${theme === 'light' ? 'dark' : 'light'}`)
  }

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen flex flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          {/* <SocialLinks /> */}
          <Contact />
        </main>
        <Footer />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </AnimatePresence>
  )
}

export default App