import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       almostWhite: "hsl(0, 0%, 98%)",
       mediumGray: "hsl(0, 0%, 41%)",
       almostBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        epilogueReg : ["epilogue-regular", "sans-serif"],
        epilogueBold : ["epilogue-bold", "sans-serif"],
        epilogueSemiBold : ["epilogue-semiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
