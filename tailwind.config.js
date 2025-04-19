module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // adjust as needed
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient-y': 'gradient-y 10s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': 'left center',
          },
          '50%': {
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-position': 'center top',
          },
          '50%': {
            'background-position': 'center bottom',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-position': 'left top',
          },
          '50%': {
            'background-position': 'right bottom',
          },
        },
      },
    },
  },
  plugins: [],
}
