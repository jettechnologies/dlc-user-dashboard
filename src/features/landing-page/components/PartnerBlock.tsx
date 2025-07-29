import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface PartnerBlockProps {
	className: string
	imgUrl: string
}

export const PartnerBlock: React.FC<PartnerBlockProps> = ({
	className,
	imgUrl
}) => {
	return (
		<div
			className={twMerge(
				"mx-auto flex h-80 w-[220px] items-center justify-center rounded-2xl px-5 py-10",
				className
			)}
		>
			<div className="relative h-52 w-52">
				<Image
					src={imgUrl}
					alt="Partner Logo"
					fill
					className="object-contain"
				/>
			</div>
		</div>
	)
}
