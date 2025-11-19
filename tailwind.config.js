/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#141312",
        light: {
          100: "#d6c7ff",
          200: "#a8b5db",
          300: '#94acab',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23'
        },
        accent: "#AB8BFF"
      }
    },
  },
  plugins: [],
}