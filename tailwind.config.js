// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"  ],
  theme: {
    extend: {
      margin: {
        '120': '680px', 
        '140': '880px', 
        '18':'78px'
      },
      width: {
        '120': '680px', 
        '140': '880px', 
        '18':'78px'
      },
      colors : {
        transparent: 'transparent',
          page: '#ECDDE8',
          primary: '#533B4D', 
          secondary: '#F3CA40',
          background: '#F7F9F9',
          icons:'#CCCCCC',
          lightPrimary: "#F4F7FE",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'backAdmin': "url('/img/auth/loginAdmin.png')",
      }
    },
    
  },
  darkMode: "class",
  plugins: [nextui()]
}