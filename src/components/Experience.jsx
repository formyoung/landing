const experiences = [
  {
    period: 'Dec 2025 — Present',
    company: 'World Liberty Financial',
    badge: 'unofficial',
    role: 'KR Community Lead',
    location: 'South Korea',
    bullets: [
      'WLFI 생태계의 한국 시장 진출을 위해 독립적인 고임팩트 로컬 커뮤니티를 제로베이스에서 구축',
      '1차 WLFI KR 커뮤니티 밋업 기획 — 50인 정원에 450+ 지원, 글로벌 코어 리드(Frank 포함) 참석',
      '라이브 이벤트에서 35+ 실제 마이크로 결제($USD1) 진행하여 초기 리테일 사용성 검증',
    ],
    tags: ['DeFi', 'WLFI', 'Community Lead', 'KR Market', '$USD1'],
    accent: 'border-l-emerald-500',
    dot: 'bg-emerald-400',
    glow: 'bg-emerald-500/5',
    logo: '🏦',
    current: true,
  },
  {
    period: 'Nov 2023 — Present',
    company: 'Human Validator',
    role: 'Co-Founder',
    location: 'South Korea · Canada (Remote)',
    bullets: [
      'O2O(Offline-to-Online) 인간 검증 프레임워크 구축 — 35,000+ 인터랙션, 17,000+ 오가닉 팔로워 (광고비 0원)',
      '게임화 액티베이션, 시빅 캠페인 등 다양한 인게이지먼트 모델을 단일 데이터 레이어로 통합',
      '150+ 고강도 오프라인 액티베이션을 직접 진행하여 Web3 디지털 자산과 피지컬 커뮤니티를 연결',
    ],
    tags: ['O2O', 'Human Verification', 'Web3', 'Community', 'Offline Activation'],
    accent: 'border-l-blue-500',
    dot: 'bg-blue-400',
    glow: 'bg-blue-500/5',
    logo: '🤝',
    current: true,
  },
  {
    period: 'Jan 2025 — Jun 2025',
    company: 'LUMEDOT',
    role: 'Head of Growth',
    location: 'Canada (Remote)',
    bullets: [
      'Solana 기반 스타트업의 GTM 전략 및 브랜드 아이덴티티를 프리런치 단계부터 수립하고 확장 가능한 마케팅 프레임워크 구축',
      '고성능 콘텐츠 프로덕션 파이프라인을 구축하여 오가닉 유저 획득과 핵심 파트너십 지표 향상 견인',
    ],
    tags: ['Solana', 'GTM Strategy', 'Growth', 'Content', 'Web3 Startup'],
    accent: 'border-l-cyan-500',
    dot: 'bg-cyan-400',
    glow: 'bg-cyan-500/5',
    logo: '💡',
    current: false,
  },
  {
    period: 'Jan 2022 — Dec 2023',
    company: 'The Sandbox',
    role: 'Ecosystem Incubation Manager',
    location: 'South Korea (Hybrid)',
    bullets: [
      'Global Game Jam ($300K 상금풀) 총괄 — 200+ 플레이어블 게임 소싱, Ragnarok·Pororo·Smurf IP 잼 기록적 참여 달성',
      '30+ 공식 파트너 스튜디오 인큐베이팅 — SM Ent, CJ ENM, Netmarble, 롯데월드, Gravity와 전략적 파트너십 주도',
      '서울게임아카데미(SGA)·SBS 게임 아카데미와 공식 메타버스 커리큘럼 수립, 1,000+ 크리에이터 양성',
      '오프라인 NFT 전시회 — Top-tier VC 및 업계 리더 100+ 참석 프리미엄 이벤트 기획 및 진행',
    ],
    tags: ['Metaverse', 'NFT', 'Game Jam', 'IP Partnership', 'SM Ent', 'Netmarble', '$300K', '1,000+ Creators'],
    accent: 'border-l-violet-500',
    dot: 'bg-violet-400',
    glow: 'bg-violet-500/5',
    logo: '🟦',
    current: false,
  },
  {
    period: 'Dec 2018 — Dec 2021',
    company: 'NBK Pharmacy',
    role: 'Quality Assurance',
    location: 'South Korea',
    bullets: [
      '시장 조사 및 전략적 운영 제안서 개발',
    ],
    tags: ['Market Research', 'Operations'],
    accent: 'border-l-white/20',
    dot: 'bg-white/30',
    glow: 'bg-white/2',
    logo: '💊',
    current: false,
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
          <div className="absolute top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/30 via-violet-500/20 to-white/5 hidden md:block" style={{ left: '27px' }} />

          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={exp.company + exp.period} className="relative md:pl-20">
                <div
                  className={`absolute top-8 w-4 h-4 rounded-full ${exp.dot} ring-4 ring-[#080808] hidden md:block z-10`}
                  style={{ left: '20px' }}
                />

                <div className={`p-8 md:p-10 rounded-3xl border border-white/6 ${exp.glow} hover:border-white/12 transition-all duration-300 border-l-2 ${exp.accent} card-hover`}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="text-3xl shrink-0">{exp.logo}</div>

                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold">{exp.company}</h3>
                        {exp.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-white/30 font-mono">{exp.badge}</span>
                        )}
                        {exp.current && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-sm text-white/50">{exp.role}</span>
                        <span className="text-white/15">·</span>
                        <span className="text-xs text-white/30 font-mono">{exp.location}</span>
                        <span className="text-white/15">·</span>
                        <span className="text-xs text-white/25 font-mono">{exp.period}</span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-5">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-white/45 leading-relaxed">
                            <span className="text-white/20 mt-1.5 shrink-0">—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
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

        {/* Education */}
        <div className="mt-16 p-8 rounded-3xl border border-white/6 bg-white/2">
          <p className="text-xs text-violet-400 tracking-widest uppercase mb-6 font-medium">Education</p>
          <div className="flex items-center gap-5">
            <div className="text-3xl">🎓</div>
            <div>
              <h3 className="text-base font-bold mb-1">경희대학교 (Kyung Hee University)</h3>
              <p className="text-sm text-white/40">학사 (Bachelor's Degree) · Mar 2018 — Aug 2022 · Seoul, South Korea</p>
              <div className="flex gap-2 mt-3">
                <span className="tag">Korean Native</span>
                <span className="tag">English Fluent</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
