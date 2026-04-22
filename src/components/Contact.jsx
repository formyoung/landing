const socials = [
  {
    name: 'X (Twitter)',
    handle: '@Form_young',
    url: 'https://x.com/Form_young',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.736-8.859L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'hover:text-white hover:border-white/30',
  },
  {
    name: 'Email',
    handle: 'honldo77@gmail.com',
    url: 'mailto:honldo77@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    color: 'hover:text-violet-300 hover:border-violet-400/30',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-violet-400 tracking-widest uppercase mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-base leading-relaxed">
            Web3, 메타버스, 커뮤니티 빌딩, 또는 AI×Human 협업에 관심 있으시다면 언제든지 연락 주세요.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/3 text-white/50 transition-all duration-200 ${s.color}`}
            >
              {s.icon}
              <div>
                <div className="text-xs text-white/30 mb-0.5">{s.name}</div>
                <div className="text-sm font-medium">{s.handle}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <span>© 2026 Form Young · Minjae Kang</span>
          <span className="flex items-center gap-1">
            Built with <span className="text-white/30 mx-1">React</span> & passion for Web3
          </span>
        </div>
      </div>
    </section>
  )
}
