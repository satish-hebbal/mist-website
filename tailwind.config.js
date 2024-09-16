/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Architects Daughter', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      fontWeight: {
        light: '300', // Light
        regular: '400', // Regular
        medium: '500', // Medium
        semibold: '600', // Semi-bold
        bold: '700', // Bold
      },
    },
  },
  plugins: [],
}
