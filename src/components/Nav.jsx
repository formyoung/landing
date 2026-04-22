import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#080808]/80 backdrop-blur-xl border-b border-white/5' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="https://unavatar.io/twitter/Form_young"
            alt="Form Young"
            className="w-8 h-8 rounded-full ring-1 ring-white/10 group-hover:ring-violet-500/50 transition-all duration-300"
            onError={(e) => { e.target.style.display='none' }}
          />
          <span className="text-sm font-semibold tracking-wide text-white/70 group-hover:text-white transition-colors">
            FormYoung
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-white/40 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://x.com/Form_young"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.736-8.859L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @Form_young
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
