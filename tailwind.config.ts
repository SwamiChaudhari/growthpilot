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
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#D4AF37",
          500: "#D4AF37",
          600: "#B8960C",
          700: "#92750A",
          800: "#6B5507",
          900: "#4A3A05",
        },
        dark: {
          50: "#f8f8f8",
          100: "#e0e0e0",
          200: "#c0c0c0",
          300: "#a0a0a0",
          400: "#808080",
          500: "#606060",
          600: "#4a4a4a",
          700: "#333333",
          800: "#1A1A1A",
          900: "#0A0A0A",
        },
        charcoal: "#1A1A1A",
        rich: "#0A0A0A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 40px rgba(212, 175, 55, 0.15)",
        "gold-lg": "0 0 60px rgba(212, 175, 55, 0.25)",
        premium: "0 20px 60px -15px rgba(10, 10, 10, 0.15)",
        "premium-lg": "0 25px 80px -20px rgba(10, 10, 10, 0.25)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #F4E4A6 50%, #D4AF37 100%)",
        "gradient-dark": "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)",
        "gradient-hero": "linear-gradient(160deg, #0A0A0A 0%, #1A1A1A 40%, #0A0A0A 100%)",
        "gradient-section": "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)",
        "gradient-cta": "linear-gradient(135deg, #D4AF37 0%, #B8960C 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        counter: "count-up 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)" },
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
        glow: {
          from: { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          to: { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
        },
        "count-up": {
          from: { opacity: "0", transform: "scale(0.5)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
