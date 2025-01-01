import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#273043",
        foreground: "#35415A",
        primary: "#EFF6EE",
        secondary: "#5F6681",
        hover: "#8A90A8",
      },
    },
  },
  plugins: [],
} satisfies Config;
