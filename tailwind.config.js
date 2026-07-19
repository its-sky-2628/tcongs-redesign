/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05070F',
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
        'grid-fade': 'linear-gradient(to bottom, transparent, #05070F)',
        'aurora': 'radial-gradient(60% 50% at 20% 20%, rgba(99,102,241,0.25) 0%, transparent 60%), radial-gradient(50% 50% at 85% 15%, rgba(168,85,247,0.2) 0%, transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(34,211,238,0.15) 0%, transparent 60%)',
        // ADDED: Real dynamic mathematical noise pattern overlay for that granular texturing
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
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