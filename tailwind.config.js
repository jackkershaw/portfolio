const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ykb: "#002588",
        ykbdark: "#001F6F",
        ykblight: "#003AD0",
        orangepeel: "#FFA630",
      },
      fontFamily: {
        sans: ["RealText", "sans-serif"],
        bold: ["RealText Bold", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
  ],
};
