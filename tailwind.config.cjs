/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         black: '#212529',
         white: colors.white,
         gray: colors.gray,
         emerald: colors.emerald,
         indigo: colors.indigo,
         yellow: colors.yellow,
         'se': '#DFDFDF',
         //'gray': '#DFDFDF',
         'green': '#457537'
      },
		extend: {},
	},
	plugins: [],
}
