import Image from "next/image"

export interface AboutFeatureProps {
	imgSrc: string
	title: string
	description: string
}

export const AboutFeaturesCard = ({
	imgSrc,
	title,
	description
}: AboutFeatureProps) => {
	return (
		<div className="flex md:flex-col lg:flex-row w-fit gap-4">
			<div className="relative h-[118px] w-[145px] overflow-clip rounded-xl md:h-[200px] md:w-[244px]">
				<Image
					src={imgSrc}
					alt={`${title}-image`}
					fill
					className="object-cover"
				/>
			</div>
			<div className="w-fit max-w-[229px]">
				<h5 className="text-xl font-semibold text-black lg:text-2xl">
					{title}
				</h5>
				<p className="mt-3 text-xs font-normal text-black lg:text-sm">
					{description}
				</p>
			</div>
		</div>
	)
}
