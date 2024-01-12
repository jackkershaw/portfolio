/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{mjs,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // adding my favourite blue, yves klein blue //
        ykb: {
          DEFAULT: "#002FA7",
          50: "#608CFF",
          100: "#4B7EFF",
          200: "#2260FF",
          300: "#0046F9",
          400: "#003AD0",
          500: "#002FA7",
          600: "#001F6F",
          700: "#000F37",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
