"use client"

import {
	ClassData,
	ClassCard,
	ClassType
} from "../components/my-class/ClassCard"
import { PageWrapper, TabIndicator } from "../components/shared"
import {
	useDeleteLecture,
	useStartLecture
} from "@/services/mutation/useQuery-mutation"
import { getLecturesQueryOptions } from "@/services/query"
import { transformToClassData } from "@/utils/constants"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useState } from "react"

// import { toast } from "sonner"

const draftClasses: ClassData[] = [
	{
		id: "5",
		name: "NECO",
		subject: "Mathematics",
		time: "10:00 AM - 11:00 AM",
		students: 40,
		files: 4,
		status: "30-days-ago"
	},
	{
		id: "6",
		name: "WAEC",
		subject: "Mathematics",
		time: "10:00 AM - 11:00 AM",
		students: 40,
		files: 4,
		status: "30-days-ago"
	},
	{
		id: "7",
		name: "WAEC",
		subject: "Mathematics",
		time: "10:00 AM - 11:00 AM",
		students: 40,
		files: 4,
		status: "30-days-ago"
	},
	{
		id: "8",
		name: "WAEC",
		subject: "Mathematics",
		time: "10:00 AM - 11:00 AM",
		students: 40,
		files: 4,
		status: "30-days-ago"
	}
]

export default function ClassList() {
	const [activeTab, setActiveTab] = useState<ClassType>("upcoming")
	const { data: lectureData } = useSuspenseQuery({
		...getLecturesQueryOptions(activeTab),
		select: (response) => {
			const lecturesArray = response.data?.data ?? []
			return lecturesArray.map((lectures) => transformToClassData(lectures))
		}
	})

	const { mutateAsync: startLecture } = useStartLecture()

	const { mutateAsync: deleteLecture } = useDeleteLecture()

	const handleStartLecture = async (classId: string) => {
		try {
			await startLecture(classId)

			// if (!response.data?.moderatorJoinUrl) {
			// 	toast.error("No attendee URL to use in joining")
			// 	return
			// }

			// window.location.href = response?.data.moderatorJoinUrl
		} catch (error) {
			console.log(error, "error")
		}
	}

	const handleDeleteLecture = async (classId: string) => {
		console.log("its working")
		await deleteLecture(classId)
	}

	return (
		<PageWrapper className="space-y-5">
			<div className="w-full font-poppins">
				<h3 className="font-semibold text-2xl text-black">My Classes</h3>
				<p className="font-normal text-xs text-black ">
					Manage your class schedules
				</p>
			</div>
			<div className="w-full bg-white mx-auto p-6">
				<TabIndicator
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					tabs={["upcoming", "completed", "drafts"]}
					tabLabels={{
						upcoming: "Upcoming",
						completed: "Past",
						drafts: "Drafts"
					}}
				/>

				{/* Class List */}
				<div>
					{activeTab === "upcoming" ? (
						<div className="w-full space-y-4">
							{lectureData.map((classData) => (
								<ClassCard
									key={classData.id}
									classData={classData}
									classType="upcoming"
									startClass={(id) => handleStartLecture(id)}
									cancelClass={(id) => handleDeleteLecture(id)}
								/>
							))}
						</div>
					) : activeTab === "completed" ? (
						<div className="w-full space-y-4">
							{lectureData.length > 0 ? (
								lectureData.map((classData) => (
									<ClassCard
										key={classData.id}
										classData={classData}
										classType="completed"
										deleteClass={(id) => handleDeleteLecture(id)}
									/>
								))
							) : (
								<div className="w-full space-y-4 py-8 grid place-items-center">
									<p>No class Data found</p>
								</div>
							)}
						</div>
					) : (
						<div className="w-full space-y-4">
							{draftClasses.map((classData) => (
								<ClassCard
									key={classData.id}
									classData={classData}
									classType="drafts"
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</PageWrapper>
	)
}
