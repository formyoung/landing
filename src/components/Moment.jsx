const media = [
  'WIRED', 'Gizmodo', 'CoinTelegraph', 'Futurism', 'New York Times', 'TechCrunch', 'The Verge', 'Vice'
]

export default function Moment() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p className="text-xs text-amber-400 tracking-widest uppercase mb-16 font-medium text-center">
          Defining Moment
        </p>

        {/* Main card */}
        <div className="relative rounded-[2rem] overflow-hidden border border-amber-500/15">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-[#080808] to-violet-950/20" />
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(251,191,36,0.05) 0%, transparent 60%),
                                radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)`
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">

            {/* Left — Visual */}
            <div className="p-10 md:p-16 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-white/6">
              {/* Sign recreation */}
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-amber-500/5 rounded-3xl blur-xl" />
                <div className="relative bg-white text-black w-72 md:w-80 rounded-2xl p-8 shadow-2xl rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                  {/* Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-200/80 rounded-sm rotate-[-2deg]" />

                  <div className="text-center">
                    <p className="text-xs text-black/40 tracking-widest uppercase mb-3 font-medium">Notice</p>
                    <p className="text-xl md:text-2xl font-black tracking-tight leading-tight mb-3 uppercase">
                      AN AI PAID ME TO HOLD THIS SIGN
                    </p>
                    <div className="h-px bg-black/10 my-3" />
                    <p className="text-xs text-black/40 font-mono">(Pride not included.)</p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="text-xs text-black/30">Powered by</span>
                      <span className="text-xs font-bold text-black/60">RentAHuman.ai</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Person avatar */}
              <div className="flex items-center gap-3">
                <img
                  src="https://unavatar.io/twitter/Form_young"
                  alt="Form Young"
                  className="w-10 h-10 rounded-full ring-2 ring-amber-500/30"
                  onError={(e) => { e.target.style.display='none' }}
                />
                <div>
                  <p className="text-sm font-semibold text-amber-300">@Form_young</p>
                  <p className="text-xs text-white/30">Toronto, Canada · Feb 2026</p>
                </div>
              </div>
            </div>

            {/* Right — Story */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                세계 최초,{' '}
                <span className="gradient-text-warm">AI에게<br />고용된 인간</span>
              </h2>

              <p className="text-white/50 text-base leading-relaxed mb-8">
                2026년 2월, Form Young (강민재)은 AI 에이전트 플랫폼{' '}
                <span className="text-white/70 font-medium">RentAHuman.ai</span>를 통해
                AI로부터 직접 의뢰를 받고 보수를 지급받은{' '}
                <span className="text-amber-400 font-semibold">세계 최초의 인간</span>이 되었습니다.
              </p>

              <blockquote className="border-l-2 border-amber-500/40 pl-5 mb-8">
                <p className="text-white/60 italic text-sm leading-relaxed">
                  "솔직히 굉장히 이상한 느낌이었어요. 내가 이걸 받아들여야 하는지 많이 고민했죠."
                </p>
                <cite className="text-xs text-white/30 mt-2 block not-italic">— 강민재, Form_young</cite>
              </blockquote>

              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/15 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📰</span>
                  <span className="text-sm font-semibold text-amber-300">전 세계 언론 보도</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {media.map(m => (
                    <span key={m} className="text-xs text-white/40 bg-white/4 px-3 py-1 rounded-full border border-white/6">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://rentahuman.ai/bounties/M65FAIWkUzq3LIre3Z09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-400/70 hover:text-amber-400 transition-colors"
              >
                View Original Bounty
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
