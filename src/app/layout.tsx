import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { ReactElement } from "react";

const inter = Inter({
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif", "system-ui"],
});

interface RootLayoutProps {
	children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={inter.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>{children}</body>
		</html>
	);
}
