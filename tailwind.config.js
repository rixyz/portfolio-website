/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
