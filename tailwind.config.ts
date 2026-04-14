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
          50: "#eef3f8",
          100: "#d5e1ee",
          200: "#b1c6da",
          300: "#86a2c0",
          400: "#5b7ea3",
          500: "#385f84",
          600: "#244768",
          700: "#173650",
          800: "#102b41",
          900: "#0a2540",
        },
        accent: {
          50: "#fff4e8",
          100: "#fee4c7",
          200: "#fdcb93",
          300: "#faab5f",
          400: "#f8902d",
          500: "#f57c00",
          600: "#d86800",
          700: "#ae5204",
          800: "#8d440b",
          900: "#73390d",
        },
      },
      boxShadow: {
        soft: "0 28px 70px -32px rgba(10, 37, 64, 0.24)",
        glow: "0 24px 55px -22px rgba(10, 37, 64, 0.32)",
        accent: "0 22px 48px -20px rgba(245, 124, 0, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(10, 37, 64, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 37, 64, 0.08) 1px, transparent 1px)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
