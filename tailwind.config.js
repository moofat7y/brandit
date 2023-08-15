/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#5D6777",
          200: "#4D5869",
          300: "#3B475A",
          400: "#273549",
          500: "#112137",
          600: "#0F1E32",
          700: "#0E1B2D",
          800: "#0D1929",
          900: "#0C1725",
        },
        secondary: {
          100: "#FFD556",
          200: "#FFD145",
          300: "#FFCC32",
          400: "#FFC71E",
          500: "#FFC107",
          600: "#B57B0A",
          700: "#90580C",
          800: "#83500B",
          900: "#77490A",
        },
        dark: {
          100: "#747474",
          200: "#666666",
          300: "#575757",
          400: "#464646",
          500: "#333333",
          600: "#2E2E2E",
          700: "#2A2A2A",
          800: "#262626",
          900: "#232323",
        },
        gray: {
          100: "#DCDCDC",
          200: "#D9D9D9",
          300: "#D5D5D5",
          400: "#D1D1D1",
          500: "#CCCCCC",
          600: "#B9B9B9",
          700: "#A8A8A8",
          800: "#999999",
          900: "#8B8B8B",
        },
      },
    },
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
