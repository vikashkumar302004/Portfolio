/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        void: '#010409',
        deep: '#080d1a',
        surface: '#0d1424',
        elevated: '#131d31',
        violet: { DEFAULT: '#7c3aed', light: '#a78bfa' },
        indigo: { DEFAULT: '#6366f1' },
        cyan: { DEFAULT: '#22d3ee' },
        emerald: { DEFAULT: '#10b981' },
        primary: '#f8fafc',
        secondary: '#94a3b8',
        muted: '#475569',
        border: {
          subtle: 'rgba(99,102,241,0.12)',
          default: 'rgba(99,102,241,0.25)',
          glow: 'rgba(99,102,241,0.5)',
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(99,102,241,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)',
        'gradient-text': 'linear-gradient(135deg, #a78bfa, #818cf8, #67e8f9)',
        'dot-pattern': 'radial-gradient(rgba(99,102,241,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot': '32px 32px',
      },
    },
  },
  plugins: [],
}
