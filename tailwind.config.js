/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "react-phone-number-input/style.css",
    "flag-icon-css/css/flag-icon.min.css",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
    colors: {
      "text-default": "#2F2F2F",
      "text-hint": "#6E6E6E",
      "text-muted": "#C2C2C2",
      "text-light": "#FFFFFF",
      black: "#000000",
      "neutral-900": "#1F1F1F",
      "neutral-800": "#333333",
      "neutral-700": "#4D4D4D",
      "neutral-600": "#666666",
      "neutral-500": "#808080",
      "neutral-400": "#999999",
      "neutral-300": "#B3B3B3",
      "neutral-200": "#CCCCCC",
      "neutral-100": "#E5E5E5",
      "neutral-50": "#F2F2F2",
      white: "#FFFFFF",
      "primary-900": "#1C2E3F",
      "primary-800": "#20354A",
      "primary-700": "#253D54",
      "primary-600": "#29445F",
      "primary-500": "#2E4C69",
      "primary-400": "#587087",
      "primary-300": "#8294A5",
      "primary-200": "#ABB7C3",
      "primary-100": "#D5DBE1",
      "primary-50": "#EAEDF0",
      "secondary-900": "#004449",
      "secondary-800": "#00676D",
      "secondary-700": "#008992",
      "secondary-600": "#00ABB6",
      "secondary-500": "#00ABB6",
      "secondary-400": "#33BCC5",
      "secondary-300": "#66CDD3",
      "secondary-200": "#99DDE2",
      "secondary-100": "#CCEEF0",
      "secondary-50": "#E5F7F8",
      "auxiliary-900": "#98671C",
      "auxiliary-800": "#B27821",
      "auxiliary-700": "#CB8926",
      "auxiliary-600": "#E59A2A",
      "auxiliary-500": "#FEAB2F",
      "auxiliary-400": "#FEBC59",
      "auxiliary-300": "#FECD82",
      "auxiliary-200": "#FFDDAC",
      "auxiliary-100": "#FFEED5",
      "auxiliary-50": "#FFF7EA",
      "danger-900": "#7D1F15",
      "danger-800": "#922418",
      "danger-700": "#A62A1C",
      "danger-600": "#BB2F1F",
      "danger-500": "#D03423",
      "danger-400": "#D95D4F",
      "danger-300": "#E3857B",
      "danger-200": "#ECAEA7",
      "danger-100": "#F6D6D3",
      "danger-50": "#FAEBE9",
      "warning-900": "#993E00",
      "warning-800": "#B34800",
      "warning-700": "#CC5200",
      "warning-600": "#E55D00",
      "warning-500": "#FF6700",
      "warning-400": "#FF8533",
      "warning-300": "#FFA466",
      "warning-200": "#FFC299",
      "warning-100": "#FFE1CC",
      "warning-50": "#FFF0E5",
      "success-900": "#164832",
      "success-800": "#206B4C",
      "success-700": "#2B8F65",
      "success-600": "#31A171",
      "success-500": "#36B37E",
      "success-400": "#5EC298",
      "success-300": "#86D1B2",
      "success-200": "#AFE1CB",
      "success-100": "#D7F0E5",
      "success-50": "#EBF7F2",
      "info-900": "#002866",
      "info-800": "#003D99",
      "info-700": "#0051CC",
      "info-600": "#005BE5",
      "info-500": "#0065FF",
      "info-400": "#3384FF",
      "info-300": "#66A3FF",
      "info-200": "#99C1FF",
      "info-100": "#CCE0FF",
      "info-50": "#E5F0FF",
    },
  },

  plugins: [require("flowbite/plugin")],
};
