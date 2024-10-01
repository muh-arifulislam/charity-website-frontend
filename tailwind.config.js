/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6D6D",
        },
        secondary: {
          DEFAULT: "#77D7D3",
        },
        accent: {
          DEFAULT: "#2E4049",
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
    },
  },
  plugins: [],
};
