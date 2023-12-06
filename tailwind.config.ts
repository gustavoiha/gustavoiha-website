import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        bannermove: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        }
      }
    },
    fontSize: {
      h1: ['4rem', {
        lineHeight: '4.25rem',
        fontWeight: '300',
      }],
      h2: ['2.5rem', {
        lineHeight: '3rem',
        fontWeight: '300',
      }],
      h3: ['2rem', {
        lineHeight: '2.5rem',
        fontWeight: '300',
      }],
      p1: ['1.25rem', {
        lineHeight: '1.875rem',
        fontWeight: '400',
      }],
      p2: ['1rem', {
        lineHeight: '1.875rem',
        fontWeight: '400',
      }],
      subtitle: ['0.875rem', {
        lineHeight: '1.875rem',
        fontWeight: '400',
      }]
    }
  },
  plugins: [],
}
export default config
