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
        accentTransition: "#a56dfd",         
        accentLight: "#D3B4FC",    
        accentDark: "#7D3FFF", 
        cadetGrayLight: "#6A6B6C",   
        cadetGray: "#3A3B3C",      
        cadetGrayDark: "#252627",   
        graySeperator: "#2D2D2D", 
        bittersweetLight: "#FF9D9D",
        bittersweet: "#FF6D6D",    
        bittersweetDark: "#E05555",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        shake: 'shake 0.3s ease-in-out',
      },
    },
  },
  plugins: [

  ],
};

export default config;
