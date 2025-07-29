import Image from "next/image"

export const HeroSection = () => {
	return (
		<section className="min-h-fit w-full bg-[url('/images/contact-us-hero.png')] bg-cover bg-center bg-no-repeat">
			<div className="relative mx-auto flex min-h-[390px] w-full max-w-screen-xl justify-center px-8 max-sm:pb-12 md:min-h-[calc(100dvh-83px)] lg:px-[3.5rem]">
				<div className="flex w-full flex-col items-center justify-between md:justify-start lg:justify-center lg:gap-y-48">
					<div className="flex w-fit items-center gap-x-5 lg:-ml-[26rem]">
						<h2 className="text-2xl font-semibold text-[#01FEE2] lg:text-5xl">
							<span className="mr-2 text-xl font-medium text-white lg:text-4xl">
								Contact
							</span>{" "}
							Us
						</h2>
						<Image
							src="/images/Wifi.png"
							alt="wifi image"
							width={54}
							height={54}
							className="object-cover md:h-[74px] md:w-[74px] lg:h-[94px] lg:w-[94px]"
						/>
					</div>
					<p className="mt-6 text-xs font-normal text-[#ffffff] md:text-sm lg:-ml-[12rem] lg:mt-5 lg:w-[604px] lg:text-base xl:-ml-[29rem]">
						We empower students with 21st century skill: Join our E-lerrning
						community and unlock your potential. Screenclass Is a management
						stystem (LMS) Developed to meet and suit the learning process.
					</p>
				</div>
				{/* images */}
				<div className="absolute bottom-12 right-0 hidden w-fit max-[780px]:right-8 md:block lg:bottom-40">
					<div className="relative h-[200px] w-[257px] overflow-clip rounded-md lg:h-[310px] lg:w-[397px]">
						<Image
							src="/images/contact-hero-sub.png"
							alt="sub-1"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
