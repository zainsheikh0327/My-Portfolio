import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6EC0F6',
          dark: '#15419C',
          light: '#9FE4FF',
        },
        neon: '#6EC0F6',
        cosmic: {
          base: '#00000A',
          navy: '#020B34',
          glow: '#15419C',
          highlight: '#6EC0F6',
        },
        dark: {
          DEFAULT: '#00000A',
          light: '#020B34',
          lighter: '#06112F',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      boxShadow: {
        'cosmic-glow': '0 0 50px rgba(110, 192, 246, 0.35)',
        'cosmic-border': '0 0 0 1px rgba(110, 192, 246, 0.4)',
      },
      dropShadow: {
        'cosmic': '0 0 12px rgba(110, 192, 246, 0.65)',
      },
      backgroundImage: {
        'cosmic-grid':
          'radial-gradient(circle at 20% 20%, rgba(110, 192, 246, 0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(21, 65, 156, 0.35), transparent 40%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'cursor-glow': 'cursorGlow 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(110, 192, 246, 0.45)' },
          '100%': { boxShadow: '0 0 40px rgba(110, 192, 246, 0.75)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        cursorGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.5)', opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;





