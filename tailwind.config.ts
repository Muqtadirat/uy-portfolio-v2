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
        "primary-blue": "#521BFF",
        "greyScale-10": "#191919",
        "greyScale-30": "#4D4D4D",
        "greyScale-40": "#666666",
        "greyScale-90": "#E6E6E6",
        "greyScale-97": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
export default config;
