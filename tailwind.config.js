/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "custom-yellow": "#003366", 
        "custom-gray": "#F1F1F1", 
        'custom-blue': "#004aad", 
        'dark-blue': "#003366"
      }, 
      fontFamily: {
        'Resolve': ["Resolve", "sans-serif"], 
        'Cinzel': ["Cinzel","sans-serif"], 
        "Lora": ["Lora", "sans-serif"], 
        "Helvetica":["Helvetica", "sans-serfi"]
      }, 
      height:{
        "inner-circle": "18.9rem", 
        "mobile-inner-circle": "14rem"
      }, 
      width: {
         "inner-circle": "18.9rem", 
         "mobile-inner-circle": "14rem"
      }, 
      gridTemplateColumns:{
        'my-2': "1fr 5fr", 

      }, 
      backgroundImage:{
        'gradient': 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0, 0, 0, 0.8),rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.5), rgba(0,0,0,0))'
      }
    },
  },
  plugins: [],
}

