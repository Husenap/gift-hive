// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FDF6EC", // Warm off-white
            foreground: "#11181C", // Dark contrast for readability
            primary: {
              foreground: "#000000",
              DEFAULT: "#F4A623", // Golden honey
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#A7E6A2", // Mint green 
            },
          },
        },
        dark: {
          colors: {
            background: "#11181C", // Deep charcoal
            foreground: "#FDF6EC", // Light warm text
            primary: {
              foreground: "#000000",
              DEFAULT: "#F4A623", // Golden honey
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#A7E6A2", // Mint green
            },
          },
        },
      },
    })
  ],
};