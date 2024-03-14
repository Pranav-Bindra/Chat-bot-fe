/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
      },
      width: {
        '15': '3.75rem', // 60px if 1rem = 16px
      },
      colors: {
        customOrange: '#F9D423',
        customRed: '#FF4E50',
      }
    },
  },
  plugins: [],
}

