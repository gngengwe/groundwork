export default function Problem() {
  return (
    <section id="how-it-works" className="bg-surface section-pad">
      <div className="wrap-narrow">
        <p className="eyebrow mb-10">The problem</p>

        <h2
          className="font-serif text-ash text-balance mb-12"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.028em' }}
        >
          You didn't fail the gym.
          <br />
          The gym failed you.
        </h2>

        <div
          className="space-y-6 font-sans leading-[1.75]"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 1.125rem)', color: '#D8D4CE' }}
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

        {/* Target person portrait */}
        <div className="mt-16 pt-12 border-t border-ash/10">
          <p className="eyebrow mb-8">Who this is for</p>

          <div className="border-l-2 border-gold/40 pl-8 space-y-5 font-sans leading-[1.8]"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: '#D8D4CE' }}>
            <p>
              She joined a gym in January. Went twice in the first week, then once, then
              stopped. She's still paying the membership.
            </p>
            <p>
              It's not that she stopped wanting to go. She thinks about it most mornings.
              But every time she drives there she feels a low-level dread she can't quite
              name. She doesn't know what to do when she gets there. The weights area
              feels like it belongs to other people. She tried a YouTube workout and
              couldn't follow the form. She downloaded a fitness app that asked her to
              input her macros before it would show her a single exercise. She closed it
              and didn't go back.
            </p>
            <p>
              She's tried. She's not lazy. She just needed someone to explain the gym to
              her simply. Nobody has.
            </p>
            <p className="text-ash font-medium">
              That person is who Groundwork is built for.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
