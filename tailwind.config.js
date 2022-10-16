/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d01818",
        secondary: "#253241",
        dark: "#121820",
        footerText: "#a9aeb3"
      },
      backgroundColor: {
        primary: "#d01818",
        secondary: "#253241",
        dark: "#121820",
        searchCartBg: "#f2f6f7",
        servicesBg: "#f1f5fa",
      },
      backgroundImage: {
        heroSectionBg: "url('/src/assets/HeroSection/rewon.jpg')",
        heroSectionBase: "url('/src/assets/HeroSection/base.png')",
        heroSectionAuto1: "url('/src/assets/HeroSection/auto-1.png')",
        heroSectionAuto2: "url('/src/assets/HeroSection/auto-2.png')",
        carDetail: "url('/src/assets/CarDetail/image.jpg')",
      },
    },
  },
  plugins: [],
};
