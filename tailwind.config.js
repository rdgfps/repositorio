/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#0a0a0b',
          secondary: '#111114',
          card: '#16161a',
          border: '#1e1e24',
        },
        accent: {
          lime: '#c8f135',
          cyan: '#00e5cc',
          purple: '#9b5de5',
        },
        text: {
          primary: '#f0f0f2',
          secondary: '#7c7c8a',
          muted: '#3a3a44',
        },
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}
