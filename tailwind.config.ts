import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF',
        stone: '#EDE9E1',
        pebble: '#D4CEC5',
        ink: '#1C1917',
        muted: '#7A7470',
        earth: '#8B6B44',
        'earth-light': '#F2EBE0',
        dark: '#111009',
        'dark-mid': '#1A1712',
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
