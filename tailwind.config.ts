import type { Config } from "tailwindcss";

/**
 * Palette is taken from the official Madal ICT Solutions Brand Identity
 * Guidelines: Deep Sky Blue #00C3FF (accent-500) and Dark Teal #02354C
 * (brand-900), plus white and black. The rest of each scale is derived by
 * holding that hue steady and stepping lightness/saturation, so both ramps
 * stay tonally consistent with their brand anchor.
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
        ink: "#18181b",
        brand: {
          50: "#f2f8fb",
          100: "#e6edf0",
          200: "#c8dce6",
          300: "#9ec0d0",
          400: "#649ab3",
          500: "#3a7894",
          600: "#1e5975",
          700: "#0a4a68",
          800: "#053c55",
          900: "#02354c",
          950: "#011a26",
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
        soft: "0 28px 70px -34px rgba(2, 53, 76, 0.32)",
        glow: "0 24px 55px -22px rgba(2, 53, 76, 0.4)",
        accent: "0 22px 48px -20px rgba(0, 195, 255, 0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(2, 53, 76, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 53, 76, 0.08) 1px, transparent 1px)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
