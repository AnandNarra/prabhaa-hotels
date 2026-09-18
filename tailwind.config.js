/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8EF',
          100: '#F6F0D8',
          200: '#EDE0B1',
          300: '#E1CC83',
          400: '#D4AF37', // Brand Luxury Gold
          500: '#C5A059', // Classic Champagne Gold
          600: '#A88338',
          700: '#856627',
          800: '#644B1C',
          900: '#473413',
        },
        charcoal: {
          950: '#07080A',
          900: '#0D0F12',
          850: '#13161C',
          800: '#181C24',
          700: '#232833',
          600: '#323946',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F7F5EE',
          200: '#EEE9DB',
          300: '#DDD5BE',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F6F0D8 0%, #D4AF37 50%, #A88338 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)',
        'dark-glass': 'linear-gradient(180deg, rgba(24, 28, 36, 0.75) 0%, rgba(13, 15, 18, 0.85) 100%)',
        'radial-glow': 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
      }
    },
  },
  plugins: [],
}
