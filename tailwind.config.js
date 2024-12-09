/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily:{
      Popins:[ "Poppins", "sans-serif"] ,
      Albart:[ "Albert Sans", "sans-serif"]
    },
    boxShadow: {
      'hum': ['0px 2px 0px #fff'],
    },
  },
  plugins: [],
}