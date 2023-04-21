import * as React from "react";
import textStyle from "./text-style";
import { joinCls } from "@utilities/text.utils";

type StrongProps = {
	children: React.ReactNode;
	isSpan?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Strong = ({ children, isSpan = false, className = "", ...props }: StrongProps) => {
	const elementProps = {
		className: joinCls(textStyle.strong, className),
		...props,
	};

	return isSpan ? <span {...elementProps}>{children}</span> : <p {...elementProps}>{children}</p>;
};

export default Strong;
