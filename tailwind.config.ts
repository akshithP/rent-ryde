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
        primary: "#E35973" /* RED */,
        secondary: "#2F2F9B" /* Light PURPLE */,
        secondary2: "#24257D" /* Dark PURPLE */,
        textPrimary: "white" /* WHITE */,
        textSecondary: "#8D8D8D" /* Grey */,
      },
      fontFamily: {
        plusJakartaSans: ["var(--font-plusJakartaSans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
