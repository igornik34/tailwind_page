/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto'
      },
      fontFamily: {
        'main': ['Montserrat']
      }
    },
  },
  plugins: [],
}
