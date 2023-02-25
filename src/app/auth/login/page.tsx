"use client";

import Button from "@/component/ui/Button";
import { ArrowRight } from "iconoir-react";
import Image from "next/image";
import * as Separator from "@radix-ui/react-separator";
import ButtonSocial from "@/component/ui/ButtonSocial";
import { SOCIAL_BUTTON_ITEMS } from "./socialButtonLists";
import { useState } from "react";

const Login = () => {
	const [isEmpty, setIsEmpty] = useState(true);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 0) {
			setIsEmpty(false);
		} else {
			setIsEmpty(true);
		}
	};

	return (
		<main className="flex flex-col items-center justify-center h-screen bg-black">
			<Image
				src="/circleGradient.svg"
				alt="Circle gradient blur"
				width={1200}
				height={1200}
				className="absolute z-10 select-none blur-2xl"
				priority
			/>
			<div className="z-20 ">
				<div className="z-30 flex flex-col items-center justify-between p-6 border border-solid rounded-md border-whiteA-7 bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 backdrop-blur-xl drop-shadow-glassmorphism">
					<div className="flex flex-col items-center justify-between space-y-6">
						<Image
							src="/izier.svg"
							alt="Izier Logo"
							width={96}
							height={18}
							priority
						/>
						<span className="text-2xl font-bold leading-8 text-white">
							Log in to your account
						</span>
					</div>
					<form className="flex flex-col justify-start space-y-4">
						<div className="flex flex-col space-y-1">
							<label className="text-base font-semibold leading-6 text-white">
								Email
							</label>
							<input
								type="email"
								onChange={handleInputChange}
								aria-label="email input"
								className="w-full py-2 pl-3 rounded-md bg-whiteA-12 pr-14 text-slateDark-1"
								placeholder="jane.doe@gmail.com"
							/>
						</div>
						<Button intent="default" fullWidth disabled={isEmpty}>
							<span className="flex flex-row items-center gap-2">
								Login with email
								<ArrowRight className="transition ease-in-out hover:translate-x-1" />
							</span>
						</Button>
						<div className="flex flex-row items-center justify-around space-x-6">
							<Separator.Root
								className="bg-whiteA-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-20 data-[orientation=vertical]:h-20 sm:data-[orientation=horizontal]:w-52 sm:data-[orientation=vertical]:h-52"
								decorative
								orientation="horizontal"
							/>
							<span className="text-sm font-medium leading-5 text-whiteA-10 whitespace-nowrap">
								Or login with
							</span>
							<Separator.Root
								className="bg-whiteA-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-20 data-[orientation=vertical]:h-20 sm:data-[orientation=horizontal]:w-52 sm:data-[orientation=vertical]:h-52"
								decorative
								orientation="horizontal"
							/>
						</div>
						<div className="flex flex-col gap-4 sm:flex sm:flex-row sm:justify-between sm:items-center">
							{SOCIAL_BUTTON_ITEMS.map((item) => (
								<ButtonSocial
									key={item.text}
									social={item.type}
									fullWidth
								>
									<span className="flex flex-row gap-2">
										{item.text}
										<Image
											src={item.src}
											alt={item.alt}
											width={16}
											height={16}
										/>
									</span>
								</ButtonSocial>
							))}
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Login;
