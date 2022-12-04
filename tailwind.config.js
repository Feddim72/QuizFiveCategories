module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  variants: {
    display: [
      'children',
      'default',
      'children-first',
      'children-last',
      'children-odd',
      'children-even',
      'children-not-first',
      'children-not-last',
      'children-hover',
      'after',
      'hover',
      'children-focus',
      'focus',
      'children-focus-within',
      'focus-within',
      'children-active',
      'active',
      'children-visited',
      'visited',
      'children-disabled',
      'disabled',
      'responsive',
      'last',
    ],
  },
  theme: {
    fontFamily:{
      'raleway':['raleway']
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      'black-transparent': '#20222bd9',
      'blackA-transparent': '#181920cf',
      loader: '#F5F5F599',
      blue: {
        400: '#336AAB',
        800: '#004596',
        900: '#003677',
        1000: '#223B58',
      },
      red: {
        600: '#FF1E19',
      },
      brown: {
        500: '#CE6F10',
      },
      orange: {
        500: '#FF641E',
      },
      gray: {
        17:"#171717",
        "1f":"#1f1f1f",
        08:'#000000cc',
        f2:'#000000f2',
        40: '#F2F2F2',
        50: '#FcFcFc',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        500: '#9F9F9F',
        800: '#464646',
      },
      green: {
        500: '#00B559',
      },
    },
    boxShadow: {
      program:'3px 3px 3px 1px #bea0f941',
      none: '0',
      light: '0px 0px 3px #0000001F',
      'light-inset': 'inset 0px 0px 3px #0000001F',
      error: '0px 0px 0px 1px #ff1e19, inset 0px 0px 0px 1px #ff1e19',
      'error-outside': '0px 0px 0px 2px #ff1e19',
      base: '0px 2px 3px #0000000A',
      lg: '0px 3px 6px #00000029',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      spacing: {
        112: '28rem',
        'footer-screen': 'calc(100vh - 75px - 350px)',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'fade-out': {
          from: {
            opacity: '1',
          },
          to: {
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-in-loader': 'fade-in 1s ease-out 0.5s forwards',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-fast': 'fade-in 0.2s ease-out',
        'fade-out-fast': 'fade-out 0.2s ease-out',
      },
      minHeight: (theme) => ({ ...theme('height') }),
    },
    screens: {
      pcXL: { max: '1280px' },
      pcLG: { max: '1024px' },
      pc855: { max: '855px' },
      tablet: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      mobileL: { max: '425px' },
      mobileM: { max: '375px' },
      mobileS: { max: '320px' },
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.overflow-wrap-anywhere': {
          overflowWrap: 'anywhere',
        },
        '.bg-pattern': {
          background:
            "url('/bg-pattern-left.svg') repeat-y , url('/bg-pattern-right.svg') repeat-y right ",
          backgroundSize: '16%',
        },
        '.bg-pattern-newsletter': {
          background:
            "url('/bg-pattern-left.svg') -310px 838px/40% repeat-y , url('/bg-pattern-right.svg') 1579px -290px/40% repeat-y ",
        },
        '.bg-cloud': {
          background: 'url("/cloud.svg") no-repeat center',
        },
      })
    },
    require('tailwindcss-children'),
  ],
}
