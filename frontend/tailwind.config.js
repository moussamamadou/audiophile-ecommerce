const { colors } = require(`tailwindcss/defaultTheme`)

module.exports = {
  mode:'jit',
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  experimental:{
    applyComplexClasses: true
  },
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        secondary: "#fbaf85",
        neutral: "#F1F1F1",
        dark: "#0B0B0B",
        light: "#FAFAFA",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        tightest: "0.01em",
        tighter: "0.025em",
        tight: "0.05em",
        normal: "0.075em",
        wide: "0.1em",
        wider: "0.25em",
        widest: "1em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          md: "2rem",
        },
      },
    },
  },
}
