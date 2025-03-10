/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#001C5A",
        grey: "#BCAFA6",
        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.inter],
      },
      fontSize: {
        title: [
          "50px",
          {
            lineHeight: "58px",
          },
        ],
        primaryheadline: [
          "60px",
          {
            lineHeight: "54px",
          },
        ],
        secondaryheadline: [
          "22px",
          {
            lineHeight: "54px",
          },
        ],
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
