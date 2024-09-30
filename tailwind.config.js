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
    },
  },
  plugins: [],
};
