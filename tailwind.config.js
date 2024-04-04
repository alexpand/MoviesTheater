/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      'height': {
        '136': '36rem',
      }
    },
  },
  plugins: [],
}

