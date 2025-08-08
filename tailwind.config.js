/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.html",
    "./*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sans: ['Sora', 'sans-serif'], // Define Sora como fonte padrão
      },
      colors: {
        midnight: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E5E4E7',
          300: '#D6D3D9',
          400: '#A49EAC',
          500: '#746C7E',
          600: '#554F5D',
          700: '#413D47',
          800: '#28252C',
          900: '#19171C',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
} 