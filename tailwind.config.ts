import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f4f3",
          100: "#e4e3df",
          200: "#c9c6bf",
          300: "#aaa59a",
          400: "#807b71",
          500: "#5c574f",
          600: "#403c36",
          700: "#2a2723",
          800: "#171512",
          900: "#070707",
        },
        accent: {
          50: "#fff5e8",
          100: "#ffe7c7",
          200: "#ffc98a",
          300: "#ffa447",
          400: "#ff8b1f",
          500: "#ff7a00",
          600: "#e46200",
          700: "#bd4b00",
          800: "#983b06",
          900: "#7c3207",
        },
      },
      boxShadow: {
        soft: "0 28px 70px -34px rgba(7, 7, 7, 0.28)",
        glow: "0 24px 55px -22px rgba(7, 7, 7, 0.35)",
        accent: "0 22px 48px -20px rgba(255, 122, 0, 0.42)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(7, 7, 7, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(7, 7, 7, 0.08) 1px, transparent 1px)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
