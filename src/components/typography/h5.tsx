import * as React from "react";
import { joinCls } from "@utilities/text.utils";
import textStyle from "./text-style";

type H5Props = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const H5 = ({ children, className = "", ...props }: H5Props) => {
	return (
		<h5 className={joinCls(textStyle.h5, className)} {...props}>
			{children}
		</h5>
	);
};

export default H5;
