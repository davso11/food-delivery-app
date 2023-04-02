/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '560px',
        lg: '1110px',
      },
      colors: {
        primary: {
          DEFAULT: '#4E60FF',
          light: '#F3F4FF',
          dark: '#2B2B43',
        },
        orange: {
          DEFAULT: '#FD6D22',
          light: '#FFF3ED',
        },
        grey: {
          DEFAULT: '#83859C',
          light: '#EDEEF2',
        },
      },
      gridTemplateColumns: {
        promotions: 'repeat(auto-fit, minmax(18rem, 1fr))',
        categories: 'repeat(auto-fit, minmax(6.25rem, 1fr))',
        restaurants: 'repeat(auto-fit, minmax(18rem, 1fr))',
      },
    },
  },
  plugins: [],
};
