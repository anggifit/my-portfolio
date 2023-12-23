/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#BD57FC',
      'secondary': '#F9F3FD',
      'text-primary': '#000000',
      'text-secondary': '#FFFFFF',
      'button-section': '#822178',
    },
  },
  plugins: [],
}

