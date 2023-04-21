import homeRoute from "@pages/Home/homeRoute";
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
