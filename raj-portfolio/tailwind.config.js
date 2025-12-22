/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
        lift: "0 16px 50px rgba(0,0,0,0.35)",
      },
      keyframes: {
        "gradient-shift": {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-6%, -4%, 0)" },
        },
      },
      animation: {
        "gradient-slow": "gradient-shift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
