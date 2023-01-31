const defaultTheme = require("tailwindcss/defaultTheme")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        footer: ["1.125rem", { lineHeight: "1.625rem", fontWeight: "500" }],
        "nav-button": ["1.1rem", { lineHeight: "8.75rem" }],
        "nav-item": ["1.3rem", { lineHeight: "1.625rem" }],
        p: ["1.5rem", { lineHeight: "1.625rem" }],
        "p-m": ["1.125rem", { lineHeight: "1.25rem" }],
        "p-sub": ["1.125rem", { lineHeight: "1.625rem" }],
        "p-sub-m": ["0.75rem", { lineHeight: "1" }],
        header: ["5rem", { lineHeight: "5.375rem" }],
        "header-m": ["2rem", { lineHeight: "2.125rem" }],
        subheader: [
          "2rem",
          { lineHeight: "5.375rem", letterSpacing: "0.4rem" }
        ],
        "subheader-m": [
          "1rem",
          { lineHeight: "5.375rem", letterSpacing: "0.3rem" }
        ],
        "faq-item": ["2.375rem", { lineHeight: "4" }],
        "faq-item-m": ["1.5rem", { lineHeight: "3" }]
      },
      colors: {
        primary: "#243c5a",
        "tw-footer-background": "#0b0b2c",
        "tw-light-blue": "#84FBFD",
        "tw-dark-blue": "#1C2F5E",
        "tw-navy-blue": "#212141",
        "tw-background": "#000017",
        "tw-gray": "#707070"
      },
      fontFamily: {
        sans: ["New Peninim MT", ...defaultTheme.fontFamily.sans],
        poppins: ["var(--poppins-font)", ...fontFamily.serif],
        tuesday: ["Tuesday", "cursive"],
        andale: ["Andale Mono Regular", "sans-serif"],
        copperplate: ["Copperplate", "sans-serif"]
      }
    }
  },
  plugins: []
}
