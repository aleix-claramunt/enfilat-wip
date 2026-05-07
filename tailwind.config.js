/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        enfilat: {
          blush: "#F9A8D4",
          pink: "#FBCFE8",
          petal: "#FDF2F8",
          butter: "#FFF7D6",
          sage: "#D8F5E9",
          sky: "#E0F2FE",
          ink: "#1F2937",
          cream: "#FFF7FB",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(157, 23, 77, 0.12)",
      },
      fontFamily: {
        heading: ["Georgia", "Cambria", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
