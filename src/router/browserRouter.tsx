import ErrorPage from "@pages/Error/ErrorPage";
import homeRoute from "@pages/Home/homeRoute";
import Root from "global/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute],
	},
]);

export default router;
