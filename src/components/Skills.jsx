const groups = [
  {
    icon: '⛓️',
    category: 'Web3 & Blockchain',
    color: 'text-violet-400',
    border: 'border-violet-500/15',
    glow: 'bg-violet-500/3',
    skills: [
      { name: 'Crypto', level: 95 },
      { name: 'NFT', level: 92 },
      { name: 'DeFi', level: 80 },
      { name: 'Tokenomics', level: 85 },
      { name: 'GameFi', level: 90 },
      { name: 'DAO', level: 75 },
    ],
  },
  {
    icon: '🌐',
    category: 'Metaverse',
    color: 'text-blue-400',
    border: 'border-blue-500/15',
    glow: 'bg-blue-500/3',
    skills: [
      { name: 'The Sandbox', level: 98 },
      { name: 'Virtual Worlds', level: 90 },
      { name: 'IP Partnerships', level: 92 },
      { name: 'Avatar Economy', level: 85 },
      { name: 'Land Development', level: 88 },
    ],
  },
  {
    icon: '🤝',
    category: 'Community',
    color: 'text-emerald-400',
    border: 'border-emerald-500/15',
    glow: 'bg-emerald-500/3',
    skills: [
      { name: 'Growth Strategy', level: 94 },
      { name: 'Ambassador Programs', level: 90 },
      { name: 'Offline Events', level: 88 },
      { name: 'Discord/Telegram', level: 95 },
      { name: 'Content Creation', level: 80 },
    ],
  },
  {
    icon: '🤖',
    category: 'AI × Human',
    color: 'text-amber-400',
    border: 'border-amber-500/15',
    glow: 'bg-amber-500/3',
    skills: [
      { name: 'Proof of Existence', level: 100 },
      { name: 'HumanValidator', level: 95 },
      { name: 'AI Collaboration', level: 88 },
      { name: 'Agentic Systems', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <p className="text-xs text-violet-400 tracking-widest uppercase mb-3 font-medium">Skills</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Areas of<br /><span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.category} className={`p-8 rounded-3xl border ${g.border} ${g.glow} hover:border-white/12 transition-all duration-300 card-hover`}>
              <div className="flex items-center gap-3 mb-7">
                <span className="text-2xl">{g.icon}</span>
                <h3 className={`text-sm font-bold tracking-widest uppercase ${g.color}`}>{g.category}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-white/65">{skill.name}</span>
                      <span className="text-xs text-white/25 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/6 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${
                          g.color === 'text-violet-400' ? 'from-violet-600 to-violet-400' :
                          g.color === 'text-blue-400' ? 'from-blue-600 to-blue-400' :
                          g.color === 'text-emerald-400' ? 'from-emerald-600 to-emerald-400' :
                          'from-amber-600 to-amber-400'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
