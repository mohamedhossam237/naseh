/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#fef3c7",
          800: "#854d0e",
        },
      },
    },
  },  
  plugins: [],
  
};
