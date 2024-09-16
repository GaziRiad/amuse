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
          500: "#8E4EED",
          600: "#39323E",
          700: "#27212E",
          800: "#130D1A",
          900: "#100917",
        },
      },
      backgroundImage: {
        "cta-img": "url('/images/journey-background.png')",

        "mainheading-gradient":
          "linear-gradient(270deg, #BD91FF -4.87%, #FFFFFF 98.06%)",
        "secondary-heading-gradient":
          "linear-gradient(90deg, #7F7D89 12.36%, #F8F7F8 81.18%)",
        "card-gradient": "linear-gradient(180deg, #060409 0%, #140228 100%)",
        "vision-gradient": "linear-gradient(180deg, #6736F4 0%, #4072ED 100%)",
        "paidplan-gradient":
          "linear-gradient(180deg, #8A4AE9 0%, #F38222 49%, #E44C67 100%)",
      },
    },
  },
  plugins: [],
};
