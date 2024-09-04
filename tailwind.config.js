/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vazir: ['vazir'],
    },
    container: {
      center: true,

      padding: '1rem',

      screens: {
        sm: '600px',
        md: '728px',
        lg: '950px',
        xl: '1140px',
        '2xl': '1396px',
      },

    },
    extend: {
      boxShadow: {
        'dxl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements', nocompatible: true }),
  ],
}

