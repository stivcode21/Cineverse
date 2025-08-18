/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
        Bricolage: ["Bricolage", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(360deg, #00B3FA 0%, #051b32 10%, #00B3FA 70%)",
        "radial-darkblue":
          "radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(6,55,103,1) 95%)",
        "black-shadow":
          "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 95%);",
      },
      textShadow: {
        default: "0 1px 3px rgba(0, 0, 0, 0.5)",
        md: "0 2px 5px rgba(0, 0, 0, 0.5)",
        lg: "0 4px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
