const chain = [
  { lead: 'Simplicity', tail: ' creates clarity.' },
  { lead: 'Clarity', tail: ' creates confidence.' },
  { lead: 'Confidence', tail: ' creates consistency.' },
  { lead: 'Consistency', tail: ' creates results.' },
]

export default function Philosophy() {
  return (
    <section className="bg-base section-pad">
      <div className="wrap-narrow">
        <p className="eyebrow mb-14 md:mb-20">The philosophy</p>

        <div className="space-y-3 md:space-y-5">
          {chain.map(({ lead, tail }, i) => (
            <p
              key={lead}
              className="font-serif text-ash text-balance"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                opacity: 1 - i * 0.13,
              }}
            >
              <span className="text-gold">{lead}</span>
              {tail}
            </p>
          ))}
        </div>

        <p
          className="text-ash/35 font-sans mt-16 md:mt-20 max-w-md leading-relaxed"
          style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}
        >
          Simplicity is not a cosmetic feature. It is the first mechanism of real,
          lasting progress.
        </p>
      </div>
    </section>
  )
}
