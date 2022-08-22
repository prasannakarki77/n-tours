/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3DB9AA",
        primary_dark: "#309A8D",
        secondary: "#0AA",
        tertiary: "#2a2e35",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero-image.svg')",
        blog1: "url('/src/assets/everest.jpg')",
        blog2:
          "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
        tour1: "url('/src/assets/boudha.jpg')",
        tour2: "url('/src/assets/illam.jpg')",
        tour3: "url('/src/assets/karnali.jpg')",
        tour4: "url('/src/assets/pokhara.jpg')",
        tour5: "url('/src/assets/swambhu.jpg')",
      },
      fontFamily: {
        common: ["Josefin Sans"],
        special: ["Permanent Marker"],
      },
    },
  },
  plugins: [],
};
