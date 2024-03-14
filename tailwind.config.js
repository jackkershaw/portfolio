/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{mjs,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // adding my favourite blue, yves klein blue //
        ykb: "#002FA7",
        orangepeel: "#FFA630",
      },
      fontFamily: {
        sans: ["Unica", "Helvetica", "sans-serif"],
        bold: ["Unica Bold", "Helvetica Bold", "sans-serif"],
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    "tailwind-classes-sorter",
    require("@tailwindcss/typography"),
  ],
};
