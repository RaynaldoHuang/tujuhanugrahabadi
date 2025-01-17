import type { Config } from "tailwindcss";

import {heroui} from "@heroui/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
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
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: "#1D2088"
        }
      }
    }
  })],
} satisfies Config;
