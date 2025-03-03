/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./src/assets/hero-section.png')",
      },
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        Karla: ["Karla", "sans-serif"],
      },
      fontSize: {
      '7xl': '5rem',
      '6xl': '4rem',
      '4xl': '2.5rem',
      '3xl': '2rem',
      },
      colors: {
        primary: "#E6E6E6",
        secondary: "#990F39",
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        slide: "slide .3s ease-out forwards",
        slidein: "slidein .3s ease-out forwards",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slide: {
          "0%": {
            left: "0",
          },
          "100%": {
            left: "100vw",
          },
        },
        slidein: {
          "0%": {
            right: "100vw",
          },
          "50%": {
            right: "50vw",
          },
          "100%": {
            right: "0",
          },
        },
      },
      flex: {
        card: "0 0 64px",
        wrapper: "0 0 48px",
      },
      screens: {
        mobile: "490px",
        tablet: "768px",
        desktop: "1440px",
      },
      width: {
        "fill-available": "-webkit-fill-available",
      },
    },
  },
  plugins: [],
};
