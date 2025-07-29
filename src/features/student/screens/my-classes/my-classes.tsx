"use client"

import PageHeaderText from "../../components/PageHeader"
import { ClassCard } from "../../components/class-card"
import { Spinner } from "@/components/shared"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAddToTimetable } from "@/services/mutation/useQuery-mutation"
import { studentUpcomingLecturesQueryOptions } from "@/services/query"
import { studentTransformClassesToCardData } from "@/utils/constants"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const tabs = ["Ongoing", "Upcoming", "Past Classes"]

export const MyClasses = () => {
	const [activeTab, setActiveTab] = useState(tabs[0])

	console.log(activeTab, "active tab")

	const {
		data,
		isError: classesError,
		isLoading: classesLoading
	} = useQuery({
		...studentUpcomingLecturesQueryOptions(),
		select: (data) => {
			if (!data.data) throw new Error(data.message || "Exams data not found")
			return {
				upcomingLectures:
					data.data.lectures
						.map((lecture) => studentTransformClassesToCardData(lecture))
						.filter((lecture) => lecture.status !== "Ongoing") ?? [],
				ongoingLectures:
					data.data.lectures
						.map((lecture) => studentTransformClassesToCardData(lecture))
						.filter((lecture) => lecture.status === "Ongoing") ?? []
			}
		},
		enabled: activeTab === "upcoming"
	})

	const { mutateAsync: addToTimetable, isPending: isAdding } =
		useAddToTimetable()

	const handleAddToTimetable = async (classId: string) => {
		await addToTimetable(classId)
	}

	if (classesError) return <div>Something went wrong</div>

	return (
		<>
			<div className="p-6">
				<div className="flex justify-between items-center w-full">
					<PageHeaderText>My Classes</PageHeaderText>

					<div className="flex items-start gap-2 flex-col max-w-[200px] w-full">
						<span className="text-sm font-medium text-gray-700">Subject</span>
						<Select defaultValue="all">
							<SelectTrigger className="w-full bg-white">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All</SelectItem>
								<SelectItem value="english">English</SelectItem>
								<SelectItem value="mathematics">Mathematics</SelectItem>
								<SelectItem value="physics">Physics</SelectItem>
								<SelectItem value="chemistry">Chemistry</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="max-w-7xl mx-auto px-6 mt-10 bg-white">
					<Tabs
						value={activeTab.toLowerCase()}
						onValueChange={setActiveTab}
						className="w-full"
					>
						<TabsList className="grid w-full grid-cols-3 bg-transparent h-auto p-0 border-b border-gray-200">
							{tabs.map((tab) => (
								<TabsTrigger
									key={tab}
									value={tab.toLowerCase()}
									className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-light-yellow border-x-0 border-t-0 data-[state=active]:text-gray-900 data-[state=active]:font-semibold rounded-none py-4 px-6 text-gray-500 hover:text-gray-700 transition-colors"
								>
									{tab}
								</TabsTrigger>
							))}
						</TabsList>

						<TabsContent value="ongoing" className="mt-8">
							{classesLoading ? (
								<div className="w-full h-48 flex items-center justify-center bg-white p-6 rounded-lg ">
									<div className="flex items-center space-x-3">
										<Spinner />
										<p className="text-lg font-semibold text-gray-900">
											Loading...
										</p>
									</div>
								</div>
							) : data?.ongoingLectures && data?.ongoingLectures.length > 0 ? (
								<div
									className="flex gap-4 overflow-x-auto pb-4 flex-wrap"
									aria-label="Upcoming classes list"
								>
									{data?.ongoingLectures.map((cardData) => (
										<ClassCard
											key={cardData.id}
											{...cardData}
											handleClick={() => handleAddToTimetable(cardData.id)}
											isLoading={isAdding}
										/>
									))}
								</div>
							) : (
								<div className="w-full flex flex-col items-center justify-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
									<p className="text-gray-500">
										No upcoming classes to display.
									</p>
								</div>
							)}
						</TabsContent>

						<TabsContent value="upcoming" className="mt-8">
							{classesLoading ? (
								<div className="w-full h-48 flex items-center justify-center bg-white p-6 rounded-lg ">
									<div className="flex items-center space-x-3">
										<Spinner />
										<p className="text-lg font-semibold text-gray-900">
											Loading...
										</p>
									</div>
								</div>
							) : data?.upcomingLectures &&
							  data?.upcomingLectures.length > 0 ? (
								<div
									className="flex gap-4 overflow-x-auto pb-4 flex-wrap"
									aria-label="Upcoming classes list"
								>
									{data?.upcomingLectures.map((cardData) => (
										<ClassCard
											key={cardData.id}
											{...cardData}
											handleClick={() => handleAddToTimetable(cardData.id)}
											isLoading={isAdding}
										/>
									))}
								</div>
							) : (
								<div className="w-full flex flex-col items-center justify-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
									<p className="text-gray-500">
										No upcoming classes to display.
									</p>
								</div>
							)}
						</TabsContent>

						<TabsContent value="past classes" className="mt-8">
							<div className="text-center py-12">
								<p className="text-gray-500">No past classes to display.</p>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	)
}
