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
          50: "#effaff",
          100: "#d8f4ff",
          200: "#b8ebff",
          300: "#82dcff",
          400: "#47c5ff",
          500: "#159de9",
          600: "#0a7cc4",
          700: "#0b629b",
          800: "#104f7d",
          900: "#123f64",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(15, 23, 42, 0.18)",
        glow: "0 20px 45px -20px rgba(21, 157, 233, 0.35)",
        accent: "0 20px 45px -20px rgba(249, 115, 22, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
