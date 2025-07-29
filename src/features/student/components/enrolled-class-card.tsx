import { StarRating } from "@/components/shared"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

type Status = "upcoming" | "ongoing"

interface ClassCardProps {
	exam: string
	topic: string
	name: string
	status: Status
}

const statusConfig = {
	upcoming: {
		dotColor: "bg-orange-500",
		textColor: "text-orange-700"
	},
	ongoing: {
		dotColor: "bg-green-500",
		textColor: "text-green-700"
	}
} as const

export function EnrolledClassCard({
	exam,
	topic,
	status,
	name
}: ClassCardProps) {
	const config = statusConfig[status]

	return (
		<Card className="w-full max-w-md shadow-md rounded-[10px] py-0! bg-white">
			<CardContent className="p-4 flex gap-x-4 items-center">
				<div className="flex items-center gap-2">
					<div className={`w-2 h-2 rounded-full ${config.dotColor}`} />
				</div>
				<div className="space-y-3">
					{/* Title */}
					<h3 className="text-black text-base font-bold font-poppins uppercase">
						{exam}
						<span className="font-normal capitalize">{`(${topic})`}</span>
					</h3>

					{/* Status and Rating Row */}
					<div className="flex items-center justify-between">
						{/* Status */}
						<div className="flex gpa-x-2 items-center mr-3">
							<Avatar className="w-6 h-6 border-2 border-white">
								<AvatarImage src="/icons/avatar-icon.svg" />
								<AvatarFallback className="text-xs bg-gray-300 text-gray-700">
									{name}
								</AvatarFallback>
							</Avatar>
							<p className="text-xs text-black font-poppins font-[400]">
								{name}
							</p>
						</div>
						{/* Rating and Avatars */}
						<div className="flex items-center gap-[52px]">
							<div className="flex items-center gap-1">
								<StarRating value={4} showValue size="sm" />
							</div>

							{/* Avatar Group */}
							<div className="flex -space-x-2">
								{Array.from({ length: 3 }).map((_, index) => (
									<Avatar key={index} className="w-6 h-6 border-2 border-white">
										<AvatarImage src="/icons/profile-icon.svg" />
										<AvatarFallback className="text-xs bg-gray-300 text-gray-700">
											{index + 1}
										</AvatarFallback>
									</Avatar>
								))}
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
