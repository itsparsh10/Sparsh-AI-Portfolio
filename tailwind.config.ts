import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
      colors: {
        base: {
          900: "#0B0B0C",
          800: "#111113",
          100: "#EDEEF0",
          50: "#F7F7F8",
        },
        pastel: {
          lilac: "#E6D7FF",
          lime: "#EAFCCB",
          saff: "#FFE08A",
          cream: "#FFF5E1",
          blue: "#D4E6F6",
        },
        accent: {
          indigo: "#5B63FF",
          coral: "#FF7A59",
          teal: "#00C2A8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-playfair)", ...fontFamily.serif],
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

