/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.5s ease-in-out forwards',
        'fade-up-delay-1': 'fadeUp 0.5s ease-in-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.5s ease-in-out 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.5s ease-in-out 0.6s forwards',
        'fade-up-delay-4': 'fadeUp 0.5s ease-in-out 0.8s forwards',
      },
      keyframes: {

        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

