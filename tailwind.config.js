/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#232663",
        black: "#040404",
        yellow: "#e3db3c",
        light: "#ededeb",
        gray: "#6b6b6b",
        dark: "#202124",
        white: "#F5F5F5",
        red: "#ff0055",
      },
      fontFamily: {
        lexenddeco: ["Lexend Deca", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
