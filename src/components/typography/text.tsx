import * as React from "react";
import { joinCls } from "@utilities/text.utils";
import textStyle from "./text-style";

type TextProps = {
	children: React.ReactNode;
	isSpan?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Text = ({ children, isSpan = false, className = "", ...props }: TextProps) => {
	const elementProps = {
		className: joinCls(textStyle.normal, className),
		...props,
	};

	return isSpan ? <span {...elementProps}>{children}</span> : <p {...elementProps}>{children}</p>;
};

export default Text;
