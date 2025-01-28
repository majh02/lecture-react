/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");


module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.css"
  ],
  darkMode: false,
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      white: colors.white,
      indigo: colors.indigo,
      yellow: colors.yellow,
      purple: colors.purple,
      lightGreen: '#8FFEBF',       // 사용자 정의 색상
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      rotate: ["last"]
    }
  },
  plugins: [],
}

