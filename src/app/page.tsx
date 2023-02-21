"use client";

import Image from "next/image";
import Button from "@/component/ui/Button";
import Blob from "@/component/blob/Blob";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Root } from "@radix-ui/react-toolbar";

export default function Home() {
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsHeaderVisible(true);
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<main className="flex flex-col justify-between max-w-5xl p-8 mx-auto bg-black min-w-screen md:min-w-3xl">
			<header
				className={`flex flex-row justify-between items-center bg-transparent z-10 opacity-0 transform -translate-y-full transition-all duration-1000 ${
					isHeaderVisible ? "opacity-100 translate-y-0" : ""
				}`}
			>
				<Image
					className=""
					src="/izier.svg"
					alt="Izier Logo"
					width={96}
					height={18}
					priority
				/>
				<Root>
					<Button intent="subtle">
						<span>Join waitlist</span>
					</Button>
				</Root>
			</header>
			<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
				<Blob />
			</Canvas>
		</main>
	);
}
