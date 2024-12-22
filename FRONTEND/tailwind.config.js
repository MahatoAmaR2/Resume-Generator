/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        btnColor: "var(--btn-color)"
      },
      fontFamily: {
        sans: ["var(--font-family)", "sans-serif"],
      },
      spacing: {
        base: "var(--base-spacing)",
      },
    },
  },
  plugins: [],
};
