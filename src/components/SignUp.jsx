import React from "react";

export default function SignUp() {
	return (
		<div className="flex flex-col text-center mt-16 form-container sign-up">
			<form>
				<h2 className="text-[3rem] flex justify-center items-center font-semibold">
					Create Account
				</h2>
				<div class="social-icons">
					<a href="/" class="icon">
						<i class="fa-brands fa-google-plus-g"></i>
					</a>
					<a href="/" class="icon">
						<i class="fa-brands fa-facebook-f"></i>
					</a>
					<a href="/" class="icon">
						<i class="fa-brands fa-github"></i>
					</a>
					<a href="/" class="icon">
						<i class="fa-brands fa-linkedin-in"></i>
					</a>
				</div>
				<div className="w-[30rem] flex flex-col gap-y-14">
					<div className="input flex flex-col w-[20rem] ml-16 gap-y-5 mt-10">
						<span>or use your email for registeration</span>
						<input
							type="name"
							placeholder="Name"
							className="py-2.5 rounded-lg pl-3"
							defaultValue={"Orhan Özçelik"}
						/>
						<input
							type="email"
							placeholder="Email"
							className="py-2.5 rounded-lg pl-3"
							defaultValue={"orhanozcelik3438@gmail.com"}
						/>
						<input
							type="password"
							placeholder="Password"
							className="py-2.5 rounded-lg pl-3"
						/>
					</div>
					<button
						type="submit"
						className="py-3.5 px-8 w-[14rem] relative left-32 border-2 border-white bg-[#7c75ae] text-white uppercase font-semibold rounded-xl hover:opacity-75"
					>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
}
