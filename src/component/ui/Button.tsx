import React from "react";
import { styled } from "@stitches/react";
import { grayDark, whiteA, redDark, greenDark } from "@radix-ui/colors";

const ButtonVariants = styled("button", {
	display: "inline-flex",
	justifyContent: "center",
	alignItems: "center",
	fontWeight: "500",
	fontFamily: "Inter",
	borderRadius: "0.25rem",
	padding: "0.5rem 1rem",
	fontSize: "0.875rem",
	lineHeight: "1.25rem",
	transition: "background-color 200ms ease-in-out",
	variants: {
		variant: {
			default: {
				backgroundColor: grayDark.gray6,
				color: grayDark.gray11,
				"&:hover": {
					backgroundColor: grayDark.gray8,
				},
			},
			subtle: {
				$$shadowColor: greenDark.green11,
				backgroundColor: whiteA.whiteA12,
				boxShadow: "0 0 10px $$shadowColor",
				color: grayDark.gray1,
				"&:hover": {
					boxShadow: "0 0 20px $$shadowColor",
					transition: "box-shadow 200ms ease-in-out",
				},
				"&:not(:hover)": {
					boxShadow: "0 0 10px $$shadowColor",
					transition: "box-shadow 400ms ease-in-out",
				},
			},
			destructive: {
				backgroundColor: redDark.red6,
				color: whiteA.whiteA12,
				"&:hover": {
					backgroundColor: redDark.red8,
				},
			},
			ghost: {
				backgroundColor: whiteA.whiteA1,
				color: whiteA.whiteA10,
				"&:hover": {
					backgroundColor: whiteA.whiteA8,
					color: whiteA.whiteA12,
				},
			},
			link: {
				backgroundColor: "transparent",
				color: grayDark.gray1,
				textDecoration: "underline",
				"&:hover": {
					backgroundColor: grayDark.gray8,
				},
			},
		},
		outlined: {
			true: {
				border: "1px solid",
				borderColor: grayDark.gray10,
			},
		},
	},
});

export type ButtonProps = {
	variant: "default" | "subtle" | "destructive" | "ghost" | "link";
	children: React.ReactNode;
} & React.ComponentProps<typeof ButtonVariants>;

const Button = ({ variant = "default", children, ...props }: ButtonProps) => {
	return (
		<ButtonVariants variant={variant} {...props}>
			{children}
		</ButtonVariants>
	);
};

export default Button;
