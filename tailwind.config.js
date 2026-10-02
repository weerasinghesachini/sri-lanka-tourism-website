/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        sand: {
          50: '#FDFBF7',
          100: '#FBF8F1',
          200: '#F4EFE6',
          300: '#EFE8D8',
          400: '#E2D6C1',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(4, 120, 87, 0.08)',
        'elevated': '0 20px 40px -15px rgba(5, 150, 105, 0.18)',
        'emerald-glow': '0 10px 30px -5px rgba(16, 185, 129, 0.4)',
      }
    },
  },
  plugins: [],
};
