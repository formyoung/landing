const skillGroups = [
  {
    category: 'Web3 & Blockchain',
    skills: ['Crypto', 'NFT', 'DeFi', 'Smart Contracts', 'Tokenomics', 'GameFi'],
    color: 'text-violet-400',
    border: 'border-violet-400/20',
    bg: 'bg-violet-400/5',
  },
  {
    category: 'Metaverse',
    skills: ['The Sandbox', 'Virtual Worlds', 'Avatar Economy', 'IP Partnerships', 'Ecosystem Building'],
    color: 'text-blue-400',
    border: 'border-blue-400/20',
    bg: 'bg-blue-400/5',
  },
  {
    category: 'Community',
    skills: ['Community Strategy', 'Offline Events', 'Growth Hacking', 'Ambassador Programs', 'DAO Governance'],
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/5',
  },
  {
    category: 'AI × Human',
    skills: ['Proof of Existence', 'HumanValidator', 'AI Collaboration', 'Agentic Systems', 'Human-in-the-loop'],
    color: 'text-amber-400',
    border: 'border-amber-400/20',
    bg: 'bg-amber-400/5',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-violet-400 tracking-widest uppercase mb-4 font-medium">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          Areas of <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`p-8 rounded-2xl border ${group.border} ${group.bg} hover:border-white/15 transition-all duration-300`}
            >
              <h3 className={`text-sm font-semibold tracking-widest uppercase mb-5 ${group.color}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-sm text-white/65 border border-white/8 bg-white/4 hover:text-white/90 hover:bg-white/8 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
