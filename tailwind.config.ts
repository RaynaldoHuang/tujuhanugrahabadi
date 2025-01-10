import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        ubuntu: ['Ubuntu'],
      },
      svg: {
        shapeRendering: "geometricPrecision",
        textRendering: "optimizeLegibility",
      },
    },
  },
  plugins: [],
} satisfies Config;
