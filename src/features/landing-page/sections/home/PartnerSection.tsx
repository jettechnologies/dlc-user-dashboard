import { PartnerCarousel, PartnerBlock } from "../../components"
import { EmblaOptionsType } from "embla-carousel"

export const PartnersSection = () => {
	const partners = [
		{ imgSrc: "/images/9mobile.svg", color: "bg-[#015E43]" },
		{ imgSrc: "/images/Airtel.svg", color: "bg-white" },
		{ imgSrc: "/images/Mtn.svg", color: "bg-[#FCCB04]" },
		{ imgSrc: "/images/Martad logo.png", color: "bg-white" },
		{ imgSrc: "/images/screenClass.png", color: "bg-[#0968AC]" }
	]

	const carouselSettings: EmblaOptionsType = {
		dragFree: false
	}

	return (
		<section className="grid min-h-screen w-full place-items-center py-6 pl-2 font-poppins sm:pl-8 lg:pl-14 bg-white/50">
			<div className="mx-auto flex min-h-[60dvh] w-full max-w-screen-xl flex-col gap-y-12">
				<h3 className="text-center text-lg font-semibold text-black md:text-2xl lg:text-4xl xl:text-5xl">
					OUR PARTNERS
				</h3>
				<div className="h-[390px] w-full max-w-[90dvw]">
					<div className="h-full w-full">
						<PartnerCarousel
							isAutoPlay
							autoPlayInterval={2000}
							options={carouselSettings}
							isCoverflow={true}
						>
							{partners.map((item, index) => (
								<PartnerBlock
									key={index}
									imgUrl={item.imgSrc}
									className={`border border-gray-200 shadow-md ${item.color}`}
								/>
							))}
						</PartnerCarousel>
					</div>
				</div>
				<p className="text-center text-lg font-medium text-black lg:text-2xl">
					Trusted by <span className="text-dlc-blue-200 font-bold">100+</span>{" "}
					Top Companies
				</p>
			</div>
		</section>
	)
}
