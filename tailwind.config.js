/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#F0F7F2',
          100: '#D6EDE0',
          200: '#AEDCC1',
          300: '#7EC49E',
          400: '#52B788',
          500: '#40916C',
          600: '#2D6A4F',
          700: '#1B4332',
          800: '#143526',
          900: '#0C2218',
          950: '#071410',
        },
        forest: {
          DEFAULT: '#082C1C',
          deep:    '#050F0A',
          mid:     '#176B45',
        },
        ocean: {
          50:  '#E8F4F8',
          100: '#C5E3EE',
          400: '#2096B8',
          500: '#176B87',
          600: '#07516B',
          700: '#053D52',
          800: '#032C3B',
        },
        gold: {
          100: '#FDF4DC',
          200: '#FAE5A8',
          300: '#F3D279',
          400: '#E5A93C',
          500: '#D4A853',
          600: '#C29642',
          700: '#9E7830',
        },
        cream: {
          50:  '#FFFDF9',
          100: '#F9F6F0',
          200: '#F5F0E8',
          300: '#E8DFD0',
          400: '#D9CDB8',
          500: '#C4B49C',
        },
        sand: {
          50:  '#FAF7F2',
          100: '#F5EFE6',
          200: '#EDE3D4',
          300: '#D9CDB8',
        },
        earth: {
          100: '#F0E8DC',
          200: '#D4C5AD',
          300: '#B89E84',
          400: '#8B6E4E',
        },
      },
      fontFamily: {
        sans:    ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 32px rgba(0,0,0,0.12)',
        'nav':        '0 1px 16px rgba(0,0,0,0.10)',
        'hero':       '0 24px 64px rgba(0,0,0,0.28)',
        'glow-gold':  '0 0 20px rgba(212,168,83,0.35)',
        'glow-green': '0 0 20px rgba(27,67,50,0.25)',
      },
      borderRadius: {
        'pill': '999px',
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease-out both',
        'fade-in':      'fadeIn 0.5s ease-out both',
        'zoom-in':      'zoomIn 8s ease-out both',
        'slide-up':     'slideUp 0.5s ease-out both',
        'float':        'float 4s ease-in-out infinite',
        'pulse-soft':   'pulseSoft 3s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%':   { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'jungle-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D6A4F' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm0 0c0 5.5-4.5 10-10 10S10 35.5 10 30s4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
