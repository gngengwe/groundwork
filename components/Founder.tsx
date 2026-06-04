export default function Founder() {
  return (
    <section className="bg-surface section-pad">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Portrait */}
          <div className="md:col-span-2">
            {/*
              TODO: Replace this placeholder with a real photo of Jeremy.
              Dimensions: portrait orientation, approx 4:5 ratio.
              Drop the image into /public/jeremy.jpg and swap the div below for:
              <Image src="/jeremy.jpg" alt="Jeremy" width={480} height={600} className="w-full" />
            */}
            <div className="aspect-[4/5] bg-surface-hi relative overflow-hidden flex items-end">
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
              <div className="relative z-10 p-6">
                <p
                  className="font-serif text-ash"
                  style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}
                >
                  Jeremy
                </p>
                <p className="eyebrow text-gold/60 mt-1">Founder, Groundwork</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-8">The builder</p>

            <h2
              className="font-serif text-ash text-balance mb-10"
              style={{
                fontSize: 'clamp(1.65rem, 3vw, 2.6rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              Built by a gym regular, for everyone who was never given the manual.
            </h2>

            <div
              className="space-y-5 text-ash/90 font-sans leading-[1.75]"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)' }}
            >
              <p>
                Jeremy has been in the gym seven days a week for years — not because
                he's obsessive, but because it became genuinely simple for him. Simple to
                show up. Simple to know what to do. Simple to eat well enough.
              </p>
              <p>
                What made it simple wasn't talent, genetics, or the right gym
                membership. It was understanding. Once he understood the basics clearly,
                everything else followed.
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
