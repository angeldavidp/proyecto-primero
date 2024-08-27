/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        title: ["Fraunces"],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

