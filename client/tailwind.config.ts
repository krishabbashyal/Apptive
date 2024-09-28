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
        cadetGray: "#8A919F",
        bittersweet: "#f25757",
      },
    },
  },
  plugins: [],
};
export default config;
