import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#050509',
        surface: '#0B0B12',
        accentneongreen: '#7CFF90',
        'primary-foreground': '#E5E6EB',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 255, 144, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
