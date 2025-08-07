"use client"

import PageHeaderText from "../../components/PageHeader"
import ClassScheduleCalender from "../../components/calender"
import { ClassCard } from "../../components/class-card"
// import { Spinner } from "@/components/shared"
import { useJoinLecture } from "@/services/mutation/useQuery-mutation"
import {
	studentUpcomingLecturesQueryOptions,
	studentTimetableLecturesQueryOptions
} from "@/services/query"
import {
	studentTransformClassesToCardData,
	transformTimetableLecturesToClassEvents
} from "@/utils/constants"
import { useSuspenseQuery } from "@tanstack/react-query"
import React from "react"

export const LiveSession = () => {
	const { data: classesData, isError: classesError } = useSuspenseQuery({
		...studentUpcomingLecturesQueryOptions(),
		select: (data) => {
			if (!data.data) throw new Error(data.message || "Exams data not found")
			return (
				data.data.lectures
					.map((lecture) => studentTransformClassesToCardData(lecture))
					.filter((lecture) => lecture.status === "Ongoing") ?? []
			)
		}
	})

	const { data: timetableData, isError: timetableError } = useSuspenseQuery({
		...studentTimetableLecturesQueryOptions(),
		select: (data) =>
			data.data?.map((lecture) =>
				transformTimetableLecturesToClassEvents(lecture)
			)
	})

	const { mutateAsync: joinLecture, isPending } = useJoinLecture()

	const handleJoinLecture = async (classId: string) => {
		await joinLecture(classId)
	}

	const isError = classesError || timetableError

	if (isError) return <section>Something went Wrong</section>

	return (
		<div className="p-6">
			<PageHeaderText>Live Sessions</PageHeaderText>

			<div className="relative">
				<div className="flex gap-4 overflow-x-auto pb-4">
					{classesData && classesData.length > 0 ? (
						classesData?.map((classItem) => (
							<ClassCard
								key={classItem.id}
								{...classItem}
								isLoading={isPending}
								handleClick={(id) => handleJoinLecture(id)}
							/>
						))
					) : (
						<section className="w-full h-48 grid place-items-center">
							<p className="text-lg font-semibold text-gray-900">
								No Live Session
							</p>
						</section>
					)}
				</div>
			</div>

			<h2 className="text-lg mb-4  font-bold text-gray-900">Your TimeTable</h2>

			{timetableData && timetableData.length > 0 ? (
				<ClassScheduleCalender classEvents={timetableData} />
			) : (
				<section className=" bg-white p-6 rounded-lg border-[1px] border-[#D9D9D9]">
					<div className="w-full h-48 grid place-items-center">
						<p className="text-lg font-semibold text-gray-900">
							No Timetable Data
						</p>
					</div>
				</section>
			)}
		</div>
	)
}
