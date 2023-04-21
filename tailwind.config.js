const colors = require("./src/global/tailwind-config/colors.config");
const typography = require("./src/global/tailwind-config/typography.config");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors,
		fontFamily: {
			heading: ["Raleway", ...defaultTheme.fontFamily.sans],
			body: ["Raleway", ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	plugins: [],
};
