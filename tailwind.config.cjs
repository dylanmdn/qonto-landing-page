/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "tailwind.config.cjs",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'footer': '35% repeat(1, 1fr) ',
      }
    }
  },
  plugins: [],
};
