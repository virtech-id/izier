"use client";

import Image from "next/image";
import Button from "@/component/ui/Button";

export default function Home() {
	return (
		<main className="flex flex-col justify-between p-8 min-w-screen max-w-5xl mx-auto bg-black">
			<header className="flex flex-row justify-between items-center">
				<Image
					className=""
					src="/izier.svg"
					alt="Izier Logo"
					width={96}
					height={18}
					priority
				/>
				<Button variant="subtle">
					<span>Join waitlist</span>
				</Button>
			</header>
		</main>
	);
}
