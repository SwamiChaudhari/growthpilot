import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium color system
        bg: {
          primary: "#F8F7F4",
          secondary: "#FAFAF8",
          card: "#FFFFFF",
          dark: "#111827",
          navy: "#1E3A8A",
        },
        text: {
          primary: "#111827",
          secondary: "#5E6472",
          muted: "#9CA3AF",
          inverse: "#FFFFFF",
        },
        accent: {
          primary: "#2563EB",
          secondary: "#4F46E5",
          hover: "#1D4ED8",
          navy: "#1E3A8A",
        },
        border: {
          light: "#E5E7EB",
          DEFAULT: "#E5E7EB",
          hover: "#D1D5DB",
        },
        success: "#16A34A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        premium: "0 20px 60px -15px rgba(17, 24, 39, 0.1)",
        "premium-lg": "0 25px 80px -20px rgba(17, 24, 39, 0.15)",
        cta: "0 8px 30px rgba(37, 99, 235, 0.25)",
        "cta-hover": "0 12px 40px rgba(37, 99, 235, 0.35)",
        subtle: "0 2px 8px rgba(0,0,0,0.04)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(170deg, #F8F7F4 0%, #EEEDF2 50%, #F5F4F1 100%)",
        "gradient-section":
          "linear-gradient(180deg, #FFFFFF 0%, #F8F7F4 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "bounce-gentle": "bounce-gentle 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
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
