import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        indiaGreen: '#138808',
        indiaWhite: '#FFFFFF',
        zephyrBlack: '#0A0A0A',
        zephyrGray: '#121212',
        zephyrRed: '#D90429'
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(217,4,41,0.7)' },
          '50%': { boxShadow: '0 0 0 16px rgba(217,4,41,0)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        pulseRed: 'pulseRed 1.5s infinite',
        float: 'float 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config
