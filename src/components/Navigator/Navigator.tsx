import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";
import { joinCls } from "../../utilities/text.utils";
import style from "./style.module.css";
import Title from "./Title";

export default function Navigator() {
	const location = useLocation();

	const navLinks = [
		{
			name: "Home",
			path: HOME_PAGE_PATH,
			end: true,
		},
	];

	return (
		<Fragment>
			<Title />

			<nav className={joinCls("navbar navbar-expand-lg bg-dark navbar-dark p-0 fixed-top", style["navbar"])}>Navbar</nav>
		</Fragment>
	);
}
