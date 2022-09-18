module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontSize:{
        sm: ['14px'],
      },
      margin:{
        xll:['40px'],
      },
      colors: {
        starGreen: "#D4E9E2",
        deepGreen: "#006241",
        lightText: "rgb(0,0,0,0.58)",
        titleText:"rgb(0,0,0,0.87)",
      },
    },
  },
  plugins: [],
}
