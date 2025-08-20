import Image from "next/image"
import Link from "next/link"

export const FAQELearing = () => {
	return (
		<section
			className="min-h-screen w-full"
			style={{
				background: "var(--light-yellow-gradient)",
				backdropFilter: "blur(80px)",
				WebkitBackdropFilter: "blur(80px)"
			}}
		>
			<div className="flex min-h-screen w-full flex-col gap-4 px-8 pt-6 lg:flex-row lg:px-[3.5rem] lg:pt-[2.5rem]">
				<div className="grid flex-1 place-items-center lg:order-2 lg:w-1/2">
					<div className="flex w-fit flex-col gap-y-4">
						<h3 className="font-poppins text-2xl font-normal text-black lg:text-5xl">
							Learn with
							<span className="ml-2 font-bold capitalize text-SC-Brand-Blue">
								US TODAY!
							</span>
						</h3>
						<p className="w-full max-w-[509px] text-sm font-normal text-black lg:text-base">
							We empower students with 21st century skill: Join our E-learning
							community and unlock your potential. DLC Is a management stystem
							(LMS) Developed to meet and suit the learning process.
						</p>
						<Link
							href="/signup"
							className="mt-8 w-fit rounded-lg bg-light-yellow px-6 py-3 text-center font-poppins text-sm font-medium uppercase text-white md:w-[206px] md:py-4 lg:text-base"
						>
							Get Started
						</Link>
					</div>
				</div>
				<div className="flex flex-1 items-center">
					<div className="relative min-h-[509px] w-full">
						<Image
							src="/images/phone-icon-small.png"
							alt="phone 3d"
							fill
							className="h-full w-full object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
