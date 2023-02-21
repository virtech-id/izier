import React from "react";
import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
	className?: string;
	children: React.ReactNode;
}

const TextLink = ({ href, as, className, children, ...rest }: Props) => {
	return (
		<Link
			href={href}
			as={as}
			{...rest}
			className="text-sm font-medium duration-300 text-grayDark-11 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-greenDark-8 hover:to-tealDark-11 after:block after:border after:border-greenDark-11 after:transition-transform after:duration-300 after:scale-x-0 after:hover:scale-x-100 after:origin-right after:hover:origin-left"
		>
			{children}
		</Link>
	);
};

export default TextLink;
