/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Monocraft', 'Courier New', 'monospace'],
        'minecraft': ['Monocraft', 'Courier New', 'monospace'],
        'default': ['Monocraft', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
} 