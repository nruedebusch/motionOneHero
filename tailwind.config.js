/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Arial', 'sans-serif']
      },
      fontSize: {
        'huge': ['18.75rem', '18.75rem']
      },
      colors: {
        'primary': {
          '500': '#0A140A',
          '400': '#1B341E',
          '300': '#285125',
          '200': '#7B9B65',
          '100': '#92B17A'
        },
        'light': {
          '100': '#E8DEBF',
          '300': '#C7AC68'
        },
        'orange': {
          '400': '#7E431E',
          '300': '#AA6132'
        }
      },
      backgroundImage: {
        'hero-fade': 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(27, 52, 30, 0.5) 100%), linear-gradient(90deg, #0A140A 7.04%, rgba(10, 20, 10, 0) 27.38%, rgba(10, 20, 10, 0) 80.63%, #0A140A 93.36%);'
      }
    },
  },
  plugins: [],
}
