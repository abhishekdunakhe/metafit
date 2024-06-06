/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#E30707',
        'secondary':'#FE1F09',
        'tertiary' : '#C9C9C9',
        'quaternary':'#9A9A9A',
      },
      fontFamily:{
        pop:["Poppins", "sans-serif"],
        mont:["Montserrat", "sans-serif"], 
      }

    },
  },
  plugins: [],
}

