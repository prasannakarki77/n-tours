/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3DB9AA",
        primary_dark: "#309A8D",
        secondary: "#0AA",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero-image.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        common: ["Josefin Sans"],
        special: ["Permanent Marker"],
      },
    },
  },
  plugins: [],
};
