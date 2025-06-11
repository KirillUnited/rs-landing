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
      // colors: {
      //   primary: {
      //     DEFAULT: "var(--color-primary)",
      //     foreground: "var(--color-primary-foreground)",
      //   },
      //   secondary: {
      //     DEFAULT: "var(--color-secondary)",
      //     foreground: "var(--color-secondary-foreground)",
      //   },
      // },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    require('@tailwindcss/typography'),
  ],
}

module.exports = config;