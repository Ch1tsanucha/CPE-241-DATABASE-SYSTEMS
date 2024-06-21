/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lora:"'Lora',serif",
        Jacquard:["Jacquard 12 Charted","system-ui"],
        Jersey:["Jersey 15", "sans-serif"],
        custom:["CustomFont","sans-serif"],
        rubik:["rubik","sans-serif"],

      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'Chosen':'#825DBA',
        'Purplekbutton':'#AA79F9',
        'Reserves':'#712241',
        'Empty':'#E8DAFF',
        'Nav':'#210D3E',
        'Blackbutton':'#1A1A1A',
        'Fontpurple':'#4F1E9E',
      },
    },
  },
  plugins: [],
}