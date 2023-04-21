import * as React from "react";
import { joinCls } from "@utilities/text.utils";
import textStyle from "./text-style";

type H4Props = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const H4 = ({ children, className = "", ...props }: H4Props) => {
	return (
		<h4 className={joinCls(textStyle.h4, className)} {...props}>
			{children}
		</h4>
	);
};

export default H4;
