import "../styles/globals.css"
import { Inter } from "next/font/google"

export const metadata = {
	title: "Home | Izier",
	description:
		"Looking to optimize your productivity and accomplish more in less time? Discover Izier - the top-rated productivity tool designed to streamline your work and maximize efficiency. With Izier, you'll have everything you need to work smarter, not harder, and achieve your goals like never before.",
	applicationName: "Izier",
	referrer: "same-origin",
	icons: {
		icon: "/favicon.ico",
		apple: "apple-touch-icon.png",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
}

const inter = Inter({
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif", "system-ui"],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>{children}</body>
		</html>
	)
}
