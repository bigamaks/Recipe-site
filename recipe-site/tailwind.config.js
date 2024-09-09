/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Young Serif", "serif"],
        paragraphFont: ["Outfit", "sans-serif"]
      },
    },
  },
  plugins: [],
}

