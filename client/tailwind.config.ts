import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        foreground: "#141414",
        accent: "#BB86FC",
        spacer: "#3C3C3C",
        danger: "#E05555",
        accentHighlight: "#1E1925",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        "fade-in-up-bounce": {
          "0%": {
            opacity: "0",
            transform: "translateY(64px)",
            filter: "blur(8px)",
          },
          "75%": {
            opacity: "1",
            transform: "translateY(-32px)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },

        "fade-in-left-bounce": {
          "0%": {
            opacity: "0",
            transform: "translateX(64px)",
            filter: "blur(8px)",
          },
          "75%": {
            opacity: "1",
            transform: "translateX(-32px)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
            filter: "blur(0)",
          },
        },

        "fade-in-right-bounce": {
          "0%": {
            opacity: "0",
            transform: "translateX(-64px)",
            filter: "blur(8px)",
          },
          "75%": {
            opacity: "1",
            transform: "translateX(32px)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
            filter: "blur(0)",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
          },
        },

        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(64px)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
        "fade-in-up-bounce": "fade-in-up-bounce 0.3s ease-in-out 0.5s forwards",
        "fade-in-left-bounce": "fade-in-left-bounce 0.3s ease-in-out 0.5s forwards",
        "fade-in-right-bounce": "fade-in-right-bounce 0.3s ease-in-out 0.5s forwards",
        "fade-in-up": "fade-in-up 0.3s ease-in-out 0.5s forwards",
        "fade-in": "fade-in 0.3s ease-in-out 0.5s forwards",
      },
      animationDelay: {
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "900": "900ms",
        "1000": "1000ms",
        "1200": "1200ms",
        "1400": "1400ms",
        "1600": "1600ms",
        "1800": "1800ms", 
        "2000": "2000ms",
        "2200": "2200ms",
        "2400": "2400ms",
        "2600": "2600ms",
        "2800": "2800ms",
        "3000": "3000ms",
        "3200": "3200ms",
        "3400": "3400ms",

      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const values = theme("animationDelay") as Record<string, string>;
      const utilities = Object.entries(values).map(([key, value]) => ({
        [`.animation-delay-${key}`]: { animationDelay: value },
      }));
      addUtilities(utilities);
    }),
  ],
};

export default config;
