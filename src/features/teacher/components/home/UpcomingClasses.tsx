import { ClassCard, ClassCardProps } from "./ClassCard"

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
