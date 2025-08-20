import Image from "next/image"

export const WhoWeAreSection = () => {
	return (
		<section className="relative min-h-[150dvh] w-full bg-[url('/images/about-banner-small.png')] bg-cover bg-center bg-no-repeat md:min-h-screen md:bg-[url('/images/about-banner-lg.png')]">
			{/* dark overlay */}
			<div className="absolute inset-0 z-10 h-full w-full bg-black opacity-30" />

			<div className="relative z-20 mx-auto h-[140vh] w-[90%] px-8 py-6 md:h-screen md:py-12">
				<div className="flex h-full w-full flex-col md:flex-row md:items-center md:justify-between lg:items-start">
					{/* LEFT TEXT */}
					<div className="w-max">
						<h3 className="text-[60px] font-normal uppercase leading-none text-white md:text-[80px] lg:text-[100px]">
							who
						</h3>

						<div className="mb-4 mt-2 flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
							<h2 className="font-poppins text-[65px] font-medium uppercase leading-none text-light-yellow md:text-[85px] lg:text-[115px]">
								we
							</h2>
							<h5 className="rotate-90 self-center text-[30px] font-medium uppercase leading-none text-white md:text-[38px] lg:text-[48px]">
								are
							</h5>
						</div>
						<p className="w-[190px] text-xs font-normal text-white md:w-[240px] md:text-sm lg:w-[300px] lg:text-base">
							Learn the basics. Build a Firm Foundation | get Education through
							our Expressive Medium that Inspires creativity
						</p>
					</div>

					{/* RIGHT IMAGE */}
					<div className="relative mb-36 mt-auto h-[252px] w-[267px] md:mb-0 md:mt-0 md:h-[280px] md:w-[340px] lg:h-[300px] lg:w-[400px] xl:h-[383px] xl:w-[513px]">
						<Image
							src="/images/about-who-img.png"
							alt="who-we-are_img"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				{/* BADGES */}
				<div className="absolute bottom-0 md:bottom-10 left-0 right-0 mx-auto flex w-[90%] flex-wrap justify-center gap-4 md:gap-6">
					<div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
						<p className="text-[10px] font-medium text-black md:text-xs lg:text-sm">
							Over 20 years Experience
						</p>
					</div>
					<div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
						<p className="text-[10px] font-medium text-black md:text-xs lg:text-sm">
							A Team of Professionals
						</p>
					</div>
					<div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
						<p className="text-[10px] font-medium text-black md:text-xs lg:text-sm">
							Best E-Learning platform for children
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

// import Image from "next/image"

// export const WhoWeAreSection = () => {
// 	return (
// 		<section className="relative min-h-[150dvh] w-full bg-[url('/images/about-banner-small.png')] bg-cover bg-center bg-no-repeat md:min-h-screen md:bg-[url('/images/about-banner-lg.png')]">
// 			<div className="absolute inset-0 z-10 h-full w-full bg-black opacity-30" />

// 			<div className="relative z-20 mx-auto h-[140vh] w-[90%] px-8 py-6 md:h-full md:py-12">
// 				<div className="flex h-full w-full flex-col md:h-fit lg:flex-row lg:justify-between">
// 					<div className="w-max">
// 						<h3 className="text-[60px] font-normal uppercase leading-none text-white lg:text-[100px]">
// 							who
// 						</h3>

// 						<div className="mb-4 mt-2 flex items-center gap-x-2 lg:gap-x-4">
// 							<h2 className="font-poppins text-[65px] font-medium uppercase leading-none text-light-yellow lg:text-[115px]">
// 								we
// 							</h2>
// 							<h5 className="rotate-90 self-center text-[30px] font-medium uppercase leading-none text-white lg:text-[48px]">
// 								are
// 							</h5>
// 						</div>
// 						<p className="w-[190px] text-xs font-normal text-white lg:w-[300px] lg:text-sm">
// 							Learn the basics. Build a Firm Foundation | get Education through
// 							our Expressive Medium that Inspires creativity
// 						</p>
// 					</div>

// 					{/* Image positioned at bottom on mobile, normal position on desktop */}
// 					<div className="relative mb-36 mt-auto h-[252px] w-[267px] md:mb-0 md:mt-[4rem] lg:h-[300px] lg:w-[400px] xl:h-[383px] xl:w-[513px]">
// 						<Image
// 							src="/images/about-who-img.png"
// 							alt="who-we-are_img"
// 							fill
// 							className="object-cover"
// 							priority
// 						/>
// 					</div>
// 				</div>

// 				<div className="absolute bottom-0 left-0 right-0 mx-auto flex w-[90%] flex-wrap justify-center gap-4">
// 					<div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
// 						<p className="text-[10px] font-medium text-black lg:text-sm">
// 							Over 20 years Experience
// 						</p>
// 					</div>
// 					<div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
// 						<p className="text-[10px] font-medium text-black lg:text-sm">
// 							A Team of Professionals
// 						</p>
// 					</div>
// 					<div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
// 						<p className="text-[10px] font-medium text-black lg:text-sm">
// 							Best E-Learning platform for children
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
