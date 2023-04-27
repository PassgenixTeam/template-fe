// This file is used to override the default webpack config using react-app-rewired

const path = require("path");

module.exports = function override(config, env) {
	//do stuff with the webpack config...
	return {
		...config,
		resolve: {
			...config.resolve,

			// Configure path aliases
			alias: {
				...config.resolve.alias,
				"@global": path.resolve(__dirname, "./src/lib/global"),
				"@components": path.resolve(__dirname, "./src/lib/components"),
				"@store": path.resolve(__dirname, "./src/lib/store"),
				"@router": path.resolve(__dirname, "./src/lib/router"),
				"@services": path.resolve(__dirname, "./src/lib/services"),
				"@utilities": path.resolve(__dirname, "./src/lib/utilities"),
				"@pages": path.resolve(__dirname, "./src/pages"),
			},
		},
	};
};
