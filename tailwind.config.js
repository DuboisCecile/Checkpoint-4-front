const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#7ECCF2',
        secondary: '#318D7D',
        succes: '#0ab264',
        info: '#0769ea',
        warning: '#f4e404',
        danger: '#e01d1d',
        opaque: ' #00000059',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        blue: colors.blue,
        green: colors.green,
        grey: '#dbedf3',
        lightGrey: '#f2f9fc',
        darkblue: '#283149',
        darkpurple: '#9370DB',
        googleblue: '#4285F4',
        googlered: '#EA4335',
        googleyellow: '#FBBC05',
        googlegreen: '#34A853',
        facebookdarkblue: '#4267B2',
        facebookblue: '#1877F2',
        gray500: '#6B7280',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
