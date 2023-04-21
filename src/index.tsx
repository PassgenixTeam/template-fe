import Root from "global/Root";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "@redux/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Root />
		</Provider>
	</React.StrictMode>
);
