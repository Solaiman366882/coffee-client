/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      backgroundImage:{
        banner:`url('./src/assets/images/more/3.png')`
      }
    }
  },
  plugins: [require("daisyui")]
}
