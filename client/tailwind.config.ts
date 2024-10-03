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
        background: "#141414",      
        foreground: "#0C0C0C",    
        accent: "#BB86FC",         
        accentLight: "#D3B4FC",    
        accentDark: "#7D3FFF",    
        cadetGray: "#3A3B3C",      
        cadetGrayDark: "#252627",   
        graySeperator: "#2D2D2D", 
        bittersweet: "#FF6D6D",    
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
