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
        black: '#080808',
        deep: '#0f0f0f',
        card: '#141414',
        border: '#1e1e1e',
        white: '#f2ede6',
        muted: '#8a8478',
        accent: '#c8a96e',
        accent2: '#6b8f71',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Syne', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        scrollPulse: 'scrollPulse 2s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: 0.3, transform: 'scaleY(0.8)' },
          '50%': { opacity: 1, transform: 'scaleY(1)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
