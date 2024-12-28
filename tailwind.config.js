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
  },
  plugins: [ 
    // require('@tailwindcss/line-clamp'),
  ],
}