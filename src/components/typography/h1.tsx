import { joinCls } from "@utilities/text.utils";

const H1 = ({ children, className = "", ...props }: H1Props) => {
	return (
		<h1 className={joinCls("font-heading font-black tracking-tight text-5xl", className)} {...props}>
			{children}
		</h1>
	);
};

export default H1;
