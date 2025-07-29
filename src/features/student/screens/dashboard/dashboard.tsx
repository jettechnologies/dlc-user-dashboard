"use client"

import { DashboardHeader } from "../../components/dashboard-header"
import { EnrolledClasses } from "../../components/enrolled-classes"
import { NotificationsList } from "../../components/notification-list"
import { ResourcesList } from "../../components/resources-list"
import { StatsGrid } from "../../components/stats-grid"
import { HoursChart } from "../../components/study-bar-chart"
import { UpcomingClasses } from "../../components/upcoming-classes"
import { fetchStudentDashboardQueryOptions } from "@/services/query"
import { transformLectureToSimpleData } from "@/utils/constants"
import { useSuspenseQuery } from "@tanstack/react-query"

export const DashboardScreen = () => {
	const { data: dashboardData } = useSuspenseQuery({
		...fetchStudentDashboardQueryOptions(),
		select: (data) => {
			if (!data.data)
				throw new Error(data.message || "Dashboard data not found")
			return {
				userStats: {
					availableClasses: data.data.totalAvailableClasses,
					attendedClasses: data.data.totalAttended,
					enrolledClasses: data.data.totalTimetable
				},
				// upcomingClasses: data.data.upcomingLectures.map((lecture) =>
				// 	studentTransformClassesToCardData(lecture)
				// ),
				upcomingClasses: data.data.upcomingLectures,
				recentEnrolledClasses: data.data.recentTimetableEntries.map(
					(lecture) => ({
						...transformLectureToSimpleData(lecture)
					})
				)
			}
		}
	})

	console.log(dashboardData.recentEnrolledClasses, "recentEnrolledClasses")

	return (
		<main className="min-h-screen p-6">
			<div className="space-y-6">
				<DashboardHeader />
				<StatsGrid userStats={dashboardData.userStats} />
				<UpcomingClasses />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
				<HoursChart />
				<ResourcesList />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
				<NotificationsList />
				<EnrolledClasses classes={dashboardData.recentEnrolledClasses} />
			</div>
		</main>
	)
}
