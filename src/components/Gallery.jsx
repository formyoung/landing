const posts = [
  {
    id: 1,
    type: 'image',
    caption: 'AI paid me to hold this sign 🤖',
    likes: '2.4K',
    time: '2026. 02',
    emoji: '📸',
    bg: 'from-amber-900/30 to-orange-900/20',
    border: 'border-amber-500/15',
  },
  {
    id: 2,
    type: 'image',
    caption: 'The Sandbox 메타버스 이벤트 현장 🏗️',
    likes: '1.1K',
    time: '2024. 08',
    emoji: '🌐',
    bg: 'from-violet-900/30 to-blue-900/20',
    border: 'border-violet-500/15',
  },
  {
    id: 3,
    type: 'image',
    caption: 'Web3 커뮤니티 오프라인 미팅 🤝',
    likes: '834',
    time: '2024. 11',
    emoji: '⚡',
    bg: 'from-blue-900/30 to-cyan-900/20',
    border: 'border-blue-500/15',
  },
  {
    id: 4,
    type: 'image',
    caption: 'GameFi 오프라인 토너먼트 🎮',
    likes: '621',
    time: '2025. 03',
    emoji: '🎮',
    bg: 'from-emerald-900/30 to-teal-900/20',
    border: 'border-emerald-500/15',
  },
  {
    id: 5,
    type: 'image',
    caption: 'NFT 컬렉션 론칭 파티 🎉',
    likes: '977',
    time: '2023. 12',
    emoji: '🎨',
    bg: 'from-pink-900/30 to-rose-900/20',
    border: 'border-pink-500/15',
  },
  {
    id: 6,
    type: 'image',
    caption: 'Toronto skyline — new chapter 🇨🇦',
    likes: '1.8K',
    time: '2023. 06',
    emoji: '🌆',
    bg: 'from-slate-800/40 to-zinc-900/20',
    border: 'border-white/8',
  },
]

export default function Gallery() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs text-violet-400 tracking-widest uppercase mb-3 font-medium">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Moments & <span className="gradient-text">Stories</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/75minjae/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
            @75minjae
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <a
              key={post.id}
              href="https://www.instagram.com/75minjae/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl border ${post.border} bg-gradient-to-br ${post.bg} overflow-hidden card-hover ${
                i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '1 / 2' : '1 / 1' }}
            >
              {/* Background texture */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-8xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {post.emoji}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Top: Instagram icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs text-white/80 font-medium leading-snug mb-1">{post.caption}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/40">❤️ {post.likes}</span>
                  <span className="text-[10px] text-white/30">{post.time}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/75minjae/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/3 text-sm text-white/50 hover:text-white hover:border-white/20 hover:bg-white/6 transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
            Instagram에서 더 보기 @75minjae
          </a>
        </div>

      </div>
    </section>
  )
}
