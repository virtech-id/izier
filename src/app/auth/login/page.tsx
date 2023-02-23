import Image from "next/image";
import React from "react";

const Login = () => {
	return (
		<main className="flex flex-col items-center justify-center h-screen bg-black">
			<div className="flex flex-col items-center justify-between m-6">
				<div className="flex flex-col items-center justify-between space-y-6">
					<Image
						src="/izier.svg"
						alt="Izier Logo"
						width={96}
						height={18}
						priority
					/>
					<span className="font-bold text-2xl leading-8">
						Log in to your account
					</span>
				</div>
				{/* TODO: create the email form */}
				<div>
					<form>
						<label>Email</label>
						<input></input>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Login;
