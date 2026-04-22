import { useEffect, useRef } from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-violet-700/8 rounded-full blur-[120px] pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-700/8 rounded-full blur-[100px] pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-indigo-700/6 rounded-full blur-[80px] pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-white/8 bg-white/3 text-xs text-white/50 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
              Available for Collaboration
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block text-white">Form</span>
              <span className="block gradient-text">Young</span>
            </h1>

            {/* Korean name */}
            <p className="text-lg text-white/30 mb-5 font-light tracking-widest">
              강민재 · Minjae Kang
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/45 leading-relaxed mb-10 max-w-lg">
              Web3 커뮤니티 빌더 · 메타버스 생태계 설계자 ·
              <span className="text-amber-400/80"> AI에게 고용된 세계 최초의 인간</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {['WLFI KR Lead', 'The Sandbox Alumni', 'Human Validator', 'Web3', 'NFT', 'Seoul 🇰🇷'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#about"
                className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Explore
              </a>
              <a
                href="https://x.com/Form_young"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/4 text-white text-sm font-semibold tracking-wide hover:bg-white/8 hover:border-white/25 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.736-8.859L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow
              </a>
              <a
                href="https://www.instagram.com/75minjae/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/4 text-white text-sm font-semibold tracking-wide hover:bg-white/8 hover:border-white/25 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative float-anim">
              {/* Outer ring */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-white/8 spin-slow" />

              {/* Middle ring */}
              <div className="absolute -inset-3 rounded-full border border-white/5" />

              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-violet-500/60 blur-[2px]" />
              <div className="absolute -bottom-4 -left-3 w-3 h-3 rounded-full bg-blue-500/50 blur-[2px]" />
              <div className="absolute top-1/4 -right-8 w-2 h-2 rounded-full bg-emerald-400/60" />

              {/* Photo */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-1 ring-white/10">
                <img
                  src="https://unavatar.io/twitter/Form_young"
                  alt="Form Young"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                      <div style="width:100%;height:100%;background:linear-gradient(135deg,#1e1b4b,#0f172a);display:flex;align-items:center;justify-content:center;">
                        <span style="font-size:80px;font-weight:900;background:linear-gradient(135deg,#c4b5fd,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent">FY</span>
                      </div>
                    `
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/30 via-transparent to-transparent" />
              </div>

              {/* Floating card — Location */}
              <div className="absolute -left-8 top-1/4 bg-[#111]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">📍</span>
                  <div>
                    <div className="text-xs font-semibold text-white">Seoul</div>
                    <div className="text-[10px] text-white/40">Korea 🇰🇷</div>
                  </div>
                </div>
              </div>

              {/* Floating card — Role */}
              <div className="absolute -right-8 bottom-1/4 bg-[#111]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">🏗️</span>
                  <div>
                    <div className="text-xs font-semibold text-white">Web3 Builder</div>
                    <div className="text-[10px] text-white/40">Since 2022</div>
                  </div>
                </div>
              </div>

              {/* Floating card — AI Hired */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-amber-500/10 backdrop-blur-md border border-amber-500/20 rounded-2xl px-4 py-3 shadow-2xl whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">🤖</span>
                  <span className="text-xs text-amber-300 font-semibold">World's First AI-Hired Human</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
    </section>
  )
}
