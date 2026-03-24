/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        amatic: ['var(--font-amatic)', 'cursive'],
      },
      colors: {
        brand: {
          primary: '#c8513b',
          'primary-dark': '#a83e2f',
          amber: '#e8b04a',
          blue: '#90b4d0',
          plum: '#802048',
          sage: '#a4b787',
        },
      },
    },
  },
  plugins: [],
}
