// tailwind.config.js

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'customOne': ['YourCustomFontOne', 'honk'],
        'customTwo': ['YourCustomFontTwo', 'consolas'],
        'customThree': ['YourCustomFontThree', 'feelingPassionate'],
        'customFour': ['YourCustomFontFour', 'kiteOne']
      },
      colors: {
        pink: colors.pink,
      },
      gradientColorStops: {
        'pink-500': colors.pink[500],
        'pink-700': colors.pink[700],
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover', 'focus'],
      ringWidth: ['focus'],
    },
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/aspect-ratio', '@tailwindcss/line-clamp', '@tailwindcss/typography', '@tailwindcss/gradient'],
};
