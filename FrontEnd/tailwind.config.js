/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",            // if you have one
      "./src/**/*.{js,ts,jsx,tsx}" // all JS/TS files in src
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FFCE1A',
          secondary: '#0D0842',
          blackBG: '#F3F3F3',
          favorite: '#FF5841', // lowercase to match Tailwind naming
        },
      },
    },
    plugins: [],
  }
  