/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.vue"],
  theme: {
    colors: ({ colors }) => ({
      primary: "#162C4F",
      ...colors,
    }),
    extend: {},
  },
  plugins: [],
};
