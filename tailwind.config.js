/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "ui-sans-serif", "system-ui"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
