/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["../**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        "brand-color": "#ffbd48",
        "gray-10": "#fefbf4",
        "gray-20": "#fff5de",
        "dark-10": "#2e2e2e",
        "light-10": "#ffffff",
        "red-10": "#ff3536",
        "green-10": "#60bb28",
        "yellow-10": "#ffbd48",
      },
    },
    fontFamily: {
      inter: ["Inter, sans-serif"],
    },
  },
  plugins: [],
};
