/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1f242d',
        'gray-dark': '#323946',
        accent: '#0ef',
      },
    },
  },
  plugins: [],
}