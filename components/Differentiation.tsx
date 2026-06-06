const existing = [
  {
    name: 'The gym alone',
    gets: 'Equipment access',
    misses:
      'Zero instruction. You walk in and figure it out — or you don\'t. Most don\'t.',
  },
  {
    name: 'A personal trainer',
    gets: 'Works, when it works',
    misses:
      '$60–150 per session. Creates dependency, not independence. Most people can\'t sustain it.',
  },
  {
    name: 'YouTube & TikTok',
    gets: 'Infinite free content',
    misses:
      'No coherence, no progression, no structure. Mostly created for people who already know what they\'re doing.',
  },
  {
    name: 'Fitness apps',
    gets: 'Structure and tracking',
    misses:
      'Complexity before confidence. Calorie counters and macro trackers built for people who are already motivated.',
  },
]

export default function Differentiation() {
  return (
    <section className="bg-base section-pad">
      <div className="wrap">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-6">The landscape</p>
          <h2
            className="font-serif text-ash text-balance max-w-[28ch]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Every existing option misses the same thing.
          </h2>
        </div>

        {/* Competitor grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5">
          {existing.map(({ name, gets, misses }) => (
            <div key={name} className="border border-border p-7 md:p-8">
              <p
                className="font-serif text-ash mb-5"
                style={{ fontSize: '1.2rem', letterSpacing: '-0.01em' }}
              >
                {name}
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-gold mt-0.5 flex-shrink-0 text-xs">✓</span>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#D8D4CE' }}>
                    {gets}
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: '#6B6560' }}>✗</span>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#7A7470' }}>
                    {misses}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Groundwork — highlighted */}
        <div className="border border-gold/35 bg-gold/5 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
            <div className="flex-shrink-0">
              <p className="eyebrow mb-1">The alternative</p>
              <p
                className="font-serif text-ash"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', letterSpacing: '-0.015em' }}
              >
                Groundwork
              </p>
            </div>
            <div className="flex-1 space-y-3">
              {[
                'Teaches the gym like a life skill — not a transformation challenge.',
                'Simple workouts with clear explanations of what each thing does and why.',
                'Food guidance that supports the work without becoming a second obsession.',
                'A repeatable weekly system built for normal, messy, real life.',
                'A restart plan built into the core product — not bolted on as an afterthought.',
              ].map((point) => (
                <div key={point} className="flex gap-3 items-start">
                  <span className="text-gold flex-shrink-0 mt-0.5 text-xs">→</span>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#D8D4CE' }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
