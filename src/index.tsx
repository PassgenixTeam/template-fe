import store from "@redux/store";
import router from "@router/browserRouter";
import { FontProvider } from "@services/font/FontProvider";
import { LanguageProvider } from "@services/language/LanguageProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<LanguageProvider>
				<FontProvider>
					<RouterProvider router={router} />
				</FontProvider>
			</LanguageProvider>
		</Provider>
	</React.StrictMode>
);
