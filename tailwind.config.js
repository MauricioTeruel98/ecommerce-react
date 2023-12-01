/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "yellow",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
  plugins: [],
}

