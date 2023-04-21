import type { Config } from "tailwindcss";
import colors from "./src/global/tailwind-config/colors.config";
import fontFamily from "./src/global/tailwind-config/typography.config";

export default {
	content: ["./src/**/*.{tsx}"],
	theme: {
		colors,
		fontFamily,
		extend: {},
	},
	plugins: [],
} satisfies Config;
