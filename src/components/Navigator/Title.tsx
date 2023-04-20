import { Helmet } from "react-helmet";
import { matchPath, useLocation } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";

function Title({ navLinks = [] }) {
	const location = useLocation();

	const title = location.pathname;

	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
}

export default Title;
