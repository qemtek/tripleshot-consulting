/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        },
      },
      colors: {
        blue: {
          '500-rgb': '59, 130, 246',
        },
        purple: {
          '500-rgb': '168, 85, 247',
        },
        green: {
          '500-rgb': '34, 197, 94',
        },
        orange: {
          '500-rgb': '249, 115, 22',
        },
        indigo: {
          '500-rgb': '99, 102, 241',
        },
        red: {
          '500-rgb': '239, 68, 68',
        },
        brown: {
          '500': '#3e2415',
          '600': '#331d11',
          '700': '#28170d',
        },
        tan: {
          '500': '#e8c598',
          '600': '#d9b689',
          '700': '#caa77a',
        },
      },
    },
  },
  plugins: [],
};
