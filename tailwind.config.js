const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['Prompt', 'sands-serif'],
        'sans': ['Montserrat', ...fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
