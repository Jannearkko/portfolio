/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      body: ['"Inter"', 'system-ui', 'sans-serif'],
      heading: ['"Merriweather"', 'Georgia', 'serif'],
    },
    extend: {
      colors: {
        surface: {
          950: '#08080c',
          900: '#0f0f14',
          800: '#16161f',
          700: '#1f1f2b',
          600: '#2a2a38',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          muted: '#1e3a5f',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
