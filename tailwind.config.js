/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: "Bebas Neue",
        raleway: "Raleway",
      },
      colors: {
        dorado: "#1E3A8A",
        negrito: "#131313",
        negrito2: "#2f2f2f",
      },
    },
  },
  plugins: [],
};
