import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Experience', 'Skills', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
          FY
        </span>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
