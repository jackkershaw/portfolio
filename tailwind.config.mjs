/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ykb: "#002FA7",
        orangepeel: "#FFA630",
      },
      fontFamily: {
        unica: ["Unica", "Helvetica", "sans-serif"],
        "unica-bold": ["Unica Bold", "Helvetica Bold", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", "tailwind-classes-sorter"],
};
