export default function About() {
  const stats = [
    { value: '2+', label: 'Years at The Sandbox' },
    { value: '🥇', label: 'First Human Hired by AI' },
    { value: '🇰🇷', label: 'Korean in Toronto' },
    { value: 'Web3', label: 'Community Builder' },
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-xs text-violet-400 tracking-widest uppercase mb-4 font-medium">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Building bridges between{' '}
              <span className="gradient-text">humans & technology</span>
            </h2>
            <div className="space-y-5 text-white/55 text-base leading-relaxed">
              <p>
                한국에서 태어나 캐나다 토론토를 베이스로 활동 중인 Form Young (강민재)은
                Web3, 메타버스, GameFi 생태계의 커뮤니티를 설계하고 성장시키는 빌더입니다.
              </p>
              <p>
                The Sandbox에서 2년간 근무하며 수많은 크리에이터 IP 파트너십과 함께
                메타버스 생태계를 직접 구축했습니다. NFT, 크립토, 메타버스의 교차점에서
                실제 사람들을 연결하는 일에 집중합니다.
              </p>
              <p>
                2026년 초, AI 에이전트에게 직접 고용된 세계 최초의 인간으로 화제가 되었습니다.
                RentAHuman.ai 를 통해 AI가 의뢰한 작업을 수행하며 인간-AI 협업의 새로운 장을 열었습니다.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all duration-300"
              >
                <div className="text-3xl font-black mb-2 gradient-text">{stat.value}</div>
                <div className="text-sm text-white/45 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
