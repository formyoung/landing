export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Web3 Community Builder · Toronto
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
          <span className="block text-white">Form</span>
          <span className="block gradient-text">Young</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/40 font-light mb-4 tracking-wide">
          강민재 · Minjae Kang
        </p>

        <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          Bridging humans and AI — one block, one token, one community at a time.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-200"
          >
            Learn More
          </a>
          <a
            href="https://x.com/Form_young"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold tracking-wide hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.736-8.859L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @Form_young
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
        </div>
      </div>
    </section>
  )
}
