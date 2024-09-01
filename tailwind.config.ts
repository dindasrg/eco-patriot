import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      black: "#1E2329",
      white: "#FFFFFF",
      grey: {
        "DEFAULT": "#FDFDFF",
        50: "#FDFDFF",
        100: "#F1F1F4",
        500: "#BEC7D0",
      },
      primary: {
        DEFAULT: "#0AB494",
        50: "##D8FEF7",
        100: "#AFEFE3",
        300: "#5ACAB5",
        500: "#0AB494",
      },
      secondary: {
        DEFAULT: "#1778FB",
        50: "#DCEBFF",
        200: "#6CAAFF",
        500: "#1778FB",
      },
      disable: {
        100: "#E5E5E5",
        500: "#858E96",
      },
      danger: {
        500: "#FFDDD9",
        600: "#DC3545"
      }
    }
  },
  plugins: [],
};
export default config;
