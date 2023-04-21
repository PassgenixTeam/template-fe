import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

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
