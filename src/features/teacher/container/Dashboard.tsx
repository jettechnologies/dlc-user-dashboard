"use client"

import {
	PerformanceTrend,
	QuickActions,
	UpcomingClasses,
	WelcomeHeader
} from "../components/home"
import { PageWrapper, StatsGrid } from "../components/shared"
import { fetchTeacherDashboardQueryOptions } from "@/services/query"
import { mapLectureToClassCard } from "@/utils/constants"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Clock, Presentation } from "lucide-react"
import { useMemo } from "react"

function calculatePunctualityRate(data: {
	completedLectures: number
	totalLectures: number
}) {
	const { completedLectures, totalLectures } = data
	if (!totalLectures) return "0%"
	return `${Math.round((completedLectures / totalLectures) * 100)}%`
}
export function Dashboard() {
	const { data: dashboardStats } = useSuspenseQuery({
		...fetchTeacherDashboardQueryOptions(),
		select: (data) => data.data
	})

	if (!dashboardStats) {
		throw new Error(
			"No dashboard stats found. Please ensure teacher data is available."
		)
	}

	const statsData = useMemo(() => {
		const regularityRate = calculatePunctualityRate({
			completedLectures: dashboardStats?.completedLectures,
			totalLectures: dashboardStats?.totalLectures
		})

		return [
			{
				icon: Presentation,
				value: String(dashboardStats.completedLectures),
				title: "Completed Classes",
				description: `out of ${dashboardStats.totalLectures} classes completed`,
				iconBg: "bg-blue-500"
			},
			{
				icon: Clock,
				value: regularityRate,
				title: "Regularity rate",
				description: "On-time completion",
				iconBg: "bg-yellow-500"
			},
			{
				icon: Presentation,
				value: String(dashboardStats.missedLectures),
				title: "Missed lectures",
				description: `out of ${dashboardStats.totalLectures} classes completed`,
				iconBg: "bg-blue-500"
			},
			{
				icon: Presentation,
				value: String(dashboardStats.totalLectures),
				title: "Total Classes",
				description: "Total Classes",
				iconBg: "bg-yellow-500"
			}
		]
	}, [dashboardStats])

	const upcomingClasses = useMemo(
		() =>
			dashboardStats.nextLectures.map((lecture) =>
				mapLectureToClassCard(lecture)
			),
		[dashboardStats]
	)

	return (
		<PageWrapper>
			<WelcomeHeader />
			<StatsGrid statsData={statsData} />
			<QuickActions />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
				<UpcomingClasses upcomingClasses={upcomingClasses} />
				{/* <RecentDocuments /> */}
				<PerformanceTrend />
			</div>
		</PageWrapper>
	)
}
