import { supportFeatures, supportImages } from "../../data"
import Image from "next/image"

export const SupportClassSection = () => {
	return (
		<section
			className="min-h-[90dvh] w-full bg-cover bg-center bg-no-repeat px-8 py-6 md:py-12"
			style={{
				background:
					"linear-gradient(to right, rgba(90,159,211,0.25) 0%, rgba(255,160,103,0.25) 100%)",
				backdropFilter: "blur(80px)",
				WebkitBackdropFilter: "blur(80px)"
			}}
		>
			<div className="flex h-full w-full flex-col gap-14 lg:flex-row lg:pl-12">
				<div className="flex h-full w-full flex-col gap-y-6 lg:w-[40%]">
					<h3 className="w-[195px] self-center text-center text-2xl font-semibold text-SC-Brand-Blue lg:w-[292px] lg:self-end lg:text-end lg:text-4xl">
						We take 24/7 Support classes
					</h3>
					<div className="grid grid-cols-2 gap-x-7 gap-y-4">
						{supportImages.map((img, index) => (
							<div
								key={index}
								className="relative h-[148px] w-full overflow-hidden rounded-lg lg:h-[223px]"
							>
								<Image
									src={img}
									alt={`24hours-${index}`}
									fill
									className="h-full w-full object-cover"
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex h-full flex-1 flex-col gap-y-8">
					{supportFeatures.map(({ name, description }, index) => (
						<div
							key={index}
							className="flex w-full flex-col gap-y-2 text-black"
						>
							<h5 className="text-sm font-medium lg:text-xl">{name}</h5>
							<p className="text-xs font-normal lg:text-base">{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
