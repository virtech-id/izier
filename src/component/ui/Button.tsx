import * as Toolbar from "@radix-ui/react-toolbar";
import { cva } from "class-variance-authority";
import { FC } from "react";

type ButtonProps = {
	intent?: "default" | "subtle" | "destructive" | "ghost";
	outlined?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
};

const buttonStyles = cva(
	"inline-flex justify-center items-center font-medium rounded-md px-4 py-2 text-sm transition duration-300 ease-in-out",
	{
		variants: {
			intent: {
				default: "bg-grayDark-6 text-grayDark-11 hover:bg-grayDark-8",
				subtle: "bg-whiteA-12 text-grayDark-1 transition drop-shadow-glow-sm duration-2000 hover:transition hover:drop-shadow-glow-md hover:duration-500 hover:animate-glow-shadow",
				destructive: "bg-redDark-6 text-whiteA-12 hover:bg-redDark-8",
				ghost: "bg-whiteA-1 text-whiteA-10 hover:bg-whiteA-8 hover:text-whiteA-12",
			},
			outlined: {
				true: "border border-grayDark-10",
			},
		},
	}
);

const Button: FC<ButtonProps> = ({
	intent = "default",
	outlined,
	onClick,
	children,
}) => {
	const className = buttonStyles({ intent, outlined });

	return (
		<Toolbar.Button className={className} type="button" onClick={onClick}>
			{children}
		</Toolbar.Button>
	);
};

export default Button;
