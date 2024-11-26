/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'business-blue': '#1e40af',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
