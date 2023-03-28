/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss'), // ({ prefix: 'ui' })
    
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries"),

  ],
};
