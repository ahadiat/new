/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      },
     
      screens: {
        'custom-smm': '320px',
        'custom-sm': '375px' ,
        'custom-md': '425px',
        'custom-lg': '625px',
      },

    },
  },
  plugins: [],
}
