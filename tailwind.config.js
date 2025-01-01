/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins : ["Poppins"]
      },
      colors: {
        primary: "#FE5D26", // Customize your primary color
        "primary-dark": "#4338ca",
      },
    },
  },
  plugins: [],
}

