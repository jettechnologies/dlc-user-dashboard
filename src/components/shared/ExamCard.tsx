import { ReactSvgIcon } from "./Icon"
import { cn } from "@/utils/lib/utils"
import { Star, EllipsisVertical } from "lucide-react"
import Image from "next/image"

export interface CardRating {
	value: number
	maxValue?: number
	showValue?: boolean
	size?: "sm" | "md" | "lg"
}

interface ExamCardProps {
	examName: string
	rating: CardRating
	studentCount: number
	examImage: string
	className?: string
}

export const StarRating = ({
	value,
	maxValue = 5,
	showValue = false,
	size = "md"
}: CardRating) => {
	const starSize =
		size === "sm" ? "w-3 h-3" : size === "lg" ? "w-5 h-5" : "w-4 h-4"

	return (
		<div className="flex items-center gap-1">
			<div className="flex">
				{Array.from({ length: maxValue }, (_, i) => (
					<Star
						key={i}
						className={cn(
							starSize,
							i < value
								? "fill-yellow-400 text-yellow-400"
								: "fill-gray-200 text-gray-200"
						)}
					/>
				))}
			</div>
			{showValue && (
				<span className="text-sm text-gray-600 ml-1">
					{value}/{maxValue}
				</span>
			)}
		</div>
	)
}

export const ExamCard = ({
	examName,
	rating,
	studentCount,
	examImage,
	className
}: ExamCardProps) => {
	return (
		<div
			className={cn(
				"bg-white w-[225px] p-2 min-h-[335px] rounded-[22px] drop-shadow-xl",
				className
			)}
		>
			<Image
				src={examImage || "/teacher/exam-img-1.png"}
				alt="exam image"
				width={210}
				height={158}
				className="rounded-2xl"
			/>
			<div className="mt-4 w-full flex flex-col gap-y-5 font-poppins">
				<h4 className="">{examName || "West African Examination Council"}</h4>
				<div className="w-max">
					<div className="w-full flex gap-x-1">
						<ReactSvgIcon name="student-icon" />
						<p className="font-poppins font-light text-xs text-black">
							{studentCount} students
						</p>
					</div>
					<StarRating {...rating} />
				</div>
				<div className="w-full flex justify-end">
					<EllipsisVertical size={26} />
				</div>
			</div>
		</div>
	)
}
