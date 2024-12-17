/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ['"Inter"', 'sans-serif'],
      heading: ['"Josefin Sans"', 'sans-serif'],
    },
    fontSize: {
      'h1': ['154px', { lineHeight: '125px', fontWeight: 'bold' }], 
      'h2': ['54px', { lineHeight: '60px', fontWeight: 'bold' }],
      'h4': ['26px', { lineHeight: '30px', fontWeight: 'bold' }],
      'h5': ['18px', { lineHeight: '1', fontWeight: 'bold' }],
      'b-large': ['22px', { lineHeight: '31px', fontWeight: 400 }],
      'b-small': ['14px', { lineHeight: '1', fontWeight: 400 }],
      'b-medium': ['16px', { lineHeight: '23px', fontWeight: 400 }],
      'b-bold': ['16px', { lineHeight: '1', fontWeight: 600 }],
      'b-s-bold': ['14px', { lineHeight: '1', fontWeight: 'bold' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        20: 'rgba(255, 255, 255, 0.5)',
        80: 'rgba(255, 255, 255, 0.2)',
        1: 'rgba(255, 255, 255, 0.01)',
        0: 'rgba(255, 255, 255, 0)',
      },
      black: {
        100: "#000000",
        80: "#0D0D0D",
        60: "#222222",
        40: "#7A7A7A",
        20: "#808080",
        10: "#BBBBBB",
      },
      purple: '#B48CDE',
    },
    backgroundImage: {
      'gradient-topbar': 'linear-gradient(to right, #FEECFF 0%, #FECAFF 12%, #FEB5FF 27%, #FFDBE7 40%, #FFF4D6 49%, #F3FCD7 59%, #D2F5EE 71%, #C3EFFF 84%, #FBEFFF 100%)',
      'gradient-hero': 'linear-gradient(to bottom, #000000 0%, #200D42 34%, #4F21A1 65% ,#A46EDB 82%)',
      'gradient-radial': 'radial-gradient( #000000 82%, #9560EB 100%)',
      'gradient-bg': 'linear-gradient( #000000 0%, "rgba(93, 44, 168, 0.85)" 58%,  #000000 100%)',
    },
    extend: {},
  },
  plugins: [],
}
