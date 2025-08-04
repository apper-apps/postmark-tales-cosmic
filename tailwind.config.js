/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F5E8D7',
        'navy-blue': '#1A2A44',
        'maroon': '#8B4513',
        'gold': '#D4A017',
        'text-gray': '#666666',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
        'gradient-yellow': 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
        'gradient-pink': 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}