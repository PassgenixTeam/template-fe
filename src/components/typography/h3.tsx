import * as React from "react";
import { joinCls } from "@utilities/text.utils";
import textStyle from "./text-style";

type H3Props = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const H3 = ({ children, className = "", ...props }: H3Props) => {
	return (
		<h3 className={joinCls(textStyle.h3, className)} {...props}>
			{children}
		</h3>
	);
};

export default H3;
