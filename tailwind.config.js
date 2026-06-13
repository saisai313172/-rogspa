/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff8ea',
        rice: '#fffdf7',
        turmeric: '#f2b705',
        spice: '#c7351f',
        leaf: '#3f6b45',
        ink: '#2b2118',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 18px 45px rgba(102, 63, 22, 0.12)',
      },
    },
  },
  plugins: [],
};
