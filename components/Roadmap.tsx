const phases = [
  {
    phase: 'Phase 1',
    name: 'Land',
    status: 'Live now',
    done: true,
    items: [
      'Launch the concept landing page',
      'Validate core message with target audience',
      'Collect emails and struggle survey data',
      'Share with Jeremy\'s network',
    ],
    outcome: 'Does "the gym failed to teach you simply" resonate with real people?',
  },
  {
    phase: 'Phase 2',
    name: 'Teach',
    status: 'Next',
    done: false,
    items: [
      '4-question onboarding flow',
      'Rule-based weekly plan generator',
      'Simple Fuel food guidance',
      'Reset Rule — built into the core loop',
      'Weekly checklist with local persistence',
    ],
    outcome: 'Will users follow a simple system and return the following week?',
  },
  {
    phase: 'Phase 3',
    name: 'Scale',
    status: 'Q4 2026',
    done: false,
    items: [
      'Jeremy\'s short-form video curriculum',
      'Exercise explainers with "why this works" notes',
      '14-day Simple Start Challenge',
      'Email / SMS consistency reminders',
      'Cohort waitlist',
    ],
    outcome: 'Does content deepen confidence and increase retention?',
  },
  {
    phase: 'Phase 4',
    name: 'Platform',
    status: '2027',
    done: false,
    items: [
      'Paid Simple Start Plan',
      'Cohort-based coaching sessions',
      'Progress history and habit data',
      'Community (introduced carefully)',
      'Partnership and affiliate programs',
    ],
    outcome: 'Is this a sustainable fitness education business?',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-surface section-pad">
      <div className="wrap">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-6">The roadmap</p>
          <h2
            className="font-serif text-ash text-balance max-w-[24ch]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Four phases. One clear direction.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {phases.map(({ phase, name, status, done, items, outcome }) => (
            <div
              key={phase}
              className={`border p-7 md:p-8 flex flex-col gap-6 relative ${
                done ? 'border-gold/40 bg-gold/5' : 'border-border bg-base'
              }`}
            >
              {/* Status badge */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow mb-1">{phase}</p>
                  <h3
                    className="font-serif text-ash"
                    style={{ fontSize: '1.35rem', letterSpacing: '-0.015em' }}
                  >
                    {name}
                  </h3>
                </div>
                <span
                  className={`font-sans text-xs px-2.5 py-1 flex-shrink-0 mt-0.5 ${
                    done
                      ? 'bg-gold/15 text-gold border border-gold/30'
                      : 'bg-ash/5 text-ash/40 border border-ash/10'
                  }`}
                >
                  {status}
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className={`mt-[5px] w-1 h-1 rounded-full flex-shrink-0 ${done ? 'bg-gold' : 'bg-ash/25'}`} />
                    <p className="text-ash/80 font-sans text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              {/* Outcome question */}
              <div className={`mt-auto pt-5 border-t ${done ? 'border-gold/20' : 'border-ash/8'}`}>
                <p className="eyebrow text-ash/30 mb-2">This phase proves</p>
                <p className="text-ash/55 font-sans text-xs leading-relaxed italic">{outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
