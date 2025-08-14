import Image from "next/image"
import Link from "next/link"

interface DescriptionListProps {
	title: string
	description: string
	link?: {
		text: string
		href: string
	}
	icon: string
}

export const DescriptionList = ({
	title,
	description,
	link,
	icon
}: DescriptionListProps) => {
	return (
		<div className="w-full max-w-[550px] flex gap-x-5 items-start">
			<Image
				src={`/icons/${icon}.svg`}
				alt="description-icon "
				width={30}
				height={30}
				className={``}
			/>
			<div className="font-poppins">
				<p className="font-black text-base md:text-lg captialize text-black">
					{title}
				</p>
				<p className="font-normal text-sm md:text-base captialize text-black">
					{description}
					{link?.href && (
						<span>
							<Link
								className="text-dlc-blue underline"
								href={link?.href || ""}
							></Link>
							{link?.text}
						</span>
					)}
				</p>
			</div>
		</div>
	)
}
