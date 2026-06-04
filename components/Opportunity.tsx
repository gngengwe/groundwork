const stats = [
  { n: '67%', label: 'of gym memberships go largely unused each month' },
  { n: '<5mo', label: 'average time before a new gym member quietly stops going' },
  { n: '$30B+', label: 'spent annually on fitness — mostly by people already active' },
  { n: '0', label: 'category leaders built specifically around gym literacy' },
]

export default function Opportunity() {
  return (
    <section id="opportunity" className="bg-surface-hi section-pad">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-8">The opportunity</p>
            <h2
              className="font-serif text-ash text-balance mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
            >
              The gap nobody is filling.
            </h2>
            <div
              className="space-y-5 text-ash/90 font-sans leading-[1.75]"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.075rem)' }}
            >
              <p>
                The fitness market is enormous. Almost all of it targets people who are already
                motivated, already active, or already know what they're doing.
              </p>
              <p>
                The underserved market is everyone who joins a gym, feels overwhelmed, and quietly
                stops going. Nobody talks about them. Nobody builds for them.
              </p>
              <p>
                Fitness culture sells transformation, intensity, and optimization.{' '}
                <span className="text-ash font-medium">Nobody is selling comprehension.</span>
              </p>
              <p className="text-ash font-medium">That's the gap Groundwork fills.</p>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-3 md:gap-4">
            {stats.map(({ n, label }) => (
              <div key={n} className="bg-base border border-border p-6 md:p-8">
                <p
                  className="font-serif text-gold mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '-0.035em' }}
                >
                  {n}
                </p>
                <p className="text-ash/65 font-sans text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
