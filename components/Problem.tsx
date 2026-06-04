export default function Problem() {
  return (
    <section id="how-it-works" className="bg-surface section-pad">
      <div className="wrap-narrow">
        <p className="eyebrow mb-10">The problem</p>

        <h2
          className="font-serif text-ash text-balance mb-12"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.028em',
          }}
        >
          You didn't fail the gym.
          <br />
          The gym failed you.
        </h2>

        <div
          className="space-y-6 text-ash/90 font-sans leading-[1.75]"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 1.125rem)' }}
        >
          <p>
            The gym is one of the most common places people go to change their lives. It
            is also one of the least clearly taught places most of us will ever walk into.
          </p>
          <p>
            Beginners are expected to immediately understand equipment, exercises, muscle
            soreness, nutrition, progression, and recovery — with almost no real
            instruction. You walk in, you look around, you hope no one notices you have no
            idea what you're doing, and eventually you stop going.
          </p>
          <p>
            Fitness culture gives people{' '}
            <span className="text-ash font-medium">intensity</span> before understanding.
            Diet rules before food basics. Transformation pressure before confidence. The
            assumption is that motivation will carry you through confusion.
          </p>
          <p className="text-ash font-medium">It doesn't. And it never did.</p>
          <p>
            Most people who quit the gym were not lazy. They were under-taught. They were
            handed complexity when they needed clarity. Groundwork starts there.
          </p>
        </div>
      </div>
    </section>
  )
}
