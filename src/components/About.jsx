const stats = [
  { value: '35K+', label: 'Human Validator 누적 인터랙션', icon: '🤝' },
  { value: '17K+', label: '오가닉 팔로워 (광고비 0원)', icon: '📈' },
  { value: '150+', label: '오프라인 액티베이션 진행', icon: '⚡' },
  { value: '30+', label: 'The Sandbox 파트너 스튜디오 인큐베이팅', icon: '🏗️' },
]

const highlights = [
  {
    icon: '🦅',
    title: 'World Liberty Financial',
    desc: 'WLFI 한국 커뮤니티 리드. 1차 밋업 450+ 지원자 → 50인 선발, 글로벌 코어 리드 참석',
  },
  {
    icon: '🧱',
    title: 'The Sandbox',
    desc: '$300K 규모 Global Game Jam 총괄. SM Ent, CJ ENM, Netmarble, 롯데월드 등 Tier-1 파트너십 주도',
  },
  {
    icon: '🌐',
    title: 'Human Validator',
    desc: 'O2O 인간 검증 프레임워크 공동 창업. 35K+ 인터랙션, 17K+ 팔로워를 광고비 없이 달성',
  },
  {
    icon: '🚀',
    title: 'LUMEDOT',
    desc: 'Solana 기반 스타트업의 GTM 전략과 브랜드 아이덴티티를 프리런치 단계부터 구축',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-xs text-violet-400 tracking-widest uppercase mb-3 font-medium">About</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Bridging Humans<br />
              <span className="gradient-text">& Technology</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed md:text-right">
            경희대학교 졸업 · 서울 기반 · Web3 생태계 최전선에서 커뮤니티와 기술을 연결하는 빌더
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 p-10 rounded-3xl border border-white/6 bg-gradient-to-br from-white/3 to-transparent card-hover">
            <div className="flex items-start gap-5 mb-8">
              <img
                src="https://unavatar.io/twitter/Form_young"
                alt="Form Young"
                className="w-16 h-16 rounded-2xl ring-1 ring-white/10 shrink-0"
                onError={(e) => {
                  e.target.outerHTML = `<div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,#1e1b4b,#0f172a);display:flex;align-items:center;justify-content:center;flex-shrink:0"><span style="font-size:24px;font-weight:900;background:linear-gradient(135deg,#c4b5fd,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent">FY</span></div>`
                }}
              />
              <div>
                <h3 className="text-xl font-bold mb-1">강민재 · Minjae Kang</h3>
                <p className="text-sm text-white/40">@Form_young · @75minjae · TG: @formyoung</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="tag">Seoul, Korea</span>
                  <span className="tag">경희대학교</span>
                  <span className="tag">KO / EN</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-white/55 text-base leading-relaxed">
              <p>
                Web3, 메타버스, GameFi 생태계의 커뮤니티를 설계하고 성장시키는 빌더입니다.
                The Sandbox에서 Ecosystem Incubation Manager로 근무하며 30개 이상의 파트너 스튜디오를 인큐베이팅하고,
                SM Ent, CJ ENM, Netmarble 등 국내 Tier-1 기업들과의 전략적 파트너십을 이끌었습니다.
              </p>
              <p>
                현재는 World Liberty Financial (WLFI) 한국 커뮤니티 리드로 활동하며,
                Human Validator 공동 창업자로서 오프라인-온라인을 연결하는 O2O 인간 검증 프레임워크를
                구축하고 있습니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-3xl border border-white/6 bg-white/2 card-hover">
                <div className="text-3xl font-black gradient-text mb-2">{s.value}</div>
                <div className="text-xs text-white/40 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="p-6 rounded-2xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-300 group">
              <div className="text-2xl mb-4">{h.icon}</div>
              <h4 className="text-sm font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{h.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
