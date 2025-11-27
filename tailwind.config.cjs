/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation :{
        'loading-bar': 'loading .5s  linear infinite',
      },
      keyframes: {
        loading :{
          '0%':{
            transform: 'translateX(0%)'
          },
          '100%':{
            transform: 'translateX(100%)'
          },
        },
      },

     },
  },
  plugins: [],
};
