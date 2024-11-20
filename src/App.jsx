import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Image from "./Images/christmas.gif";
function App() {
	const [isSignUp, setIsSignUp] = useState(false);
	return (
		<div className="App">
			<div
				className="container flex justify-between bg-slate-100 rounded-3xl w-[60rem] h-[40rem] shadow-lg absolute top-[12rem] left-[25rem]"
				id={isSignUp ? "active" : null}
			>
				{isSignUp ? <SignUp /> : <SignIn />}

				<div
					className={`toggle-container bg-[#512da8] ${isSignUp ? "rounded-s-[1.6rem] rounded-e-[12rem]" : "rounded-s-[12rem] rounded-e-[1.6rem]"}  pl-24 flex items-center relative`}
				>
					<div className="toggle">
						<div
							className={`grid grid-flow-row gap-28 mr-4 toggle-panel toggle-left ${isSignUp ? "visible" : "hidden"} `}
						>
							<h2 className="text-[3rem] font-semibold  opacity-85 mt-16">
								Hello, Friend!
							</h2>
							<p className="w-[26rem] text-black font-semibold opacity-85 mb-20 text-[1.2rem]">
								Register with your personal details <br /> <span className="ml-4">to use all of site
								features</span>
							</p>
							<button
								id="register"
								type="button"
								className="py-3.5 px-8 w-[14rem] border-2 border-white text-white uppercase font-semibold rounded-xl ml-10"
								onClick={() => setIsSignUp(false)}
							>
								Sign In
							</button>
						</div>
						<div
							className={`grid grid-flow-row gap-28 mt-28 toggle-panel toggle-right ${isSignUp ? "hidden" : "visible"}`}
						>
							<h2 className="text-[3rem] font-semibold text-black opacity-85 ">
								Welcome Back
							</h2>
							<p className="w-[26rem] text-black font-bold italic text-xl ml-2 mb-36">
								Enter your personal details <br />{" "}
								<span className="ml-5">to use all of site features</span>
							</p>

							<button
								id="register"
								type="button"
								className="py-3.5 px-8 w-[14rem] border-2 border-white text-black uppercase font-semibold rounded-xl ml-10 mb-20"
								onClick={() => setIsSignUp(true)}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
