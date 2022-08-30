module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container:{
      center: true,
    },

    extend: {
      fontFamily:{
        'sans': ['"Noto Sans TC"', 'cursive', 'system-ui', 'sans-serif'],
        'dis1': ['"Squada One"'],
        'dis2': ['"Paytone One"'],
      },
      colors:{
        'main':'#E6553B',
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}