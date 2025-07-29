import { Card } from "@/components/shared"
import Image from "next/image"

interface SubscriptionCardProps {
	width?: string
	height?: string
	bgColor?: string
	plan: { name: string; price: number; duration: string }
	benefits: string[]
	buttonGradient?: string
	onClick?: () => void
	isLoading?: boolean
}

export const SubscriptionCard = ({
	width = "320px",
	height = "580px",
	bgColor = "#ffffff",
	plan,
	benefits,
	buttonGradient,
	onClick,
	isLoading
}: SubscriptionCardProps) => {
	const isGradient = bgColor.includes("linear-gradient")

	const checkIcon = isGradient
		? "/icons/subscription-check-white.svg"
		: "/icons/subscription-check-color.svg"

	return (
		<Card
			width={width}
			height={height}
			bgColor={bgColor}
			className="flex h-full flex-col rounded-[15px] shadow-md"
		>
			<div
				className={`flex h-full flex-col font-poppins ${
					isGradient ? "text-white" : "text-[#1B1B1B]"
				}`}
			>
				{/* Plan Details */}
				<div className="w-full border-b border-[#1B1B1B] px-6 pb-[40px]">
					<p className="font-poppins text-[20px] font-medium capitalize">
						{plan.name}
					</p>
					<h3
						className={`text-[48px] font-bold ${
							isGradient ? "text-white" : "text-SC-Brand-Blue"
						}`}
					>
						N{plan.price}
						<sub
							className={`text-[16px] font-medium capitalize ${
								isGradient ? "text-white" : "text-[#1B1B1B]"
							}`}
						>
							/{plan.duration}
						</sub>
					</h3>
				</div>

				{/* Benefits & Button Wrapper */}
				<div className="flex flex-grow flex-col justify-between px-6 pt-[60px]">
					{/* Benefits List */}
					<div className="flex flex-col gap-y-[17px]">
						{benefits.map((benefit, index) => (
							<div key={index} className="flex gap-x-3">
								<Image
									src={checkIcon}
									alt="check icon"
									height={20}
									width={20}
									className="object-fit h-[20px] w-[20px]"
								/>
								<p className="font-poppins text-[14px] font-medium">
									{benefit}
								</p>
							</div>
						))}
					</div>

					{/* Button at Bottom */}
					<button
						className="mx-auto mb-5 mt-auto flex h-[40px] w-[180px] cursor-pointer items-center justify-center rounded-[66px] text-center capitalize text-[#ffffff]"
						style={{
							background: buttonGradient
						}}
						onClick={onClick}
					>
						{isLoading ? "Paying..." : "Start plan now"}
					</button>
				</div>
			</div>
		</Card>
	)
}
