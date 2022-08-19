module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'gray-light': '#A9A9A9',
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          hover: 'var(--color-text-hover)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-hover': 'var(--color-fill-hover)',
        },
      },
      borderColor: {
        skin: {
          base: 'var(--color-border)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],

  // screens: {
  //   sm: '480px',
  //   md: '768px',
  //   lg: '976px',
  //   xl: '1440px',
  // },
  // colors: {
  //   'blue': '#1fb6ff',
  //   'purple': '#7e5bef',
  //   'pink': '#ff49db',
  //   'orange': '#ff7849',
  //   'green': '#13ce66',
  //   'yellow': '#ffc82c',
  //   'gray-dark': '#273444',
  //   'gray': '#8492a6',
  //   'gray-light': '#d3dce6',
  // },
  // fontFamily: {
  //   sans: ['Graphik', 'sans-serif'],
  //   serif: ['Merriweather', 'serif'],
  // },
  // extend: {
  //   spacing: {
  //     '128': '32rem',
  //     '144': '36rem',
  //   },
  //   borderRadius: {
  //     '4xl': '2rem',
  //   }
  // }
};
