/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // 100: "#f0f9ff",
          // 200: "#e0f2fe",
          // 300: "#bae6fd",
          // 400: "#7dd3fc",
          // 500: "#38bdf8",
          // 600: "#0ea5e9",
          // 700: "#0284c7",
          // 800: "#0369a1",
          100: "#EBEAEC",
          200: "#EEE3FF",
          700: "#8E4EED",
          800: "#39323E",
          900: "#130D1A",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, #BD91FF -4.87%, #FFFFFF 98.06%)", // 90deg for left-to-right
      },
    },
  },
  plugins: [],
};
