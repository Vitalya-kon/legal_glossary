/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lxgw: ["LXGW WenKai TC", "cursive"],
        manrope: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        '60': '60%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

