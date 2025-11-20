export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        accent: '#C5F6FA', // dein Türkis-Akzent
        'fullhouse-dark': '#0E192E',
        'fullhouse-turquoise': '#30D5C8',
        'fullhouse-light': '#F8F9FA',
      },
      backgroundImage: {
        'dashboard-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F5FAFD 100%)',
      },
    },
  },
  plugins: [],
}
