import Title from "@components/Navigator/Title";
import { Fragment } from "react";
import { joinCls } from "../../utilities/text.utils";
import style from "./style.module.scss";

export default function Navigator() {
	return (
		<Fragment>
			<Title />

			<nav className={joinCls("navbar navbar-expand-lg bg-dark navbar-dark p-0 fixed-top", style["navbar"])}>Navbar</nav>
		</Fragment>
	);
}
