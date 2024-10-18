import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        nutito: ['var(--font-nutito)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        border: {
          DEFAULT: 'var(--border)',
          primary: 'var(--primary)',
        },
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          500: 'var(--primary-500)',
          400: 'var(--primary-400)',
          300: 'var(--primary-300)',
          200: 'var(--primary-200)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        'black-400': 'var(--black-400)',
        'black-500': 'var(--black-500)',
        'dark-1': 'var(--dark-1)',
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 2px)', // 10px
        lg: 'var(--radius)', // 8px
        md: 'calc(var(--radius) - 3px)', // 5px
        sm: 'calc(var(--radius) - 4px)', // 4px
      },
      boxShadow: {
        button: '0 1px 5px 0 rgba(0, 0, 0, 0.25)',
        'card-custom': '0 19.83px 49.08px 0 rgba(47, 50, 125, 0.1)',
        'dropdown-custom': '1px 1px 5px rgba(0, 0, 0, 0.25) !important',
        'nav-custom': '4px 0px 20px rgba(47, 50, 125, 0.1)',
        'main-admin': '0px 18.83px 47.08px rgba(47, 50, 125, 0.1)',
        'account-dropdown-inner': '0 18.83px 47.08px 0 rgb(47, 50, 125, 0.1)',
        'account-dropdown': '3px 5px 4px 0 rgb(0, 0, 0, 0.25)',
        'card-chart-custom': '0px 4px 10px 0 rgba(47, 50, 125, 0.25)',
      },
      screens: {
        xs: '400px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      width: {
        sidebar: 'var(--sidebar-width)',
        avatar: 'var(--font-size-avatar)',
      },
      height: {
        xs: 'var(--input-xs)',
        lg: 'var(--input-lg)',
        avatar: 'var(--font-size-avatar)',
        header: 'var(--header-height)',
        'fit-content': 'calc(100vh - var(--header-height) - 50px)',
      },
      padding: {
        sidebar: 'var(--sidebar-width)',
        'content-admin': 'var(--margin-content-admin)',
        'popup-body': 'var(--popup-body)',
      },
      margin: {
        'content-admin': 'var(--padding-content-admin)',
      },
      textColor: {
        input: {
          disabled: 'var(--input)',
        },
      },
      backgroundColor: {
        'content-admin': 'var(--background-content-admin)',
        'header-dark': 'var(--bg-header-dark)',
        menu: 'var(--black-500)',
        'default-400': 'var(--primary-400)',
        input: {
          disabled: 'var(--input-disabled)',
        },
      },
      minHeight: {
        'item-menu': 'var(--height-item-menu)',
      },
      borderColor: {
        gray: 'var(--input)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-animation-delay'),
  ],
};
export default config;
