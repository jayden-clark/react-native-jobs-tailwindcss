/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans"],
      medium: ["DM Medium"],
      bold: ["DM Bold"],
    },
    extend: {
      colors: {
        "custom-lightgray": "#FAFAFC",
      },
    },
  },
  plugins: [],
};
