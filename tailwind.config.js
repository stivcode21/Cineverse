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
