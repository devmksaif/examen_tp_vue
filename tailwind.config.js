// tailwind.config.js

module.exports = {
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Add all files where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example custom color
      },
    },
  },
  plugins: [],
}
