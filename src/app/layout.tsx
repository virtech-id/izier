"use client";

import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif", "system-ui"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDebug, setIsDebug] = useState(false);

	useEffect(() => {
		setIsDebug(document.body.classList.contains("debug-screens"));
	}, []);

	return (
		<html lang="en" className={inter.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={isDebug ? "debug-screens" : ""}>{children}</body>
		</html>
	);
}
