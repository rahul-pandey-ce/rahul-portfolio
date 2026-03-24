/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#00E0FF",
          light: "#6EEFFF",
          dark: "#00B6E0",
        },
        tertiary: {
           DEFAULT: "#FC6767",
           light: "#FF9F9F",
           dark: "#D43F3F",
        },
        neon: {
          blue: "#00E0FF",
          purple: "#8B5CF6",
          cyan: "#00FFFF",
          pink: "#FF00FF",
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'neon-gradient': 'linear-gradient(to right, #8B5CF6, #00E0FF)',
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
