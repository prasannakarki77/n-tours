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
        blog1:
          "url('https://images.unsplash.com/photo-1544735716-ea9ef790f501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        blog2:
          "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
      },
      fontFamily: {
        common: ["Josefin Sans"],
        special: ["Permanent Marker"],
      },
    },
  },
  plugins: [],
};
