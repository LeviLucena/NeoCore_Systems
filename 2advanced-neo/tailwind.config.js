module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#39ff14',
        cyber: '#00ffff'
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-out both',
      },
    },
  },
  plugins: [],
};
