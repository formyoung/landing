const socials = [
  {
    name: 'X (Twitter)',
    handle: '@Form_young',
    desc: '일상, Web3, AI 인사이트',
    url: 'https://x.com/Form_young',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.736-8.859L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'hover:border-white/25 hover:bg-white/6',
    accent: 'text-white',
  },
  {
    name: 'Instagram',
    handle: '@75minjae',
    desc: '사진, 일상, 커뮤니티 현장',
    url: 'https://www.instagram.com/75minjae/',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: 'hover:border-pink-500/25 hover:bg-pink-500/5',
    accent: 'text-pink-300',
  },
  {
    name: 'Email',
    handle: 'honldo77@gmail.com',
    desc: '협업, 파트너십 문의',
    url: 'mailto:honldo77@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    color: 'hover:border-violet-500/25 hover:bg-violet-500/5',
    accent: 'text-violet-300',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* CTA Banner */}
        <div className="relative rounded-[2rem] overflow-hidden border border-white/8 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-[#080808] to-blue-900/15" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            <p className="text-xs text-violet-400 tracking-widest uppercase mb-5 font-medium">Get in Touch</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              Let's Build<br />
              <span className="gradient-text">Something Together</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-base leading-relaxed mb-10">
              Web3 커뮤니티, 메타버스 프로젝트, GameFi, 또는 AI×Human 협업에 관심 있다면 언제든지 연락 주세요.
            </p>
            <a
              href="mailto:honldo77@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              연락하기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-6 rounded-2xl border border-white/8 bg-white/2 transition-all duration-200 group ${s.color}`}
            >
              <div className={`${s.accent} opacity-60 group-hover:opacity-100 transition-opacity`}>
                {s.icon}
              </div>
              <div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">{s.name}</div>
                <div className={`text-sm font-semibold ${s.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  {s.handle}
                </div>
                <div className="text-xs text-white/30 mt-0.5">{s.desc}</div>
              </div>
              <svg className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <div className="flex items-center gap-3">
            <img
              src="https://unavatar.io/twitter/Form_young"
              alt=""
              className="w-5 h-5 rounded-full opacity-50"
              onError={(e) => { e.target.style.display='none' }}
            />
            <span>© 2026 Form Young · 강민재</span>
          </div>
          <span>Toronto, Canada 🇨🇦 · Web3 Builder · Pioneer</span>
        </div>

      </div>
    </section>
  )
}
