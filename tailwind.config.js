/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Dark theme backgrounds
        dark: {
          900: '#0A0A0B', // Deepest black
          800: '#111113', // Primary background
          700: '#18181B', // Card background
          600: '#27272A', // Elevated surfaces
          500: '#3F3F46', // Borders
          400: '#52525B', // Muted elements
        },
        // Primary accent - Cyan
        accent: {
          DEFAULT: '#00D4FF',
          light: '#67E8F9',
          dark: '#00A8CC',
          muted: '#0891B2',
          glow: 'rgba(0, 212, 255, 0.15)',
        },
        // Secondary accent - Purple
        purple: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          muted: '#6D28D9',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        // Pillar-specific colors
        pillar: {
          apps: '#00D4FF',      // Cyan - We Build Apps
          transform: '#8B5CF6', // Purple - We Transform Businesses
          science: '#10B981',   // Emerald - We Solve Problems
        },
        // Text colors for dark theme
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
          inverse: '#18181B',
        },
        // Emerald for science pillar
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
        // Keep warm grays for compatibility
        warm: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Legacy brand colors (for gradual migration)
        brand: {
          primary: '#1e40af',
          secondary: '#1e3a8a',
          accent: '#3b82f6',
          teal: '#0891b2',
          logo: '#ff1217',
          orange: '#f97316',
          green: '#059669',
          success: '#10b981',
        },
      },
      fontSize: {
        // Display sizes for hero sections
        'display-4xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.03em' }], // 160px
        'display-3xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],  // 128px
        'display-2xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Standard scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'section': '8rem',
        'section-sm': '5rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow': '48rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow-cyan': '0 0 30px rgba(0, 212, 255, 0.3)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.3)',
      },
      backgroundImage: {
        // Basic gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cyan-purple': 'linear-gradient(135deg, #00D4FF 0%, #8B5CF6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0B 0%, #111113 100%)',

        // Sophisticated radial gradients
        'gradient-radial-accent-complex':
          'radial-gradient(circle at 40% 30%, rgba(0, 212, 255, 0.3) 0%, rgba(0, 212, 255, 0.15) 25%, transparent 60%)',
        'gradient-radial-purple-complex':
          'radial-gradient(circle at 60% 70%, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 65%)',
        'gradient-radial-emerald-complex':
          'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.1) 35%, transparent 70%)',

        // Layered transition gradients
        'gradient-layered-transition':
          'radial-gradient(ellipse at 20% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 55%), linear-gradient(180deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',

        // Conic accent gradient
        'gradient-conic-accent':
          'conic-gradient(from 0deg at 50% 50%, #00D4FF 0deg, #8B5CF6 120deg, #10B981 240deg, #00D4FF 360deg)',
      },
      animation: {
        'pulse': 'pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        // New carousel animations
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-out',
        'slide-out-left': 'slideOutLeft 0.3s ease-out',
        // New effect animations
        'text-reveal': 'textReveal 1s ease-out',
        'glow-shift': 'glowShift 3s ease-in-out infinite',
        'blob-shift': 'blobShift 20s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.7 },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Carousel slide animations
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        // Text reveal effect
        textReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        // Glow pulse with color shift
        glowShift: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.5))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))',
          },
        },
        // Blob shift animation for gradient blobs
        blobShift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.95)' },
          '75%': { transform: 'translate(40px, 10px) scale(1.02)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            'animation-duration': '0.01ms !important',
            'animation-iteration-count': '1 !important',
            'transition-duration': '0.01ms !important',
          }
        }
      });
    }
  ],
};
