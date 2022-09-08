/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightGray: "hsl(212, 45%, 89%)",
      grayishBlue: "hsl(220, 15%, 55%)",
      darkBlue: "hsl(218, 44%, 22%)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    screens: {
      xxs: "250px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
