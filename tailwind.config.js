module.exports = {
  mode: 'jit',
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    debugScreens: {
      position: ['left', 'top'],
    },
    extend: {
      colors: {
        primary: '#ec563d',
      },
      container: {
        center: true,
      },
      outline: {
        primary: ['2px dashed #ec563d', '.5rem']
      },
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    ...process.env.NODE_ENV === 'development'
      ? [require('tailwindcss-debug-screens')]
      : [],
  ],
}
