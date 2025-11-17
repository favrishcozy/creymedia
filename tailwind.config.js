/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0B1C26',
        brand: {
          DEFAULT: '#FF8A00',
          light: '#FFB566'
        },
        mint: '#7CF1D1',
        headline: '#FFFFFF',
        muted: '#A0A6AD'
      },
      backgroundColor: {
        'navy': '#0B1C26',
      },
      textColor: {
        'navy': '#0B1C26',
        'brand': '#FF8A00',
        'mint': '#7CF1D1',
        'muted': '#A0A6AD',
        'headline': '#FFFFFF'
      },
      borderColor: {
        'white/6': 'rgba(255, 255, 255, 0.06)',
      },
      borderRadius: {
        'xl18': '18px'
      },
      boxShadow: {
        'btn': '0 8px 24px rgba(0,0,0,0.45)',
        'card': '0 10px 30px rgba(2,6,23,0.5)'
      },
      maxWidth: {
        'container': '1280px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};