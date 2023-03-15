const { blackA, violet, mauve } = require('@radix-ui/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
      source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      ...blackA,
      ...violet,
      ...mauve,
    },
    extend: {

    },
  },
  plugins: [],
}
