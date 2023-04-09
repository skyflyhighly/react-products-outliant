/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        app: '#636262'
      },
      backgroundColor: {
        'gray-warm': '#C4C4C4',
        'gray-cold': '#9D9D9D',
        app: '#ECECEC'
      }
    },
    fontFamily: {
      dmsans: ["dmsans", "sans-serif"]
    }
  },
  plugins: [],
}

