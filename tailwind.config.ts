import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        3: "3rem",
        2.5: "2.5rem",
        2: "2rem",
        1.5: "1.5rem",
        1.2: "1.2rem",
        1: "1rem",
      },
      lineHeight: {
        3: "3rem",
      },
      colors: {
        color: "indigo",
      },
    },
  },
  plugins: [],
};
export default config;
