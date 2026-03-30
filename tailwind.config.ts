import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B3C5D',
        secondary: '#1ABC9C',
        accent: '#2ECC71',
        emergency: '#DC2626'
      }
    }
  },
  plugins: []
} satisfies Config;
