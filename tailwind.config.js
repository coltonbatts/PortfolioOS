/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brutalist minimalism color palette
      colors: {
        black: '#000000',
        white: '#ffffff',
        'light-gray': '#f5f5f5',
      },
      // Typography system
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica', 'Arial', 'sans-serif'],
      },
      // Standard 2xl border radius for brutalist aesthetic
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
