import { joinCls } from "../../utilities/text.utils";
import style from "./style.module.scss";

export default function Navigator() {
	return (
		<>
			{/* <Title /> */}

			<nav className={joinCls("navbar navbar-expand-lg bg-dark navbar-dark p-0 fixed-top", style["navbar"])}>Navbar</nav>
		</>
	);
}
