function PhoneFrame({ children, label, caption }: { children: React.ReactNode; label: string; caption: string }) {
  return (
    <div className="flex flex-col items-center flex-shrink-0">
      <div
        style={{
          width: '232px',
          background: '#0D0D0B',
          borderRadius: '38px',
          border: '1.5px solid rgba(240,237,232,0.1)',
          padding: '12px 10px',
          boxShadow: '0 48px 96px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.03)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <div style={{ width: '76px', height: '22px', background: '#000', borderRadius: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1a1a18' }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1a1a18' }} />
          </div>
        </div>
        <div style={{ background: '#161614', borderRadius: '26px', padding: '20px 16px 24px', minHeight: '460px' }}>
          {children}
        </div>
      </div>
      <p className="eyebrow mt-7 mb-2">{label}</p>
      <p className="text-ash/45 font-sans text-xs text-center leading-relaxed" style={{ maxWidth: '180px' }}>
        {caption}
      </p>
    </div>
  )
}

function OnboardingScreen() {
  const options = [
    { text: 'Never really started', active: false },
    { text: 'I go, but feel unsure', active: false },
    { text: 'I want to restart', active: true },
    { text: 'Getting consistent', active: false },
  ]
  return (
    <div>
      <p style={{ fontSize: '9px', color: '#C8A96E', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '16px' }}>Step 1 of 3</p>
      <p style={{ fontSize: '14px', color: '#F0EDE8', fontFamily: 'var(--font-serif)', letterSpacing: '-0.01em', lineHeight: 1.35, marginBottom: '18px' }}>
        How would you describe your gym experience right now?
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        {options.map(({ text, active }) => (
          <div key={text} style={{ padding: '10px 12px', border: `1px solid ${active ? 'rgba(200,169,110,0.55)' : 'rgba(240,237,232,0.1)'}`, borderRadius: '6px', background: active ? 'rgba(200,169,110,0.08)' : 'transparent' }}>
            <p style={{ fontSize: '11px', fontFamily: 'var(--font-sans)', color: active ? '#F0EDE8' : 'rgba(240,237,232,0.45)' }}>{text}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', background: '#C8A96E', padding: '12px', textAlign: 'center', borderRadius: '5px' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, color: '#0D0D0B', fontFamily: 'var(--font-sans)', letterSpacing: '0.08em' }}>CONTINUE →</p>
      </div>
    </div>
  )
}

function WeekScreen() {
  const days = [
    { day: 'MON', name: 'Push Day', done: true },
    { day: 'WED', name: 'Pull Day', done: true },
    { day: 'THU', name: 'Leg Day', done: false },
    { day: 'SAT', name: 'Walk 30m', done: false },
    { day: 'SUN', name: 'Rest', done: false },
  ]
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div>
          <p style={{ fontSize: '9px', color: '#C8A96E', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '3px' }}>Week 1 of 4</p>
          <p style={{ fontSize: '14px', color: '#F0EDE8', fontFamily: 'var(--font-serif)', letterSpacing: '-0.01em' }}>Your Simple Start</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '20px', color: '#F0EDE8', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>2/5</p>
          <p style={{ fontSize: '8px', color: 'rgba(240,237,232,0.35)', fontFamily: 'var(--font-sans)' }}>done</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' }}>
        {days.map(({ day, name, done }) => (
          <div key={day} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', border: `1px solid ${done ? 'rgba(200,169,110,0.18)' : 'rgba(240,237,232,0.07)'}`, background: done ? 'rgba(200,169,110,0.04)' : 'transparent' }}>
            <div>
              <p style={{ fontSize: '8px', color: 'rgba(240,237,232,0.3)', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', marginBottom: '2px' }}>{day}</p>
              <p style={{ fontSize: '11px', fontFamily: 'var(--font-sans)', color: done ? 'rgba(240,237,232,0.3)' : '#F0EDE8', textDecoration: done ? 'line-through' : 'none' }}>{name}</p>
            </div>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: `1px solid ${done ? '#C8A96E' : 'rgba(240,237,232,0.18)'}`, background: done ? 'rgba(200,169,110,0.14)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {done && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C8A96E' }} />}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 12px', background: 'rgba(200,169,110,0.05)', border: '1px solid rgba(200,169,110,0.1)' }}>
        <p style={{ fontSize: '8px', color: '#C8A96E', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '3px' }}>Simple Fuel</p>
        <p style={{ fontSize: '10px', color: 'rgba(240,237,232,0.65)', fontFamily: 'var(--font-sans)' }}>Protein at every meal this week.</p>
      </div>
    </div>
  )
}

function ResetScreen() {
  const rules = [
    { trigger: 'Miss 1 workout', action: 'Move it to tomorrow' },
    { trigger: 'Miss 2+ days', action: 'Do the short version once' },
    { trigger: 'Bad food day', action: 'Reset at the next meal' },
    { trigger: 'Busy week', action: 'Keep 1 gym + 1 walk' },
  ]
  return (
    <div>
      <p style={{ fontSize: '9px', color: '#C8A96E', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '6px' }}>The Reset Rule</p>
      <p style={{ fontSize: '14px', color: '#F0EDE8', fontFamily: 'var(--font-serif)', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: '16px' }}>
        Miss a day? Here's exactly what you do.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        {rules.map(({ trigger, action }) => (
          <div key={trigger} style={{ padding: '10px 12px', border: '1px solid rgba(240,237,232,0.08)' }}>
            <p style={{ fontSize: '8px', color: 'rgba(240,237,232,0.3)', fontFamily: 'var(--font-sans)', letterSpacing: '0.08em', marginBottom: '4px' }}>{trigger}</p>
            <p style={{ fontSize: '11px', color: '#F0EDE8', fontFamily: 'var(--font-sans)' }}>→ {action}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '14px', padding: '11px 12px', background: 'rgba(200,169,110,0.07)', border: '1px solid rgba(200,169,110,0.15)', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', color: '#C8A96E', fontFamily: 'var(--font-sans)' }}>This is part of the plan.</p>
        <p style={{ fontSize: '9px', color: 'rgba(240,237,232,0.25)', fontFamily: 'var(--font-sans)', marginTop: '2px' }}>No shame. No restart from zero.</p>
      </div>
    </div>
  )
}

export default function AppMockup() {
  return (
    <section className="bg-surface section-pad overflow-hidden">
      <div className="wrap">
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow mb-6">The product</p>
          <h2
            className="font-serif text-ash text-balance mb-6"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            What we're building.
          </h2>
          <p className="font-sans max-w-xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.075rem)', color: '#D8D4CE' }}>
            A lightweight web app that gives beginners a simple, repeatable weekly system —
            and a built-in way to restart when real life gets in the way.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center lg:items-start justify-center mb-20 md:mb-24">
          <PhoneFrame label="Onboarding" caption="Start with one simple question, not a 20-step quiz.">
            <OnboardingScreen />
          </PhoneFrame>
          <PhoneFrame label="Your Week" caption="A plan simple enough to follow without overthinking.">
            <WeekScreen />
          </PhoneFrame>
          <PhoneFrame label="The Reset" caption="Miss a day? The product accounts for it by design.">
            <ResetScreen />
          </PhoneFrame>
        </div>

        <p className="text-center eyebrow mb-10 md:mb-14" style={{ color: 'rgba(240,237,232,0.2)' }}>
          Concept mockups — not final UI
        </p>

        {/* Content preview */}
        <div className="border-t border-ash/10 pt-16 md:pt-20">
          <div className="mb-10">
            <p className="eyebrow mb-4">What the content sounds like</p>
            <p
              className="font-serif text-ash text-balance max-w-[30ch]"
              style={{ fontSize: 'clamp(1.35rem, 2.5vw, 2rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              Week 1, Day 1 — Push Day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {/* Intro card */}
            <div className="bg-base border border-border p-7 md:p-8 md:col-span-2">
              <p className="eyebrow mb-4">Before you start</p>
              <p className="font-sans leading-[1.8]" style={{ color: '#D8D4CE', fontSize: '0.95rem' }}>
                Today you're training the muscles that push things away from you — your
                chest, shoulders, and triceps. Three exercises. That's it. You don't need
                to do more. You need to do these three things consistently, and do them
                with enough focus that you feel the right muscles working.
              </p>
            </div>

            {/* Exercise cards */}
            {[
              {
                n: '01',
                name: 'Chest Press',
                sets: '3 sets · 10 reps',
                why: 'The foundation of upper body pushing strength. Your chest does the work — not your shoulders.',
                how: 'Adjust the seat so the handles sit at chest height. Push forward and slightly together. Control the return.',
              },
              {
                n: '02',
                name: 'Shoulder Press',
                sets: '3 sets · 10 reps',
                why: 'Builds the overhead strength you need for everyday life and prevents shoulder injury down the line.',
                how: 'Arms press upward, not forward. Don\'t shrug your neck into it. Feel the top of your shoulder doing the work.',
              },
              {
                n: '03',
                name: 'Tricep Pushdown',
                sets: '3 sets · 12 reps',
                why: 'The back of your arm. Most beginners forget this muscle exists — it\'s half of your arm size.',
                how: 'Elbows stay at your sides. Push the cable or band downward. Squeeze at the bottom for a second.',
              },
            ].map(({ n, name, sets, why, how }) => (
              <div key={n} className="bg-base border border-border p-7 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="eyebrow mb-1">{n}</p>
                    <p className="font-serif text-ash" style={{ fontSize: '1.2rem', letterSpacing: '-0.01em' }}>{name}</p>
                  </div>
                  <span className="font-sans text-xs px-2.5 py-1 border border-gold/25 text-gold/70 flex-shrink-0 mt-0.5">{sets}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="eyebrow mb-2" style={{ color: 'rgba(200,169,110,0.5)' }}>Why</p>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#D8D4CE' }}>{why}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2" style={{ color: 'rgba(200,169,110,0.5)' }}>How</p>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#D8D4CE' }}>{how}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Rest note */}
            <div className="bg-gold/6 border border-gold/20 p-7 md:p-8 md:col-span-2">
              <p className="font-sans leading-[1.8]" style={{ color: '#D8D4CE', fontSize: '0.95rem' }}>
                <span className="text-gold font-medium">Rest 60–90 seconds between sets.</span>{' '}
                If this felt too easy, add a small amount of weight next time. If it felt
                too hard, reduce the weight or do 8 reps instead of 10. The goal today is
                to finish — not to be perfect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
