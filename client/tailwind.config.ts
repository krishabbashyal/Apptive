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
        background: "#f5f5f5",
        foreground: "#ffffff",
        accent: "#947BD6",
        accentLight: "#B8A0FF",
        accentDark: "#684FB1",
        cadetGray: "#7C828F",
        cadetGrayDark: "#45484F",
        graySeperator: "#e5e7eb",
        bittersweet: "#f25757",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
