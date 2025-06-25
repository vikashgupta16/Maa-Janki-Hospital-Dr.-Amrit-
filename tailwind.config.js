/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fef7ed',
          100: '#fef1e0',
          200: '#fde4c5',
          300: '#fbd59d',
          400: '#f8c373',
          500: '#f5a84f',
          600: '#e8882b',
          700: '#c16a1f',
          800: '#9a541e',
          900: '#7c441d',
        },
        orange: {
          50: '#fff4e6',
          100: '#ffe4cc',
          200: '#ffc999',
          300: '#ffa366',
          400: '#ff7d33',
          500: '#ff5722',
          600: '#e64a19',
          700: '#cc3d14',
          800: '#b3300f',
          900: '#99230a',
        },
        babyBlue: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        }
      },
      fontFamily: {
        'hindi': ['Noto Sans Devanagari', 'Baloo Bhaina 2', 'sans-serif'],
        'english': ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-gentle': 'pulse 2s infinite',
        'bounce-gentle': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
