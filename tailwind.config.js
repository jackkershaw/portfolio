const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ykb: "#002FA7",
        ykbdark: "#001F6F",
        ykblight: "#003AD0",
        orangepeel: "#FFA630",
      },
      fontFamily: {
        sans: ["Unica", "sans-serif"],
        "unica-bold": ["Unica Bold", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
  ],
};
