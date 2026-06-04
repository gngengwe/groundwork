const pillars = [
  {
    n: '01',
    name: 'Simple Gym',
    body: "Know exactly what to do when you walk in the door. No guessing, no wandering, no wasted time wondering if you're doing it right.",
  },
  {
    n: '02',
    name: 'Simple Teaching',
    body: "Understand why each thing works. When nothing feels random, nothing feels pointless — and you stop second-guessing yourself.",
  },
  {
    n: '03',
    name: 'Simple Fuel',
    body: "Eat in a way that supports the work without obsessing, calorie-counting, or giving up anything you actually enjoy.",
  },
  {
    n: '04',
    name: 'Repeatable Weeks',
    body: "Build a routine that survives real life — holidays, hard weeks, travel, bad sleep, and the other ten things that usually derail you.",
  },
  {
    n: '05',
    name: 'The Reset Rule',
    body: "Learn how to restart after any break, setback, or gap — without shame, without starting from zero, without the spiral.",
  },
]

export default function System() {
  return (
    <section id="system" className="bg-surface-hi section-pad">
      <div className="wrap">
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-6">The system</p>
          <h2
            className="font-serif text-ash text-balance max-w-[22ch]"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            Five parts. One direction. No wasted complexity.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {pillars.map(({ n, name, body }) => (
            <div
              key={n}
              className="bg-surface border border-border p-8 md:p-10 flex flex-col gap-5"
            >
              <span className="eyebrow">{n}</span>
              <h3
                className="font-serif text-ash"
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  letterSpacing: '-0.015em',
                }}
              >
                {name}
              </h3>
              <p className="text-ash/75 font-sans text-sm md:text-base leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
