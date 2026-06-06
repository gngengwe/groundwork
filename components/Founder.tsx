export default function Founder() {
  return (
    <section className="bg-surface section-pad">
      <div className="wrap">
        {/* Jeremy's direct voice — top of section */}
        <div className="mb-16 md:mb-20 max-w-[52ch]">
          <p className="eyebrow mb-8">In Jeremy's words</p>
          <blockquote
            className="font-serif text-ash text-balance"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', lineHeight: 1.3, letterSpacing: '-0.02em' }}
          >
            "I've gone to the gym seven days a week for years. But I can still remember
            standing near the weights with no idea what to pick up, what order to do
            things in, or whether I was doing any of it right. Nobody taught me. I figured
            it out through years of trial and error.
            <br /><br />
            The basics aren't complicated. They're just never explained simply."
          </blockquote>
          <p className="eyebrow text-ash/30 mt-6">Jeremy — Founder, Groundwork</p>
        </div>

        {/* Portrait + bio */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Portrait */}
          <div className="md:col-span-2">
            {/*
              TODO: Replace this placeholder with a real photo of Jeremy.
              Add the image at /public/jeremy.jpg (portrait, ~4:5 ratio) then replace
              the div below with:
              <Image src="/jeremy.jpg" alt="Jeremy" width={480} height={600} className="w-full" />
            */}
            <div className="aspect-[4/5] bg-surface-hi relative overflow-hidden flex items-end">
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
              <div className="relative z-10 p-6">
                <p className="font-serif text-ash" style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
                  Jeremy
                </p>
                <p className="eyebrow mt-1" style={{ color: 'rgba(200,169,110,0.55)' }}>
                  Founder, Groundwork
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-8">The builder</p>

            <h2
              className="font-serif text-ash text-balance mb-10"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Built by a gym regular, for everyone who was never given the manual.
            </h2>

            <div
              className="space-y-5 font-sans leading-[1.75]"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: '#D8D4CE' }}
            >
              <p>
                Jeremy has been in the gym seven days a week for years — not because
                he's obsessive, but because it became genuinely simple for him. Simple to
                show up. Simple to know what to do. Simple to eat well enough.
              </p>
              <p>
                What made it simple wasn't talent, genetics, or the right membership. It
                was understanding. Once the basics were clear, everything else followed.
              </p>
              <p>
                Groundwork exists because Jeremy realised that the gap between people who
                stay consistent at the gym and people who don't is rarely effort. It's
                almost always clarity.
              </p>
              <p className="text-ash font-medium">
                Most people were never taught. This is the instruction manual they should
                have had from the start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
