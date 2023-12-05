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
    colors: {
      'dark-sand': {
        500: '#201A10',
        400: '#3A2E1D',
        300: '#685334',
        200: '#886D44',
        100: '#A08050'
      },
      sand: {
        500: '#AA8E6E',
        400: '#BDA78E',
        300: '#D0C0AF',
        200: '#E3D9CF',
        100: '#F6F2EF'
      },
      purple: {
        500: '#251D2D',
        400: '#251D2D',
        300: '#81649D',
        200: '#9C86B3',
        100: '#B8A8C8'
      },
      neutral: {
        500: '#333333',
        400: '#404040',
        300: '#595959',
        200: '#8C8C8C',
        100: '#F2F2F2'
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
