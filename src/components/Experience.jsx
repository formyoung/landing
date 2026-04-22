const experiences = [
  {
    period: '2023 — 2025',
    company: 'The Sandbox',
    role: 'Web3 Community Builder',
    description: 'Metaverse 생태계를 직접 구축하고 크리에이터 IP 파트너십을 통한 인큐베이션 프로그램 운영. 글로벌 커뮤니티 성장 전략 수립 및 실행. 수십 개의 브랜드/크리에이터와 협업하여 버추얼 랜드 및 게임 경험을 제작.',
    tags: ['Metaverse', 'NFT', 'IP Partnership', 'Community', 'GameFi', 'SAND'],
    accent: 'border-l-violet-500',
    dot: 'bg-violet-400',
    glow: 'bg-violet-500/5',
    logo: '🟦',
  },
  {
    period: '2022 — 2023',
    company: 'Independent',
    role: 'Web3.0 Community Builder · Offline GameFi',
    description: '한국 및 글로벌 Web3 커뮤니티 운영. 오프라인 GameFi 이벤트 기획 및 진행. Crypto, NFT 프로젝트 커뮤니티 Ambassador 역할. Proof of Existence HumanValidator로 활동.',
    tags: ['Community', 'Crypto', 'Offline Events', 'Ambassador', 'HumanValidator'],
    accent: 'border-l-blue-500',
    dot: 'bg-blue-400',
    glow: 'bg-blue-500/5',
    logo: '🌐',
  },
  {
    period: '2026. 02',
    company: 'RentAHuman.ai',
    role: "World's First AI-Hired Human",
    description: 'AI 에이전트로부터 직접 의뢰를 받아 토론토 도심에서 "AN AI PAID ME TO HOLD THIS SIGN" 푯말을 들고 서는 작업을 수행. WIRED, Gizmodo, CoinTelegraph, Futurism 등 전 세계 주요 미디어에서 보도. 인간-AI 협업의 새 역사를 쓴 순간.',
    tags: ['Historic First', 'AI Agent', 'Viral', 'Media Coverage', 'Human × AI'],
    accent: 'border-l-amber-500',
    dot: 'bg-amber-400',
    glow: 'bg-amber-500/5',
    logo: '🤖',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <p className="text-xs text-violet-400 tracking-widest uppercase mb-3 font-medium">Experience</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Career &<br /><span className="gradient-text">Milestones</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-violet-500/30 via-blue-500/20 to-amber-500/20 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative md:pl-20 card-hover">
                {/* Timeline dot */}
                <div className={`absolute left-5.5 top-8 w-5 h-5 rounded-full ${exp.dot} ring-4 ring-[#080808] hidden md:flex items-center justify-center text-[10px] z-10`}
                  style={{ left: '26px' }}>
                </div>

                <div className={`p-8 md:p-10 rounded-3xl border border-white/6 ${exp.glow} hover:border-white/12 transition-all duration-300 border-l-2 ${exp.accent}`}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">

                    {/* Logo */}
                    <div className="text-4xl shrink-0">{exp.logo}</div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <span className="text-xs font-mono text-white/30 tracking-wider">{exp.period}</span>
                      </div>
                      <p className="text-sm text-white/50 mb-4">{exp.role}</p>
                      <p className="text-sm text-white/45 leading-relaxed mb-6">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
