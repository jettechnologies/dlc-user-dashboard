"use client"

import { cn } from "@/utils/lib/utils"

export interface OnDemandCardProps {
	price: number
	duration: string
	description: string
	variant?: "yellow" | "dark"
	onSubscribe?: () => void
}

export function OnDemandCard({
	price,
	duration,
	description,
	variant = "yellow",
	onSubscribe
}: OnDemandCardProps) {
	const isYellow = variant === "yellow"

	return (
		<div className="w-[200px] h-[230px] relative">
			{/* overlay  */}
			<div
				className={`absolute -top-[5px] rounded-[16px] -left-[5px] z-20 w-[200px] h-[230px] ${!isYellow ? "bg-yellow-400" : "bg-black"}`}
			/>
			{/* main card */}
			<div
				className={cn(
					"w-[200px] p-[20px] rounded-[16px] h-[230px]  z-30  flex flex-col justify-between shadow-lg transition-transform duration-200 hover:scale-105 relative",
					isYellow ? "bg-yellow-400" : "bg-black"
				)}
			>
				{/* Price Section */}
				<div>
					<h2
						className={cn(
							"text-xl font-bold pb-2 border-b border-white",
							isYellow ? "text-black" : "text-white"
						)}
					>
						N{price}
					</h2>

					<div className="flex items-center justify-between my-4">
						<span
							className={cn(
								"text-xs font-semibold capitalize",
								isYellow ? "text-black" : "text-white"
							)}
						>
							{duration}
						</span>
						<span
							className={cn(
								"text-xs font-normal px-2 py-1 rounded",
								isYellow ? "text-black" : "text-white"
							)}
						>
							Subscription
						</span>
					</div>

					<p
						className={cn(
							"text-xs font-normal leading-[1.25em] mt-5",
							isYellow ? "text-black/80" : "text-white/80"
						)}
					>
						{description}
					</p>
				</div>

				{/* Subscribe Button */}
				<button
					type="button"
					onClick={onSubscribe}
					className={cn(
						"w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200",
						isYellow
							? "bg-white text-black hover:bg-gray-100"
							: "bg-white text-black hover:bg-gray-200"
					)}
				>
					Subscribe
				</button>
			</div>
		</div>
	)
}

// "use client"

// import { cn } from "@/utils/lib/utils"

// export interface OnDemandCardProps {
// 	price: number
// 	duration: string
// 	description: string
// 	variant: "yellow" | "dark"
// 	onSubscribe?: () => void
// }

// export function OnDemandCard({
// 	price,
// 	duration,
// 	description,
// 	variant = "yellow",
// 	onSubscribe
// }: OnDemandCardProps) {
// 	const isYellow = variant === "yellow"

// 	return (
// 		<div className="w-[160px] h-[200px] border-2 border-black relative">
{
	/* <div
	className={`absolute -top-[10px] -left-[20px] w-full h-full ${!isYellow ? "bg-yellow-400" : "bg-black"}`}
/> */
}
// 			<div
// 				className={cn(
// 					"w-64 h-[200px] rounded-2xl p-6 flex flex-col justify-between shadow-lg",
// 					isYellow ? "bg-yellow-400" : "bg-black"
// 				)}
// 			>
// 				{/* Price Section */}
// 				<div>
// 					<h2
// 						className={cn(
// 							"text-3xl font-bold mb-2",
// 							isYellow ? "text-black" : "text-white"
// 						)}
// 					>
// 						{price}
// 					</h2>

// 					<div className="flex items-center gap-2 mb-4">
// 						<span
// 							className={cn(
// 								"text-sm font-medium",
// 								isYellow ? "text-black" : "text-white"
// 							)}
// 						>
// 							{duration}
// 						</span>
// 						<span
// 							className={cn(
// 								"text-xs px-2 py-1 rounded",
// 								isYellow ? "bg-black/10 text-black" : "bg-white/20 text-white"
// 							)}
// 						>
// 							Subscription
// 						</span>
// 					</div>

// 					{/* Description */}
// 					<p
// 						className={cn(
// 							"text-sm leading-relaxed",
// 							isYellow ? "text-black/80" : "text-white/80"
// 						)}
// 					>
// 						{description}
// 					</p>
// 				</div>

// 				{/* Subscribe Button */}
// 				<button
// 					onClick={onSubscribe}
// 					className={cn(
// 						"w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105",
// 						isYellow
// 							? "bg-white text-black hover:bg-gray-50"
// 							: "bg-white text-black hover:bg-gray-100"
// 					)}
// 				>
// 					Subscribe
// 				</button>
// 			</div>
// 		</div>
// 	)
// }
