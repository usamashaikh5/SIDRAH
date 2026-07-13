/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#faf9f6',
          elevated: '#f4f1ea',
          gold: '#C9A96E',
          goldLight: '#D4B87A',
          goldDark: '#9E8148',
          text: '#1c1a17',
          textSecondary: '#5a544c',
          textMuted: '#9c958a',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        cursive: ['Great Vibes', 'cursive'],
      }
    },
  },
  plugins: [],
}
