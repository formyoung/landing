export default function Moment() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-white/10 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0a0a0a] to-blue-900/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            {/* Quote mark */}
            <div className="text-8xl text-violet-500/20 font-serif leading-none mb-6 select-none">"</div>

            {/* Sign text */}
            <div className="inline-block mb-10 px-6 py-4 border-2 border-white/20 bg-white/5 rounded-xl">
              <p className="text-lg md:text-xl font-bold text-white tracking-wider uppercase font-mono">
                AN AI PAID ME TO HOLD THIS SIGN
              </p>
              <p className="text-xs text-white/40 mt-1 font-mono">(Pride not included.)</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              세계 최초, AI에게 고용된 <span className="gradient-text">인간</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed mb-8">
              2026년 2월, Form Young은 AI 에이전트 플랫폼 RentAHuman.ai를 통해
              AI로부터 직접 의뢰를 받고 보수를 지급받은 세계 최초의 인간이 되었습니다.
              토론토 도심에 서서 푯말을 든 이 순간은 전 세계 미디어와 커뮤니티의 주목을 받았으며,
              인간과 AI의 새로운 협업 패러다임을 상징하는 역사적 사건이 되었습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-white/40">
              <span>WIRED</span>
              <span className="text-white/20">·</span>
              <span>Gizmodo</span>
              <span className="text-white/20">·</span>
              <span>CoinTelegraph</span>
              <span className="text-white/20">·</span>
              <span>Futurism</span>
              <span className="text-white/20">·</span>
              <span>NYT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
