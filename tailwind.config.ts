import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/global/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "brand-green": "#8BD6C7",
      "brand-green-light": "#B8E3DE",
      "brand-green-dark": "#75b8ab",
      "brand-pink": "#F4BFCF",
      "brand-blue": "#3C6997",
      "brand-red": "#FF5151",
      "brand-purple": "#791E94",
      "brand-background": "#FEF9EC",
      "accent-1": "#EDEDED",
      "accent-2": "#666666",
    },
  },
  plugins: [],
};
export default config;
