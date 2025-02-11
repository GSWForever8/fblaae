/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#ffd866',
        'golden-light': '#ffe399',
        'purple': '#7030a0',
        'purple-dark': '#5b2682',
        'purple-light': '#8c47c2',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'scroll': 'scroll 30s linear infinite',
        'scroll-pause': 'scroll 30s linear infinite paused',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      }
    },
  },
  plugins: [],
}

