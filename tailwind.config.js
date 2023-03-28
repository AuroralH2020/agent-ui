/* refer for more details https://tailwindcss.com/docs/configuration */

module.exports = {
  content: ['src/**/*.{html,js, jsx, tsx, ts}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      primary: ['sans-serif'],
      secondary: ['Open Sans'],
    },
    borderRadius: {
      none: '0',
      tiny: '4px',
      sm: '8px',
      DEFAULT: '12px',
      md: '16px',
      lg: '24px',
      full: '9999px',
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    fontSize: {
      tiny: '10px',
      xs: '12px',
      sm: '14px',
      base: '18px',
      md: '24px',
      lg: '48px',
      xl: '72px',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      grey: '#494949',
      lightGrey: '#F8F9FA',
      dialogGrey: '#f5f5f5',
      whitesmoke: '#f3f3f3',
      yellow: '#f2b619',
      success: '#277d26',
      danger: '#ff3a3a',
      node: '#4D8A8C',
      primary: {
        50: '#f3faf9',
        100: '#d6f1ee',
        200: '#ade2dd',
        300: '#7cccc7',
        400: '#51b0ae',
        500: '#379593',
        600: '#2e8182',
        700: '#255f60',
        800: '#224b4d',
        900: '#204041',
      },
      secondary: {
        50: '#effaff',
        100: '#def5ff',
        200: '#b6edff',
        300: '#75e2ff',
        400: '#2cd4ff',
        500: '#00b6eb',
        600: '#009ad4',
        700: '#007bab',
        800: '#00678d',
        900: '#065574',
      },
      text: {
        50: '#f7f7f7',
        100: '#e3e3e3',
        200: '#c8c8c8',
        300: '#a4a4a4',
        400: '#818181',
        500: '#666666',
        600: '#515151',
        700: '#484848',
        800: '#383838',
        900: '#313131',
      },
    },
    extend: {
      width: {
        '1/10': '10%',
        '1.5/10': '15%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
      height: {
        '1/10': '10%',
        '1.5/10': '15%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
      boxShadow: {
        big: '0 5px 30px -24px rgba(0, 0, 0, 0.3)',
        small: '0 2px 10px -7px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    outline: false,
  },
}
