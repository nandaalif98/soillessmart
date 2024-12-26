/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3CB018',
        'secondary': '#303030',
        'tertiary': '#81868C',
        'title':'#595959',
        'other1': '#F0F9ED',
      }
    },
  },
  plugins: [],
}

