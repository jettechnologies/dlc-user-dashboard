import { StatsCard } from "./stats-card"
import { Users, BookOpen, Download, Clock } from "lucide-react"
import { useMemo } from "react"

interface StatsCardProps {
	userStats: {
		availableClasses: number
		attendedClasses: number
		enrolledClasses: number
	}
}

export function StatsGrid({ userStats }: StatsCardProps) {
	const statsData = useMemo(
		() => [
			{
				title: "Classes Attended",
				value: userStats.attendedClasses.toString(),
				// change: "10% increase from last week",
				icon: Users,
				iconColor: "bg-blue-500"
			},
			{
				title: "Classes Registered",
				value: userStats.enrolledClasses.toString(),
				// change: "10% increase from last month",
				icon: BookOpen,
				iconColor: "bg-yellow-500"
			},
			{
				title: "Available Classes",
				value: userStats.availableClasses.toString(),
				// change: "10% increase from last week",
				icon: Download,
				iconColor: "bg-blue-600"
			},
			{
				title: "Learning Hours",
				value: "46",
				// change: "10% increase from last month",
				icon: Clock,
				iconColor: "bg-yellow-600"
			}
		],
		[userStats]
	)

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{statsData.map((stat, index) => (
				<StatsCard key={index} {...stat} />
			))}
		</div>
	)
}
