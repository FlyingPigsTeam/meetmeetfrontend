/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      "myDark1" : "#222831",
      "myDark2" : "#393E46",
      "myTeal1" : "#00ADB5",
      "myTeal2" : "#159895",
      "myGrey" : "#EEEEEE",
      "myBlueGreen1" : "#57C5B6",
      "darkBlue" : "#1A5F7A",
      "navy" : "#002B5B",
      "gold" : "#FFD700"
    },
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
