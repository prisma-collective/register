// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // For Next.js with App Router
    './pages/**/*.{js,ts,jsx,tsx}',  // For Next.js with Pages Router
    './components/**/*.{js,ts,jsx,tsx}',  // For components
    './src/**/*.{js,ts,jsx,tsx}',  // If you have a `src` folder
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
    },
  },
  plugins: [],
};
