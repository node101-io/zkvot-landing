import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AFEEEE", // Light cyan
        secondary: "#F6C1A6", // Light coral
        background: "#F6F6F6", // Light gray
        highlight: "#D5A6C4", // Light pink
        green: "#9BCA9C", // Light green
      },
      fontFamily: {
        sans: ["Atkinson Hyperlegible", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
