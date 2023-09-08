/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "amazon-navbar": "#232F3E",
        "amazon-logobar": "#131921",
      },
    },
  },
  plugins: [],
};
