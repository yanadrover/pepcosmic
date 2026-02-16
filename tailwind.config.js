/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Rye', 'serif'], // Example rustic font
      },
      colors: {
        'cosmic-blue': '#0a0a20',
        'starlight': '#e0e0ff',
        'rustic-earth': '#8b4513',
      },
      backgroundImage: {
        'cosmic-pattern': "url('/cosmic-bg.jpg')", // Placeholder
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
