import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFBF9",
        terracotta: {
          DEFAULT: "#7BA966",
          light: "#A5C898",
          dark: "#5B8A48",
        },
        sage: {
          DEFAULT: "#5B4A8A",
          light: "#8A7DB3",
          dark: "#42366A",
        },
        charcoal: "#2D312E",
        softgray: "#EEF1EC",
        peach: "#C8E6B8",
        powder: "#D8D2EC",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Cabinet Grotesk", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.6" }],
        base: ["16px", { lineHeight: "1.7" }],
        lg: ["20px", { lineHeight: "1.6" }],
        xl: ["28px", { lineHeight: "1.4" }],
        "2xl": ["40px", { lineHeight: "1.2" }],
        "3xl": ["64px", { lineHeight: "1.1" }],
        "4xl": ["96px", { lineHeight: "1.0" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },
      transitionTimingFunction: {
        organic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
export default config;
