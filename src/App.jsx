import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Moment from './components/Moment'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Moment />
      <Skills />
      <Gallery />
      <Contact />
    </div>
  )
}
