import type { Config } from "tailwindcss";

/**
 * Palette is taken from the Madal ICT brand book (Madal logo011.pdf):
 *   navy  #011F4B  -> brand-900
 *   cyan  #00C3FF  -> accent-500
 *   light #E6EBF0  -> brand-100
 */
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
          50: "#f2f6fb",
          100: "#e6ebf0",
          200: "#c8d6e6",
          300: "#9eb4d0",
          400: "#6486b3",
          500: "#3a5f94",
          600: "#1e4275",
          700: "#0a3068",
          800: "#052755",
          900: "#011f4b",
          950: "#010f26",
        },
        accent: {
          50: "#e5f8ff",
          100: "#ccf2ff",
          200: "#99e5ff",
          300: "#66d8ff",
          400: "#33cbff",
          500: "#00c3ff",
          600: "#00a3d6",
          700: "#0082ab",
          800: "#006180",
          900: "#004155",
        },
      },
      boxShadow: {
        soft: "0 28px 70px -34px rgba(1, 31, 75, 0.32)",
        glow: "0 24px 55px -22px rgba(1, 31, 75, 0.4)",
        accent: "0 22px 48px -20px rgba(0, 195, 255, 0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(1, 31, 75, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(1, 31, 75, 0.08) 1px, transparent 1px)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
