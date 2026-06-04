import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0D0D0B',
        surface: '#161614',
        'surface-hi': '#1E1E1B',
        border: '#2A2A27',
        ash: '#F0EDE8',
        muted: '#857E75',
        gold: '#C8A96E',
        'gold-dim': '#9B7B4E',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
