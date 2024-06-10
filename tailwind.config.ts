import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shadowGradient": "linear-gradient(0deg, #ffffff 0%, #ffffff 5%, rgba(255,255,255,0) 100%)",
        "shadowGradientDark": "linear-gradient(0deg, #000 0%, #000 20%, rgba(255,255,255,0) 100%)",
        "bodyGradient": "linear-gradient(90deg, rgba(15,25,35,0.8547794117647058) 0%, rgba(51,57,62,0.6166841736694677) 65%, rgba(224,212,191,0.4598214285714286) 100%)",
        "bodyGradientDark": "linear-gradient(90deg, rgba(15,25,35,0.9304096638655462) 0%, rgba(51,57,62,0.7147233893557423) 80%, rgba(164,162,157,0.7371323529411764) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
