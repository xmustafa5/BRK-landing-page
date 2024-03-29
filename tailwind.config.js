/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
        colors: {
          blue: { 
            '120': '#091242' 
          },
          yellow:{
            '120': '#FABA20'
          },
          black:{
            '120': '#1C1F35'
          },
          gray:{
            '120':'#666C89'
          }
    }
    },
  },
  plugins: [],
}
