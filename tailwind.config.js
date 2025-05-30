// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        graffiti: ['"Permanent Marker"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
  fontFamily: {
    graffiti: ['BlowBrush', 'cursive'],
  },
}

  },
  plugins: [],
};