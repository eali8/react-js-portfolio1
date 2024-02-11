/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        emmy: {
          "primary": "#217F91",
          "secondary": "#FF717FC7",
          "neutral": "#ADD8E6",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ]
  }
}

