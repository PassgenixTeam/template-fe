import { forwardRef } from "react";
import { joinCls } from "../../utilities/text.utils";
import { Title } from "./Title";

export const Navigator = forwardRef<HTMLDivElement, NavigatorProps>(({ className, ...props }, ref) => {
	return (
		<>
			<Title />

			<nav ref={ref} className={joinCls("fixed top-0", className)} {...props}>
				TODO: Navbar
			</nav>
		</>
	);
});
