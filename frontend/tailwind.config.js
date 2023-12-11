/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainColor: {
          700: '#25343E',
        },
        mainOrange: {
          600: '#FFA040',
        },
        mainBlue: {
          600: '#074C89',
        },
        cardColor: {
          800: '#1D2B35',
        },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      hueRotate: {
        360: '360deg',
      },
    },
  },
  plugins: [],
}
