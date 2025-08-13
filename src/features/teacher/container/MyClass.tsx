"use client"

import {
	// ClassData,
	ClassCard,
	ClassType
} from "../components/my-class/ClassCard"
import { PageWrapper, TabIndicator } from "../components/shared"
import { Button } from "@/components/ui"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { CancelClassModal } from "@/layout/modal"
import {
	useDeleteLecture,
	useStartLecture
} from "@/services/mutation/useQuery-mutation"
import { getLecturesQueryOptions } from "@/services/query"
import { useAuthState } from "@/stores"
import type { TeacherProfile } from "@/types/response-type"
import { transformToClassData } from "@/utils/constants"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

// const draftClasses: ClassData[] = [
// 	{
// 		id: "5",
// 		name: "NECO",
// 		subject: "Mathematics",
// 		time: "10:00 AM - 11:00 AM",
// 		students: 40,
// 		files: 4,
// 		status: "30-days-ago"
// 	},
// 	{
// 		id: "6",
// 		name: "WAEC",
// 		subject: "Mathematics",
// 		time: "10:00 AM - 11:00 AM",
// 		students: 40,
// 		files: 4,
// 		status: "30-days-ago"
// 	},
// 	{
// 		id: "7",
// 		name: "WAEC",
// 		subject: "Mathematics",
// 		time: "10:00 AM - 11:00 AM",
// 		students: 40,
// 		files: 4,
// 		status: "30-days-ago"
// 	},
// 	{
// 		id: "8",
// 		name: "WAEC",
// 		subject: "Mathematics",
// 		time: "10:00 AM - 11:00 AM",
// 		students: 40,
// 		files: 4,
// 		status: "30-days-ago"
// 	}
// ]

const tabs = ["upcoming", "completed", "drafts"] as ClassType[]

export default function ClassList() {
	const [activeTab, setActiveTab] = useState<ClassType>("upcoming")
	const [currentClassId, setCurrentClassId] = useState<string | null>(null)
	const { data: lectureData } = useSuspenseQuery({
		...getLecturesQueryOptions(activeTab),
		select: (response) => {
			const lecturesArray = response.data?.data ?? []
			return lecturesArray.map((lectures) => transformToClassData(lectures))
		}
	})

	const { mutateAsync: startLecture } = useStartLecture()

	const { mutateAsync: deleteLecture, isPending: isDeleting } =
		useDeleteLecture()

	const { userProfile } = useAuthState()
	const teacherProfile = userProfile as TeacherProfile
	const router = useRouter()

	const handleScheduleClass = () => {
		const isApproved = teacherProfile.isApproved

		if (isApproved) {
			router.push("/teacher/schedule-class")
		} else {
			toast.warning("You need to be approved to schedule a class")
		}
	}

	const handleStartLecture = async (classId: string) => {
		try {
			await startLecture(classId)
		} catch (error) {
			console.log(error, "error")
		}
	}

	const handleDeleteLecture = async () => {
		if (currentClassId !== null) {
			await deleteLecture(currentClassId)
			setCurrentClassId(null)
		}
	}

	return (
		<>
			<PageWrapper className="space-y-5">
				<div className="w-full font-poppins">
					<h3 className="font-semibold text-2xl text-black">My Classes</h3>
					<p className="font-normal text-xs text-black ">
						Manage your class schedules
					</p>
				</div>
				<div className="w-full bg-white mx-auto p-6">
					{/* tabs indicator for desktop */}
					<div className="w-full hidden lg:block">
						<TabIndicator
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							tabs={tabs}
							tabLabels={{
								upcoming: "Upcoming",
								completed: "Past",
								drafts: "Drafts"
							}}
						/>
					</div>
					{/* for mobile display */}
					<div className="block lg:hidden w-full mb-6">
						<div className="w-full space-y-4">
							<h4 className="font-semibold text-base font-poppins text-black">
								Select class type
							</h4>
							<Select
								value={activeTab}
								onValueChange={(value) => setActiveTab(value as ClassType)}
							>
								<SelectTrigger className="w-full">
									<SelectValue
										className="capitalize"
										placeholder="Select class type"
									/>
								</SelectTrigger>
								<SelectContent>
									{tabs.map((tab) => (
										<SelectItem key={tab} value={tab} className="capitalize">
											{tab}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Class List */}
					<div>
						{activeTab === "upcoming" ? (
							<div className="w-full space-y-4">
								{lectureData.length > 0 ? (
									lectureData.map((classData) => (
										<ClassCard
											key={classData.id}
											classData={classData}
											classType="upcoming"
											startClass={(id) => handleStartLecture(id)}
											cancelClass={(id) => setCurrentClassId(id)}
										/>
									))
								) : (
									<div className="w-full space-y-4 py-8 grid place-items-center">
										<p>No class Data found</p>
										<Button
											className="bg-light-yellow hover:bg-light-yellow text-black font-medium py-3 h-auto w-[250px]"
											onClick={handleScheduleClass}
										>
											Schedule Class
										</Button>
									</div>
								)}
							</div>
						) : activeTab === "completed" ? (
							<div className="w-full space-y-4">
								{lectureData.length > 0 ? (
									lectureData.map((classData) => (
										<ClassCard
											key={classData.id}
											classData={classData}
											classType="completed"
											deleteClass={(id) => setCurrentClassId(id)}
										/>
									))
								) : (
									<div className="w-full space-y-4 py-8 grid place-items-center">
										<p>No upcoming class Data found</p>
									</div>
								)}
							</div>
						) : (
							<div className="w-full space-y-4">
								{/* {draftClasses.map((classData) => (
									<ClassCard
										key={classData.id}
										classData={classData}
										classType="drafts"
									/>
								))} */}
								<div className="w-full space-y-4 py-8 grid place-items-center">
									<p>No draft class Data found</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</PageWrapper>
			<CancelClassModal
				onCancelClass={handleDeleteLecture}
				open={currentClassId !== null}
				onOpenChange={(open) => setCurrentClassId(open ? currentClassId : null)}
				isDeleting={isDeleting}
			/>
		</>
	)
}
