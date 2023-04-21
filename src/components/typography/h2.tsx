import * as React from "react";
import { joinCls } from "@utilities/text.utils";
import textStyle from "./text-style";

type H2Props = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const H2 = ({ children, className = "", ...props }: H2Props) => {
	return (
		<h2 className={joinCls(textStyle.h2, className)} {...props}>
			{children}
		</h2>
	);
};

export default H2;
