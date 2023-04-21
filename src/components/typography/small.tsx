import * as React from "react";
import { joinCls } from "@utilities/text.utils";
import textStyle from "./text-style";

type SmallProps = {
	children: React.ReactNode;
	isSpan?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Small = ({ children, isSpan = false, className = "", ...props }: SmallProps) => {
	const elementProps = {
		className: joinCls(textStyle.small, className),
		...props,
	};

	return isSpan ? <span {...elementProps}>{children}</span> : <p {...elementProps}>{children}</p>;
};

export default Small;
