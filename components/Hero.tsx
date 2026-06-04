export default function Hero() {
  return (
    <section className="min-h-svh bg-base flex flex-col items-center justify-center px-6 py-32 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(200,169,110,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[860px] mx-auto">
        <p className="eyebrow text-gold mb-10 md:mb-14">Concept overview · Groundwork</p>

        <h1
          className="font-serif text-ash text-balance mb-8 md:mb-10"
          style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          The gym should come with instructions.
        </h1>

        <p
          className="text-ash/80 font-sans text-balance mb-12 md:mb-14 max-w-[600px] mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
        >
          Groundwork is a simplicity-first fitness system for people who want to stop
          guessing, build confidence, and finally stay consistent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#opportunity"
            className="inline-block bg-gold text-base px-9 py-4 font-sans font-medium text-sm tracking-wide hover:bg-gold/85 transition-colors duration-200"
          >
            See the concept ↓
          </a>
          <a
            href="#roadmap"
            className="inline-block border border-ash/20 text-ash/65 px-9 py-4 font-sans font-medium text-sm tracking-wide hover:border-ash/40 hover:text-ash transition-colors duration-200"
          >
            View the roadmap ↓
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-14 bg-gradient-to-b from-ash/20 to-transparent" />
      </div>
    </section>
  )
}
