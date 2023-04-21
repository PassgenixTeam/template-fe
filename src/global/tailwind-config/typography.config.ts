import defaultTheme from "tailwindcss/defaultTheme";

// System design fonts
const systemFontFamily: Record<string, string[]> = {
	heading: ["Raleway"],
	body: ["Comfortaa"],
};

// Font using in compiled css
const fontFamily = Object.keys(systemFontFamily).reduce((acc, key) => {
	acc[key] = [...systemFontFamily[key], ...defaultTheme.fontFamily.sans];
	return acc;
}, {} as Record<string, string[]>);

export default fontFamily;
