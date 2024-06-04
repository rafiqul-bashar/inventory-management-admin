export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#57D059",
        accent: "#F7F8FA",
      },
    },
  },
  plugins: [],
};
