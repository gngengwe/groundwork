import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0F0D08',
        surface: '#1A1814',
        'surface-hi': '#242018',
        border: '#2D2922',
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
