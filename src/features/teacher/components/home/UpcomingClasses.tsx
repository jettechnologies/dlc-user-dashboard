import { ClassCard, ClassCardProps } from "./ClassCard"

// const upcomingClasses: ClassCardProps[] = [
// 	{
// 		subject: "Mathematics",
// 		type: "Lecture",
// 		date: "2025-05-30T10:40:00",
// 		duration: 5400000,
// 		noOfStudents: "25"
// 	},
// 	{
// 		subject: "Physics",
// 		type: "Lab",
// 		date: "2025-05-31T14:00:00",
// 		duration: 7200000,
// 		noOfStudents: "15"
// 	},
// 	{
// 		subject: "Chemistry",
// 		type: "Tutorial",
// 		date: "2025-06-02T09:30:00",
// 		duration: 3600000,
// 		noOfStudents: "20"
// 	},
// 	{
// 		subject: "Biology",
// 		type: "Seminar",
// 		date: "2025-06-06T13:15:00",
// 		duration: 10800000,
// 		noOfStudents: "30"
// 	},
// 	{
// 		subject: "Computer Science",
// 		type: "Workshop",
// 		date: "2025-06-13T11:00:00",
// 		duration: 14400000,
// 		noOfStudents: "40"
// 	}
// ]

interface UpcomingClassesProps {
	upcomingClasses: ClassCardProps[]
}

export function UpcomingClasses({ upcomingClasses }: UpcomingClassesProps) {
	return (
		<div className="bg-white rounded-lg p-6 shadow-sm">
			<h2 className="text-lg font-semibold text-gray-900 mb-4">
				Upcoming Classes
			</h2>

			<div className="space-y-4">
				{upcomingClasses.length > 0 ? (
					upcomingClasses.map((classItem, index) => (
						<ClassCard key={index} {...classItem} />
					))
				) : (
					<div className="w-full h-[250px] grid place-content-center">
						<p className="text-gray-600">No Upcoming Classes</p>
					</div>
				)}
			</div>
		</div>
	)
}
