import { Button } from "@/components/ui"
import { Badge } from "@/components/ui/badge"
import {
	FileText,
	Clock,
	Users,
	Play,
	X,
	Trash2,
	SquarePen,
	Send
} from "lucide-react"
import React, { memo } from "react"

export type ClassStatus = "today" | "tomorrow" | "in-days" | "30-days-ago"
export type ClassType = "completed" | "upcoming" | "drafts"

export interface ClassData {
	id: string
	name: string
	subject: string
	time: string
	students: number
	files: number
	status: ClassStatus
	daysAgo?: number
}

interface BaseProps {
	classType: ClassType
	deleteClass?: (id: string) => void
	editClass?: (id: string) => void
	scheduleClass?: (id: string) => void
	startClass?: (id: string) => void
	viewClass?: (id: string) => void
	cancelClass?: (id: string) => void
}

interface ClassCardProps extends BaseProps {
	classData: ClassData
}

// Memoized badge renderer
const StatusBadge = memo(function StatusBadge({
	status,
	daysAgo
}: {
	status: ClassStatus
	daysAgo?: number
}) {
	switch (status) {
		case "today":
			return (
				<Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
					Today
				</Badge>
			)
		case "tomorrow":
			return (
				<Badge className="bg-purple-500 hover:bg-purple-600 text-white">
					Tomorrow
				</Badge>
			)
		case "in-days":
			return (
				<Badge className="bg-green-500 hover:bg-green-600 text-white">
					In {daysAgo} days
				</Badge>
			)
		case "30-days-ago":
			return (
				<Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
					30 days ago
				</Badge>
			)
		default:
			return null
	}
})

// Memoized ActionsButtons
const ActionsButtons = memo(function ActionsButtons({
	classType,
	classId,
	deleteClass,
	editClass,
	scheduleClass,
	startClass,
	viewClass,
	cancelClass
}: BaseProps & { classId: string }) {
	console.log(viewClass)
	return (
		<div className="flex items-center space-x-3">
			{classType === "upcoming" ? (
				<>
					{/* <Button
						className="text-blue-600 hover:text-blue-700 hover:bg-gray-100 p-2 rounded-md bg-gray-100 "
						onClick={() => viewClass?.(classId)}
					>
						View details
						<ChevronRight className="w-4 h-4 ml-1" />
					</Button> */}
					<Button
						className="text-gray-600 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-md bg-gray-100"
						onClick={() => startClass?.(classId)}
					>
						<Play className="w-4 h-4 mr-1" />
						Begin class
					</Button>
					<Button
						className="text-red-600 hover:text-red-700 hover:bg-gray-100 p-2 rounded-md bg-gray-100"
						onClick={() => cancelClass?.(classId)}
					>
						<X className="w-4 h-4 mr-1" />
						Delete Class
					</Button>
				</>
			) : classType === "completed" ? (
				<>
					{/* <Button
						className="text-blue-600 hover:text-blue-700 hover:bg-gray-100 p-2 rounded-md bg-gray-100"
						onClick={() => viewClass?.(classId)}
					>
						View details
						<ChevronRight className="w-4 h-4 ml-1" />s
					</Button> */}
					<Button
						className="text-red-600 hover:text-red-700 hover:bg-gray-100 p-2 rounded-md bg-gray-100"
						onClick={() => deleteClass?.(classId)}
					>
						<Trash2 className="w-4 h-4 mr-1" />
						Delete
					</Button>
				</>
			) : (
				<>
					<Button
						className="text-black hover:text-black  hover:bg-gray-100 p-2 rounded-md bg-gray-100"
						onClick={() => editClass?.(classId)}
					>
						Edit
						<SquarePen className="w-4 h-4 ml-1" />
					</Button>
					<Button
						className="text-white hover:text-white p-2 rounded-md bg-dlc-blue-700 hover:bg-dlc-blue-700"
						onClick={() => scheduleClass?.(classId)}
					>
						<Send className="w-4 h-4 ml-1" />
						Schedule
					</Button>
					<Button
						className="text-red-600 hover:text-red-700 hover:bg-gray-100 p-2 rounded-md bg-gray-100"
						onClick={() => deleteClass?.(classId)}
					>
						<Trash2 className="w-4 h-4 mr-1" />
						Delete
					</Button>
				</>
			)}
		</div>
	)
})

export const ClassCard = memo(function ClassCard({
	classData,
	classType,
	deleteClass,
	editClass,
	scheduleClass,
	startClass,
	viewClass,
	cancelClass
}: ClassCardProps) {
	const classId = classData.id

	return (
		<div className="p-3 rounded-xl h-full flex items-center bg-[hsla(0, 0%, 98%, 1)] shadow-sm">
			<div className="flex flex-col lg:flex-row lg:items-center gap-y-5 justify-between w-full">
				<div className="flex items-center space-x-6 lg:space-x-4">
					<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
						<FileText className="w-6 h-6 text-white" />
					</div>
					<div className="flex-1">
						<div className="flex items-center space-x-3 mb-2">
							<h3 className="font-semibold text-lg">{classData.name}</h3>
							{classType !== "drafts" && (
								<StatusBadge
									status={classData.status}
									daysAgo={classData.daysAgo}
								/>
							)}
						</div>
						<p className="text-gray-600 mb-2">{classData.subject}</p>
						<div className="flex flex-wrap items-center gap-2 lg:gap-4 text-sm text-gray-500">
							<div className="flex items-center space-x-1">
								<Clock className="w-4 h-4" />
								<span>{classData.time}</span>
							</div>
							<div className="flex items-center space-x-1">
								<Users className="w-4 h-4" />
								<span>{classData.students} students</span>
							</div>
							<div className="flex items-center space-x-1">
								<FileText className="w-4 h-4" />
								<span>{classData.files} Files</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center space-x-2.5">
					{classType === "drafts" && (
						<Badge className="bg-gray-500 px-2.5 py-[2px] text-white font-poppins text-[8px] font-normal">
							Last modified : 2 hours ago
						</Badge>
					)}
					<ActionsButtons
						classType={classType}
						classId={classId}
						deleteClass={deleteClass}
						editClass={editClass}
						scheduleClass={scheduleClass}
						startClass={startClass}
						viewClass={viewClass}
						cancelClass={cancelClass}
					/>
				</div>
			</div>
		</div>
	)
})
