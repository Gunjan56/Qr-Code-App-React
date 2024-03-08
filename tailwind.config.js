// tailwind.config.js
export const mode = "jit";
export const purge = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = false;
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
