import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#CEFF06",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#FCFBFC",
          foreground: "#000000",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    require('@tailwindcss/typography'),
  ],
}

module.exports = config;