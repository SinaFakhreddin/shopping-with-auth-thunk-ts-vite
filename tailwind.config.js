export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myTextScheme": `#718096`,
        "myTextSchemeLight": `#838383`,
        "borderBottom": `#252424`,
        "primary":"hsl(337,79%,60%)",
        "primaryLight":"hsl(337,79%,70%)",
        // "favList":"hsl(340,79%,90%)",
        "primaryDark":"hsl(337,79%,50%)",
        "footerColor":"hsl(337,79%,90%)",
      },
      maxWidth: {
        '9/10': '90%',
      }
      // boxShadow:{
      //   '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      //   }

    },
  },
  plugins: [],
}