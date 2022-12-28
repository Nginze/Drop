/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      "button-primary": "#2563eb",
      "text-primary": "#151415",
      "text-light": "#94a3b8",
      "box-bg": "#F1F6F9",
      "button-secondary": "#fbbf24"
    },
    extend: {},
  },
  plugins: [],
};
