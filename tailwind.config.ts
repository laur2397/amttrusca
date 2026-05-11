import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0f1c",
          800: "#0f1626",
          700: "#162033",
          600: "#1d2a44",
        },
        accent: {
          50: "#eaf5ff",
          100: "#cfe7ff",
          200: "#9fcfff",
          300: "#6db5ff",
          400: "#3d99ff",
          500: "#1c7eea",
          600: "#0f63c4",
          700: "#0a4d99",
          800: "#093e7a",
          900: "#0a335f",
        },
        gold: {
          400: "#e7c879",
          500: "#d4af55",
          600: "#b48f3b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(28,126,234,0.18), transparent 60%)",
        "premium-gradient":
          "linear-gradient(135deg, #05070d 0%, #0a1530 45%, #0f63c4 100%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        glass:
          "0 10px 40px -10px rgba(28,126,234,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        gold: "0 12px 40px -10px rgba(212,175,85,0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-x": "gradient-x 12s ease infinite",
        "fade-in-up": "fadeInUp .8s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
