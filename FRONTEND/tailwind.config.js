/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary : "var(--tertiary-color)",
        btnColor: "var(--btn-color)"
      },
      fontFamily: {
        woff: ['font1', 'sans-serif'],
      },
      spacing: {
        base: "var(--base-spacing)",
      },
    },
  },
  plugins: [],
};
