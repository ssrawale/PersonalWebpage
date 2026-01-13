/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#FFFFFF',
        'dark-charcoal': '#FFFFFF',
        'dark-border': '#2a2a2a',
        'accent-blue': 'rgb(0, 0, 0)',
        'accent-blue-dark': 'rgb(0, 0, 0)',
        'text-primary': '#000000ff',
        'text-secondary': '#000000ff',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
}