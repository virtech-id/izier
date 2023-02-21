/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow-sm': '0 0 10px rgba(76, 195, 138, 1)',
        'glow-md': '0 0 20px rgba(76, 195, 138, 1)',
      },
    },
    fontFamily: {
      'inter': ['Inter', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}
