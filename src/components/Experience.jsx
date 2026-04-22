const experiences = [
  {
    period: '2023 — 2025',
    company: 'The Sandbox',
    role: 'Web3 Community Builder',
    description:
      'Metaverse 생태계를 직접 구축하고 크리에이터 IP 파트너십을 통한 인큐베이션 프로그램 운영. 글로벌 커뮤니티 성장 전략 수립 및 실행.',
    tags: ['Metaverse', 'NFT', 'Community', 'GameFi'],
    color: 'from-violet-500/20 to-blue-500/20',
    dot: 'bg-violet-400',
  },
  {
    period: '2025 — Present',
    company: 'Independent',
    role: 'Web3.0 Community Builder & HumanValidator',
    description:
      '오프라인 GameFi 커뮤니티 운영 및 Proof of Existence 검증 활동. AI 에이전트와의 협업 실험을 통해 인간-AI 상호작용의 새로운 가능성 탐구.',
    tags: ['AI × Human', 'GameFi', 'Crypto', 'Community'],
    color: 'from-emerald-500/20 to-teal-500/20',
    dot: 'bg-emerald-400',
  },
  {
    period: '2026. 02',
    company: 'RentAHuman.ai',
    role: 'World\'s First AI-Hired Human',
    description:
      'AI 에이전트로부터 직접 의뢰를 받아 토론토 도심에서 "AN AI PAID ME TO HOLD THIS SIGN" 푯말을 들고 서는 작업을 수행. 전 세계 미디어에서 주목받는 역사적 순간.',
    tags: ['Historic First', 'AI Agent', 'RentAHuman', 'Viral'],
    color: 'from-amber-500/20 to-orange-500/20',
    dot: 'bg-amber-400',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-violet-400 tracking-widest uppercase mb-4 font-medium">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          Career & <span className="gradient-text">Milestones</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className={`relative p-8 rounded-2xl border border-white/8 bg-gradient-to-br ${exp.color} hover:border-white/15 transition-all duration-300 group`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-36 shrink-0">
                  <span className="text-xs text-white/35 tracking-wide font-mono">{exp.period}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`w-2 h-2 rounded-full ${exp.dot} shrink-0`} />
                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4 ml-5">{exp.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/50 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
