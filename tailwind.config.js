/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-2000': {
          'perspective': '2000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.rotate-y-0': {
          'transform': 'rotateY(0deg)',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
        '.rotate-yM-180': {
          'transform': 'rotateY(-180deg)',
        },
        '.rotate-y-n5': { 'transform': 'rotateY(-5deg)' },
        '.rotate-y-n6': { 'transform': 'rotateY(-6deg)' },
        '.rotate-y-n10': { 'transform': 'rotateY(-10deg)' },
        '.rotate-y-n12': { 'transform': 'rotateY(-12deg)' },
        '.rotate-y-n15': { 'transform': 'rotateY(-15deg)' },
        '.rotate-y-n18': { 'transform': 'rotateY(-18deg)' },
        '.rotate-y-n20': { 'transform': 'rotateY(-20deg)' },
        '.rotate-y-n25': { 'transform': 'rotateY(-25deg)' },
      })
    }
  ],
};
