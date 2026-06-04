'use client'

import { useState } from 'react'

const fitnessLevels = [
  'Never really started',
  'Complete beginner',
  'Inconsistent — I go then stop',
  'Getting back into it',
  'Somewhat regular but unsure',
]

const gymStruggles = [
  'Not knowing what to do',
  'Staying consistent',
  'Feeling intimidated',
  "Unsure if I'm doing anything right",
  'Finding time',
  'Something else',
]

const foodStruggles = [
  'Eating enough of the right things',
  'Knowing what to eat around the gym',
  'Meal prep and planning',
  'Emotional eating or cravings',
  "Not sure where to start",
]

const formats = [
  'Written guides and checklists',
  'Short videos',
  'Coaching or accountability',
  'An app',
  'A challenge or program',
]

export default function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [fitnessLevel, setFitnessLevel] = useState('')
  const [gymStruggle, setGymStruggle] = useState('')
  const [foodStruggle, setFoodStruggle] = useState('')
  const [selectedFormats, setSelectedFormats] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const toggleFormat = (f: string) =>
    setSelectedFormats(prev =>
      prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)

    /*
     * TODO: Wire up email capture.
     *
     * Options:
     *   - Loops (loops.so) — recommended for founder-led products
     *   - ConvertKit / Kit
     *   - Mailchimp
     *   - A Cloudflare Worker proxying to any of the above
     *
     * Replace the placeholder below with a real fetch:
     *
     * await fetch('https://api.loops.so/v1/contacts/create', {
     *   method: 'POST',
     *   headers: {
     *     Authorization: `Bearer ${process.env.NEXT_PUBLIC_LOOPS_API_KEY}`,
     *     'Content-Type': 'application/json',
     *   },
     *   body: JSON.stringify({
     *     email,
     *     userGroup: 'early-access',
     *     fitnessLevel,
     *     gymStruggle,
     *     foodStruggle,
     *     preferredFormats: selectedFormats.join(', '),
     *   }),
     * })
     */

    await new Promise(r => setTimeout(r, 700)) // placeholder
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="early-access" className="bg-dark section-pad">
        <div className="wrap-narrow text-center">
          <div className="w-10 h-px bg-earth mx-auto mb-10" />
          <h2
            className="font-serif text-cream mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              letterSpacing: '-0.025em',
            }}
          >
            You're on the list.
          </h2>
          <p className="text-cream/55 font-sans leading-relaxed max-w-sm mx-auto">
            We'll be in touch when Groundwork launches. We're building something worth
            the wait.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="early-access" className="bg-dark section-pad">
      <div className="wrap-narrow">
        <div className="w-10 h-px bg-earth mb-10" />

        <h2
          className="font-serif text-cream text-balance mb-4"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          Be the first to know when Groundwork launches.
        </h2>
        <p
          className="text-cream/50 font-sans mb-14"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)' }}
        >
          No spam. Just early access and the occasional update as we build.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block eyebrow text-cream/50 mb-3"
            >
              Your email address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent border border-cream/20 text-cream placeholder-cream/25 font-sans px-5 py-4 focus:outline-none focus:border-earth transition-colors duration-200"
            />
          </div>

          {/* Optional survey */}
          <div className="pt-6 border-t border-cream/10 space-y-8">
            <p className="eyebrow text-cream/35">
              Optional — helps us build the right thing
            </p>

            <div>
              <label
                htmlFor="fitnessLevel"
                className="block eyebrow text-cream/50 mb-3"
              >
                Your current gym experience
              </label>
              <div className="relative">
                <select
                  id="fitnessLevel"
                  value={fitnessLevel}
                  onChange={e => setFitnessLevel(e.target.value)}
                  className="w-full appearance-none bg-dark-mid border border-cream/20 text-cream/75 font-sans px-5 py-4 focus:outline-none focus:border-earth transition-colors duration-200 cursor-pointer"
                >
                  <option value="">Select one...</option>
                  {fitnessLevels.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-cream/35 text-xs">
                  ▾
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="gymStruggle"
                className="block eyebrow text-cream/50 mb-3"
              >
                Biggest gym struggle
              </label>
              <div className="relative">
                <select
                  id="gymStruggle"
                  value={gymStruggle}
                  onChange={e => setGymStruggle(e.target.value)}
                  className="w-full appearance-none bg-dark-mid border border-cream/20 text-cream/75 font-sans px-5 py-4 focus:outline-none focus:border-earth transition-colors duration-200 cursor-pointer"
                >
                  <option value="">Select one...</option>
                  {gymStruggles.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-cream/35 text-xs">
                  ▾
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="foodStruggle"
                className="block eyebrow text-cream/50 mb-3"
              >
                Biggest food struggle
              </label>
              <div className="relative">
                <select
                  id="foodStruggle"
                  value={foodStruggle}
                  onChange={e => setFoodStruggle(e.target.value)}
                  className="w-full appearance-none bg-dark-mid border border-cream/20 text-cream/75 font-sans px-5 py-4 focus:outline-none focus:border-earth transition-colors duration-200 cursor-pointer"
                >
                  <option value="">Select one...</option>
                  {foodStruggles.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-cream/35 text-xs">
                  ▾
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow text-cream/50 mb-4">
                How do you prefer to learn? (choose all that apply)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {formats.map(f => {
                  const active = selectedFormats.includes(f)
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFormat(f)}
                      className={`text-left px-5 py-3.5 border font-sans text-sm transition-colors duration-200 ${
                        active
                          ? 'border-earth bg-earth/10 text-cream'
                          : 'border-cream/20 text-cream/55 hover:border-cream/35 hover:text-cream/75'
                      }`}
                    >
                      {f}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !email}
            className="bg-earth text-cream px-10 py-4 font-sans font-medium text-sm tracking-wide hover:bg-earth/85 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving your spot...' : 'Get early access'}
          </button>
        </form>
      </div>
    </section>
  )
}
