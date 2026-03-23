/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#4E4E4E',
        'mid-grey': '#BBBABA',
        'light-grey': '#CECECE',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        body: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
