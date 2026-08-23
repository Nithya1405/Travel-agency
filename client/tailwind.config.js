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
          primary: '#B8860B',
          bright: '#D4A017',
          light: '#E5B832',
          pale: '#F5D67A',
        },
        charcoal: {
          dark: '#0B0F14',
          main: '#111827',
          light: '#1F2937',
        },
        offwhite: {
          main: '#F8F7F3',
          light: '#FAFAF8',
        },
        text: {
          primary: '#171717',
          muted: '#6B7280',
        },
        surface: {
          canvas: '#F8F7F3',
          card: '#FFFFFF',
          muted: '#F3F4F6',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(17, 24, 39, 0.06)',
        'premium': '0 10px 30px -4px rgba(17, 24, 39, 0.08), 0 4px 6px -2px rgba(17, 24, 39, 0.04)',
        'gold-glow': '0 0 25px rgba(184, 134, 11, 0.25)',
      },
    },
  },
  plugins: [],
}
