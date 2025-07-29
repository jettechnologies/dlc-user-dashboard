import { Badge } from "@/components/ui/badge"
import { cn } from "@/utils/lib/utils"
import {
	addWeeks,
	addMonths,
	isTomorrow,
	addMilliseconds,
	parseISO,
	format,
	isToday
} from "date-fns"
import { BookOpen } from "lucide-react"

export interface ClassCardProps {
	subject: string
	type: string
	date: string
	duration: number
	noOfStudents: string
}

type CurrentTime = "today" | "tomorrow" | "next_week" | "next_month" | "later"

const getDateCategory = (date: Date): CurrentTime => {
	const now = new Date()

	if (isToday(date)) {
		return "today"
	} else if (isTomorrow(date)) {
		return "tomorrow"
	} else if (date <= addWeeks(now, 1)) {
		return "next_week"
	} else if (date <= addMonths(now, 1)) {
		return "next_month"
	} else {
		return "later"
	}
}

const getDateCategoryStyle = (dateCategory: CurrentTime) => {
	switch (dateCategory) {
		case "today":
			return {
				bgColor: "bg-light-yellow-200",
				badgeColor: "bg-yellow-900",
				iconBg: "bg-blue-500",
				badgeText: "Today"
			}
		case "tomorrow":
			return {
				bgColor: "bg-light-purple-200",
				badgeColor: "bg-purple-700",
				iconBg: "bg-purple-700",
				badgeText: "Tomorrow"
			}
		case "next_week":
			return {
				bgColor: "bg-light-purple-200",
				badgeColor: "bg-purple-700",
				iconBg: "bg-purple-700",
				badgeText: "Next Week"
			}
		case "next_month":
			return {
				bgColor: "bg-light-purple-200",
				badgeColor: "bg-purple-700",
				iconBg: "bg-purple-700",
				badgeText: "Next Month"
			}
		case "later":
			return {
				bgColor: "bg-light-purple-200",
				badgeColor: "bg-purple-700",
				iconBg: "bg-purple-700",
				badgeText: "Upcoming"
			}
		default:
			return {
				bgColor: "bg-light-yellow-200",
				badgeColor: "bg-yellow-900",
				iconBg: "bg-blue-500",
				badgeText: "Today"
			}
	}
}

export function ClassCard({
	subject,
	type,
	date,
	duration,
	noOfStudents
}: ClassCardProps) {
	const parsedDate = parseISO(date)

	const scheduledTime = format(parsedDate, "hh:mm a")

	const endTime = addMilliseconds(parsedDate, duration)
	const formattedEnd = format(endTime, "hh:mm a")
	const classDuration = `${scheduledTime} - ${formattedEnd}`

	// Get date category and styles
	const dateCategory = getDateCategory(parsedDate)
	const { bgColor, badgeColor, iconBg, badgeText } =
		getDateCategoryStyle(dateCategory)

	return (
		<div
			className={`flex items-center gap-4 p-4 border border-gray-200 rounded-lg ${bgColor}`}
		>
			<div className={cn("p-3 rounded-full", iconBg)}>
				<BookOpen className="h-5 w-5 text-white" />
			</div>

			<div className="flex-1 max-w-[60%]">
				<div className="flex items-center gap-2 mb-1">
					<h3 className="font-medium text-gray-900">{subject}</h3>
				</div>
				<p className="text-sm text-gray-600">{type}</p>
				<div className="w-full flex gap-x-2">
					<p className="text-xs text-gray-500">{classDuration}</p>
					<p className="text-xs text-gray-500">{noOfStudents} students</p>
				</div>
			</div>
			<div className="flex gap-x-2.5">
				<Badge
					className={`${badgeColor} text-white text-xs px-[10px] py-1 rounded-[10px]`}
				>
					{badgeText}
				</Badge>
				<Badge className="bg-white text-dlc-blue text-xs px-[10px] py-1 rounded-[10px]">
					View details
				</Badge>
			</div>
		</div>
	)
}
