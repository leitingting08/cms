/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '768px',
        md: '1200px',
        lg: '1400px'
      },
      colors: {
        primary: '#FF005C',
        blue: '#00A3FF'
      },
      fontFamily: {
        primary: ['primary']
      }
    }
  },
  plugins: [require('tailwindcss-border-gradient-radius'), require('tailwindcss-animation-delay')]
}
