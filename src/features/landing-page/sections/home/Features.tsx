"use client"

import { features } from "../../data"
import { useIsMobile } from "@/config"

export const Features = () => {
	const isMobile = useIsMobile()

	console.log(isMobile, "is it mobile")

	return (
		<section
			className="w-full h-[90vh] bg-cover bg-center"
			style={
				isMobile
					? {}
					: {
							backgroundImage: "url(/images/subject-image.jpg)",
							backgroundRepeat: "no-repeat"
						}
			}
		>
			<div
				className="w-full lg:min-h-full h-[60vh] bg-light-yellow lg:w-1/2 flex lg:items-center px-4"
				style={
					isMobile
						? {
								clipPath: "polygon(0 0, 100% 0, 100% 68%, 0% 100%)"
							}
						: {
								clipPath:
									"polygon(73% 100%, 0 100%, 0% 0%, 100% 0%, 100% 1%, 100% 1%)"
							}
				}
			>
				<div className="max-w-[450px] w-full h-[240px] lg:h-[320px] flex flex-col justify-between lg:ml-[10%] mt-[12.5dvh] lg:mt-0">
					{features.map((feature, index) => (
						<div key={index} className="w-full">
							<p className="font-semibold font-poppins text-black text-base lg:text-xl">
								{feature.title}
							</p>
							<p className="font-normal font-poppins text-black text-sm lg:text-base mt-[10px]">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* mobile image */}
			<div
				className="-mt-[20dvh] h-[50vh] lg:hidden w-full bg-cover bg-center"
				style={{
					backgroundImage: "url(/images/subject-image.jpg)",
					backgroundRepeat: "no-repeat"
				}}
			/>
		</section>
	)
}
