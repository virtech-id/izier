"use client"

import Image from "next/image"
import Button from "@/component/ui/Button"
import Blob from "@/component/blob/Blob"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react"
import Badge from "@/component/ui/Badge"
import { GithubCircle, Instagram, ArrowRight } from "iconoir-react"
import Link from "next/link"

const Home = () => {
	const [isContentVisible, setIsContentVisible] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsContentVisible(true)
		}, 500)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<main className="flex flex-col justify-between max-w-7xl p-8 mx-auto bg-black min-h-screen min-w-screen md:min-w-3xl">
			<header
				className={`flex flex-row justify-between h-10 items-center bg-transparent z-10 opacity-0 transform -translate-y-full transition-all duration-1000 ${
					isContentVisible ? "opacity-100 translate-y-0" : ""
				}`}
			>
				<Image
					src="/izier.svg"
					alt="Izier Logo"
					width={96}
					height={18}
					priority
				/>
				<div className="flex flex-row space-x-4">
					<Link href="/auth/login">
						<Button intent="default">
							<span className="flex flex-row items-center gap-2 font-inter">
								Log in
								<ArrowRight className="transition ease-in-out hover:translate-x-1" />
							</span>
						</Button>
					</Link>
					<Button intent="subtle">
						<span className="font-inter">Join waitlist</span>
					</Button>
				</div>
			</header>
			<section
				className={`flex flex-row items-center justify-between opacity-0 transform transition-all duration-[3000ms] ${
					isContentVisible ? "opacity-100" : ""
				}`}
			>
				<div className="z-10 absolute">
					<Image
						src="/abstract.svg"
						alt="abstract"
						width={544.63}
						height={136.5}
						className="blur-2xl"
						priority
					/>
				</div>
				<div className="flex flex-col gap-3 max-w-xl z-20">
					<div>
						<Badge intent="warning" text="Currently in development" />
					</div>
					<h1 className="text-7xl inline-block text-transparent font-inter leading-none font-bold bg-gradient-to-br from-white to-zinc-800 bg-clip-text md:text-6xl sm:text-5xl">
						Reclaim your wasted hour
					</h1>
					<p className="text-base leading-6 font-normal text-grayDark-11 font-inter">
						Take your productivity to the next level with advanced tools
						designed to help you streamline your work, maximize your time, and
						accomplish more than ever before.
					</p>
				</div>
				<div className="h-[40rem] w-[48rem] transform-gpu lg:block hidden">
					<Canvas camera={{ position: [0.0, 1.0, 9.0] }}>
						<Blob />
					</Canvas>
				</div>
			</section>
			<footer
				className={`opacity-0 transform translate-y-full transition-all duration-1000 ${
					isContentVisible ? "opacity-100 translate-y-0" : ""
				}`}
			>
				<div className="flex flex-row gap-6 items-center">
					<Link
						href="https://github.com/virtech-id/izier"
						target="_blank"
						className="transition ease-in-out duration-200 bg-clip-text text-grayDark-10 hover:text-whiteA-12"
						aria-label="Github"
					>
						<GithubCircle strokeWidth={1} width="1.5rem" height="1.5rem" />
					</Link>
					<Link
						href="https://instagram.com/izierapp.id"
						target="_blank"
						className="transition ease-in-out duration-200 bg-clip-text text-grayDark-10 hover:text-whiteA-12"
						aria-label="Instagram"
					>
						<Instagram strokeWidth={1} width="1.5rem" height="1.5rem" />
					</Link>
				</div>
			</footer>
		</main>
	)
}

export default Home
