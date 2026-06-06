const bets = [
  {
    n: '01',
    belief: 'The real barrier to gym consistency is clarity, not motivation.',
    detail: 'People are not lazy. They are under-taught. Fix the clarity gap and the consistency gap follows.',
  },
  {
    n: '02',
    belief: 'Teaching creates confidence that tracking will never match.',
    detail: "Streaks and dashboards don't make people feel capable. Understanding why something works does.",
  },
  {
    n: '03',
    belief: 'Simplicity is not a beginner feature. It is the foundation of everything.',
    detail: 'Every person who stays consistent long-term does so because they have simplified. We teach that first.',
  },
  {
    n: '04',
    belief: 'The right builder has lived this, not just studied it.',
    detail: "Jeremy speaks gym fluently and still remembers what confusion felt like. That combination is rare.",
  },
]

const validations = [
  {
    q: 'Does the message land?',
    detail: '"The gym failed to teach you simply" — does it resonate, or does it feel like an excuse?',
  },
  {
    q: 'Will people tell us what they struggle with?',
    detail: 'The struggle survey turns interest into product direction. Every response shapes the MVP.',
  },
  {
    q: "Does Jeremy's positioning feel credible?",
    detail: '"Gym translator" — approachable, not intimidating. Does it build trust with the target person?',
  },
]

export default function TheBet() {
  return (
    <section className="bg-base section-pad">
      <div className="wrap">

        {/* What we believe */}
        <div className="mb-20 md:mb-28">
          <p className="eyebrow mb-10">What we believe</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {bets.map(({ n, belief, detail }) => (
              <div key={n} className="bg-base p-8 md:p-10">
                <p className="eyebrow mb-6">{n}</p>
                <p
                  className="font-serif text-ash mb-5 text-balance"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.2, letterSpacing: '-0.015em' }}
                >
                  {belief}
                </p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#D8D4CE' }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The business */}
        <div className="mb-20 md:mb-28 border border-gold/25 bg-gold/4 p-8 md:p-12">
          <p className="eyebrow mb-6">The business</p>
          <h3
            className="font-serif text-ash mb-8 text-balance max-w-[30ch]"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            People already pay for gym memberships they don't use. They'll pay more for one that works.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                model: 'Simple Start Program',
                price: '$49 – $97',
                note: 'One-time purchase. Less than a single PT session. Structured curriculum for the first 4–8 weeks.',
              },
              {
                model: 'Monthly Subscription',
                price: '$10 – $15 / mo',
                note: 'Ongoing access to plans, content updates, and the coaching layer as it develops.',
              },
              {
                model: 'Cohort Coaching',
                price: '$199 – $499',
                note: 'Phase 3 and beyond. Group-based accountability with Jeremy. Higher margin, limited seats.',
              },
            ].map(({ model, price, note }) => (
              <div key={model} className="border border-border p-6">
                <p className="eyebrow mb-3">{model}</p>
                <p
                  className="font-serif text-gold mb-3"
                  style={{ fontSize: '1.35rem', letterSpacing: '-0.02em' }}
                >
                  {price}
                </p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#D8D4CE' }}>
                  {note}
                </p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm mt-8 leading-relaxed" style={{ color: '#7A7470' }}>
            Monetisation follows the teaching — Phase 2 builds the product loop, Phase 3 builds
            the content, Phase 4 introduces payment. No paywall until the value is proven.
          </p>
        </div>

        {/* What Phase 1 validates */}
        <div>
          <div className="mb-10 md:mb-12">
            <p className="eyebrow mb-4">What Phase 1 proves</p>
            <p
              className="font-serif text-ash text-balance max-w-[32ch]"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Three questions the landing page is designed to answer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {validations.map(({ q, detail }) => (
              <div key={q} className="border border-border p-7 md:p-8">
                <p
                  className="font-serif text-gold mb-4"
                  style={{ fontSize: '1.2rem', letterSpacing: '-0.01em' }}
                >
                  {q}
                </p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#D8D4CE' }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-ash/8">
            <p
              className="font-serif text-balance max-w-[55ch]"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', lineHeight: 1.5, letterSpacing: '-0.01em', color: 'rgba(240,237,232,0.35)' }}
            >
              "Most people were not lazy. They were under-taught. Groundwork is the
              instruction manual they should have had from the start."
            </p>
            <p className="eyebrow mt-4" style={{ color: 'rgba(240,237,232,0.2)' }}>
              Jeremy — Founder, Groundwork
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
