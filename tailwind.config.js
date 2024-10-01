/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#121212",
          200: "#E7B73C",
          300: "#B5686D",
          400: "#83199E",
        },
        secondary: {
          100: "#100313",
        },
      },
      backgroundImage: {
        // prettier-ignore
        "BannerImage": "url('/assets/Banner.svg')",
        // prettier-ignore
        "BannerFrame": "url('/assets/Frame 10.svg')",
      },
    },
  },
  plugins: [],
};
