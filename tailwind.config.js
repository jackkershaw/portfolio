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
        sans: ["RealText", "sans-serif"],
        bold: ["RealText Bold", "sans-serif"],
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        "scroll-mobile": "scroll 5s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translate3d(-100%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
    function ({ addUtilities, theme, variants }) {
      const newUtilities = {
        ".animate-scroll": {
          animation: theme("animation.scroll"),
        },
        "@media (max-width: 640px)": {
          ".animate-scroll": {
            animation: theme("animation.scroll-mobile"),
          },
        },
      };

      addUtilities(newUtilities, variants("animation"));
    },
  ],
};
