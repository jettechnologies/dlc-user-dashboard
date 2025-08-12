"use client"

import { ClassCard } from "./class-card"
import { Carousel } from "@/components/shared"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import {
	useJoinLecture,
	useAddToTimetable
} from "@/services/mutation/useQuery-mutation"
import { studentUpcomingLecturesQueryOptions } from "@/services/query"
import { studentTransformClassesToCardData } from "@/utils/constants"
import { useSuspenseQuery } from "@tanstack/react-query"
import { EmblaOptionsType } from "embla-carousel"
import { Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

const carouselSettings: EmblaOptionsType = {
	loop: true,
	align: "center",
	dragFree: false,
	startIndex: 0
}

export function UpcomingClasses() {
	const router = useRouter()
	const { data: classesData, isError } = useSuspenseQuery({
		...studentUpcomingLecturesQueryOptions(),

		select: (data) => {
			if (!data.data) throw new Error(data.message || "Exams data not found")

			return data.data.lectures.map((lecture) =>
				studentTransformClassesToCardData(lecture)
			)
		}
	})

	const { mutateAsync: joinLecture, isPending: isJoining } = useJoinLecture()
	const { mutateAsync: addToTimetable, isPending: isAdding } =
		useAddToTimetable()

	const isPending = isJoining || isAdding
	const handleJoinLecture = async (classId: string) => {
		await joinLecture(classId)
	}

	const handleAddToTimetable = async (classId: string) => {
		await addToTimetable(classId)
	}

	if (classesData && classesData.length === 0 && isError)
		return <section>Something went Wrong</section>

	return (
		<div className="space-y-4">
			<div className="flex flex-col md:flex-row lg:items-center lg:justify-between gap-y-4">
				<div>
					<h2 className="text-xl font-bold text-gray-900">Upcoming Classes</h2>
					<p className="text-sm text-gray-600">
						Today we have {classesData?.length ?? 0} upcoming classes
					</p>
				</div>
				<div className="flex gap-4 justify-baseline items-end">
					<div className="flex items-start gap-2 flex-col">
						<span className=" text-sm text-gray-600">Subjects</span>
						<Select defaultValue="english">
							<SelectTrigger className="w-42 bg-white">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="english">English Language</SelectItem>
								<SelectItem value="math">Mathematics</SelectItem>
								<SelectItem value="science">Science</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button
						size="sm"
						onClick={() => router.push("/student/live-sessions")}
					>
						<Calendar className="h-4 w-4 mr-2" />
						Timetable
					</Button>
				</div>
			</div>

			<div className="relative overflow-hidden w-full max-w-[1024px]">
				<Carousel
					isAutoPlay
					hasNavigationButtons={true}
					autoPlayInterval={3000}
					options={carouselSettings}
				>
					{classesData?.map((classItem) => (
						<ClassCard
							key={classItem.id}
							{...classItem}
							handleClick={(id) =>
								classItem.status === "Ongoing"
									? handleJoinLecture(id)
									: handleAddToTimetable(id)
							}
							isLoading={isPending}
						/>
					))}
				</Carousel>
			</div>
		</div>
	)
}
