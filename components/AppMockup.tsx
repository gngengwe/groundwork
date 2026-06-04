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
        {/* Dynamic island */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <div
            style={{
              width: '76px', height: '22px',
              background: '#000',
              borderRadius: '11px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1a1a18' }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1a1a18' }} />
          </div>
        </div>

        {/* Screen */}
        <div
          style={{
            background: '#161614',
            borderRadius: '26px',
            padding: '20px 16px 24px',
            minHeight: '460px',
          }}
        >
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
      <p style={{ fontSize: '9px', color: '#C8A96E', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '16px' }}>
        Step 1 of 3
      </p>
      <p style={{ fontSize: '14px', color: '#F0EDE8', fontFamily: 'var(--font-serif)', letterSpacing: '-0.01em', lineHeight: 1.35, marginBottom: '18px' }}>
        How would you describe your gym experience right now?
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        {options.map(({ text, active }) => (
          <div
            key={text}
            style={{
              padding: '10px 12px',
              border: `1px solid ${active ? 'rgba(200,169,110,0.55)' : 'rgba(240,237,232,0.1)'}`,
              borderRadius: '6px',
              background: active ? 'rgba(200,169,110,0.08)' : 'transparent',
            }}
          >
            <p style={{ fontSize: '11px', fontFamily: 'var(--font-sans)', color: active ? '#F0EDE8' : 'rgba(240,237,232,0.45)' }}>
              {text}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: '20px', background: '#C8A96E', padding: '12px',
          textAlign: 'center', borderRadius: '5px',
        }}
      >
        <p style={{ fontSize: '10px', fontWeight: 600, color: '#0D0D0B', fontFamily: 'var(--font-sans)', letterSpacing: '0.08em' }}>
          CONTINUE →
        </p>
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
          <p style={{ fontSize: '9px', color: '#C8A96E', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '3px' }}>
            Week 1 of 4
          </p>
          <p style={{ fontSize: '14px', color: '#F0EDE8', fontFamily: 'var(--font-serif)', letterSpacing: '-0.01em' }}>
            Your Simple Start
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '20px', color: '#F0EDE8', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>2/5</p>
          <p style={{ fontSize: '8px', color: 'rgba(240,237,232,0.35)', fontFamily: 'var(--font-sans)' }}>done</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' }}>
        {days.map(({ day, name, done }) => (
          <div
            key={day}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '8px 10px',
              border: `1px solid ${done ? 'rgba(200,169,110,0.18)' : 'rgba(240,237,232,0.07)'}`,
              background: done ? 'rgba(200,169,110,0.04)' : 'transparent',
            }}
          >
            <div>
              <p style={{ fontSize: '8px', color: 'rgba(240,237,232,0.3)', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', marginBottom: '2px' }}>{day}</p>
              <p style={{ fontSize: '11px', fontFamily: 'var(--font-sans)', color: done ? 'rgba(240,237,232,0.3)' : '#F0EDE8', textDecoration: done ? 'line-through' : 'none' }}>{name}</p>
            </div>
            <div
              style={{
                width: '16px', height: '16px', borderRadius: '50%',
                border: `1px solid ${done ? '#C8A96E' : 'rgba(240,237,232,0.18)'}`,
                background: done ? 'rgba(200,169,110,0.14)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
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
      <p style={{ fontSize: '9px', color: '#C8A96E', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '6px' }}>
        The Reset Rule
      </p>
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

      <div
        style={{
          marginTop: '14px', padding: '11px 12px',
          background: 'rgba(200,169,110,0.07)', border: '1px solid rgba(200,169,110,0.15)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '10px', color: '#C8A96E', fontFamily: 'var(--font-sans)' }}>
          This is part of the plan.
        </p>
        <p style={{ fontSize: '9px', color: 'rgba(240,237,232,0.25)', fontFamily: 'var(--font-sans)', marginTop: '2px' }}>
          No shame. No restart from zero.
        </p>
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
          <p
            className="text-ash/75 font-sans max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.075rem)' }}
          >
            A lightweight web app that gives beginners a simple, repeatable weekly system —
            and a built-in way to restart when real life gets in the way.
          </p>
        </div>

        {/* Phones — horizontal scroll on mobile */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center lg:items-start justify-center">
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

        <p className="text-ash/30 font-sans text-xs text-center mt-14 tracking-wide">
          Concept mockups — not final UI
        </p>
      </div>
    </section>
  )
}
