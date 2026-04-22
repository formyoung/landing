const stats = [
  { value: '2+', label: 'Years at The Sandbox', icon: '🏗️' },
  { value: '#1', label: 'First AI-Hired Human', icon: '🤖' },
  { value: '🌐', label: 'Web3 Ecosystem Builder', icon: null },
  { value: '🇰🇷', label: 'Korean in Toronto', icon: null },
]

const highlights = [
  { icon: '🧱', title: 'Metaverse Architecture', desc: 'The Sandbox에서 직접 메타버스 생태계를 설계하고 IP 파트너십을 통한 크리에이터 인큐베이션 운영' },
  { icon: '🤝', title: 'Community Strategy', desc: 'Crypto, NFT, GameFi 커뮤니티를 글로벌 규모로 성장시키는 전략 수립 및 실행' },
  { icon: '⚡', title: 'Offline GameFi', desc: '온라인-오프라인을 연결하는 GameFi 이벤트 기획 및 운영. 실물 세계와 블록체인의 교차점' },
  { icon: '🦅', title: 'Human × AI Pioneer', desc: 'AI 에이전트에게 고용된 최초의 인간으로 기록. 인간과 AI의 새로운 협업 가능성을 직접 증명' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-xs text-violet-400 tracking-widest uppercase mb-3 font-medium">About</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Bridging Humans<br />
              <span className="gradient-text">& Technology</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed md:text-right">
            한국에서 캐나다 토론토로 — Web3 생태계의 최전선에서 커뮤니티와 기술을 연결하는 빌더
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">

          {/* Big intro card */}
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
                <p className="text-sm text-white/40">@Form_young · @75minjae</p>
              </div>
            </div>
            <div className="space-y-4 text-white/55 text-base leading-relaxed">
              <p>
                Web3, 메타버스, GameFi 생태계를 설계하고 성장시키는 커뮤니티 빌더입니다.
                The Sandbox에서 2년간 근무하며 수많은 크리에이터 IP 파트너십과 함께
                메타버스 생태계를 직접 구축했습니다.
              </p>
              <p>
                NFT, 크립토, 메타버스의 교차점에서 실제 사람들을 연결하는 일에 집중하며,
                오프라인 GameFi 커뮤니티 운영을 통해 온-오프라인을 잇는 새로운 경험을 만들어갑니다.
              </p>
            </div>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-3xl border border-white/6 bg-white/2 card-hover flex flex-col justify-between">
                <div className="text-3xl font-black gradient-text mb-2">{s.value}</div>
                <div className="text-xs text-white/40 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights grid */}
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
