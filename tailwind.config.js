/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-subtle-surfacesubtle": "#f9f9f9",
        "interactive-interactivetwodefault": "#008392",
        "neutral-white": "#fff",
        "border-bordersubtle": "#ebebeb",
        "text-textdefault": "#222",
        "text-textsubtle": "#717171",
        "surface-white-surfacehover": "#f2f2f2",
        "text-textplaceholder": "#b0b0b0",
        "interactive-interactiveonehover": "#af273e",
      },
      spacing: {},
      fontFamily: {
        "label-label-2": "'Avenir Next'",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      sm: "0.875rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
