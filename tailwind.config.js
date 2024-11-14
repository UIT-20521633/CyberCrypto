/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "gradient-orange-pink": "linear-gradient(-90deg, #ff7df2, #ff275b)",
      },
      backgroundColor: {
        "blue-main": "#151937",
      },
      letterSpacing: {
        "-2": "-2rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
