import StarRating from "./StarRating"
import { Button } from "@/components/ui"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"
import { MoreVertical } from "lucide-react"
import Image from "next/image"
import React from "react"

interface ExamCardProps {
	name?: string
	numberOfClasses?: number
	rating?: number
	onAddExams?: () => void
	type?: "personal" | "other"
}

export default function ExamCard({
	name,
	numberOfClasses,
	onAddExams,
	type = "personal"
}: ExamCardProps) {
	return (
		<Card className="bg-white rounded-2xl shadow-sm max-w-xs">
			<CardContent className="px-4">
				<div className="mb-4">
					<Image
						src="/images/exam-preview-img.png"
						alt="Joint Admissions and Matriculation Board"
						width={210}
						height={160}
						className="w-full object-cover rounded-xl"
					/>
				</div>
				<h3 className="font-semibold text-gray-900 mb-3 leading-tight">
					{name || "Joint Admissions and Matriculation Board"}
				</h3>
				<div className="flex items-center gap-2 mb-4">
					<Users className="w-4 h-4 text-blue-500" />
					<span className="text-sm text-gray-600">
						{numberOfClasses || 14} Classes
					</span>
					<StarRating rating={5} />
				</div>
				{type === "other" && (
					// <Button
					// 	className="w-full bg-[#f0e68c] hover:bg-[#e6d875] text-gray-900 rounded-lg font-medium"
					// 	onClick={() => onAddExams?.(id)}
					// >
					// 	Add
					// </Button>

					<div className="flex items-center justify-between">
						<Button
							className="flex-1 bg-[#f0e68c] hover:bg-[#e6d875] text-gray-900 rounded-lg font-medium mr-2"
							onClick={onAddExams}
						>
							Add
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="w-8 h-8 text-gray-500"
						>
							<MoreVertical className="w-4 h-4" />
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	)
}
