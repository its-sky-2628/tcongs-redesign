/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#02040a',
          900: '#090D1B',
          800: '#0F1428',
          700: '#161C36',
          600: '#232B4D',
        },
        ink: {
          100: '#F3F5FB',
          300: '#C4CAE0',
          500: '#8791B3',
        },
        cyan: {
          400: '#3FE0E0',
          500: '#22D3EE',
        },
        indigo: {
          400: '#7C82F5',
          500: '#6366F1',
        },
        violet: {
          400: '#B565F5',
          500: '#A855F7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, #02040a)',
        'aurora': 'radial-gradient(60% 50% at 20% 20%, rgba(99,102,241,0.25) 0%, transparent 60%), radial-gradient(50% 50% at 85% 15%, rgba(168,85,247,0.2) 0%, transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(34,211,238,0.15) 0%, transparent 60%)',
        /* VERCEL BUILD SECURE: Swapped out broken asset compilation matrix for a clean soft ambient radial filter */
        'noise': 'radial-gradient(circle at center, rgba(255,255,255,0.01) 0%, transparent 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34,211,238,0.35)',
        card: '0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}