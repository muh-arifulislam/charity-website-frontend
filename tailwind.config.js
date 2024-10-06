/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6D6D",
          50: "#ffa7a7",
          100: "#ff9999",
          200: "#ff8a8a",
          300: "#ff7c7c",
          400: "#ff6d6d",
          500: "#e66262",
          600: "#cc5757",
          700: "#b34c4c",
          800: "#994141",
        },
        secondary: {
          DEFAULT: "#77D7D3",
          50: "#ade7e5",
          100: "#a0e3e0",
          200: "#92dfdc",
          300: "#85dbd7",
          400: "#77D7D3",
          500: "#6bc2be",
          600: "#5faca9",
          700: "#539794",
          800: "#47817f",
        },
        accent: {
          DEFAULT: "#2E4049",
          50: "#828c92",
          100: "#6d7980",
          200: "#58666d",
          300: "#43535b",
          400: "#2e4049",
          500: "#293a42",
          600: "#25333a",
          700: "#202d33",
          800: "#1c262c",
        },
      },
      backgroundImage: {
        "overlay-primary":
          "linear-gradient(to bottom, rgba(255, 109, 109, 0.9),  rgba(255, 109, 109, 0.9))",
        "overlay-secondary":
          "linear-gradient(to bottom, rgba(119, 215, 211, 0.9), rgba(119, 215, 211, 0.9))",
        "overlay-accent":
          "linear-gradient(to bottom, rgba(46, 64, 73, 0.9), rgba(46, 64, 73, 0.9))",
      },
      fontSize: {
        h1: "40px",
        h2: "35px",
        h3: "30px",
        h4: "25px",
        h5: "22px",
        h6: "20px",
      },
    },
  },
  plugins: [],
};
