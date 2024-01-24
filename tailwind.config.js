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
    },
  },
  plugins: ["prettier-plugin-tailwindcss", "tailwind-classes-sorter"],
};
