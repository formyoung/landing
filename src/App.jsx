import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Moment from './components/Moment'
import Contact from './components/Contact'
import Nav from './components/Nav'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Moment />
      <Contact />
    </div>
  )
}
