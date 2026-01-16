/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette moderne et sobre
        primary: {
          DEFAULT: '#0a0e27',
          light: '#151b35',
          dark: '#060914',
        },
        secondary: {
          DEFAULT: '#1a1f3a',
          light: '#242b4a',
          dark: '#0f1425',
        },
        accent: {
          blue: '#60a5fa',
          purple: '#a78bfa',
          cyan: '#22d3ee',
          gradient: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#64748b',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0e27 0%, #151b35 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(96, 165, 250, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(96, 165, 250, 0.3)',
        'glow-md': '0 0 25px rgba(96, 165, 250, 0.4)',
        'glow-lg': '0 0 40px rgba(96, 165, 250, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}