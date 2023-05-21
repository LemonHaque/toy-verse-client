/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        "@keyframes aos-slide-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        ".aos-animate-slide-left": {
          animation: "aos-slide-left 20s ease-out",
        },
      });
    },
  ],
  daisyui: {
    styled: true, // Enable DaisyUI styling
    themes: true, // Enable DaisyUI themes
    base: true, // Enable base styles
    utils: true, // Enable DaisyUI utility classes
    logs: false, // Disable DaisyUI logs
    rtl: false, // Set to true for RTL support if needed
  },
};
