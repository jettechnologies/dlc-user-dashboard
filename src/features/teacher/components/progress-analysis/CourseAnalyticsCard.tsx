import { User, Star } from "lucide-react"

export interface CourseAnalyticsCardProps {
	title: string
	noOFStudents: number
	courseRating: number
}

export const CourseAnalyticsCard = ({
	title,
	noOFStudents,
	courseRating
}: CourseAnalyticsCardProps) => {
	return (
		<div className="w-[209px] h-[173px] rounded-[8px] drop-shadow-md bg-white flex items-center justify-center">
			<div className="w-fit font-poppins">
				<h3 className="text-2xl font-semibold text-black uppercase mb-5">
					{title}
				</h3>
				<div className="space-y-5">
					<div className="flex gap-x-2 font-poppins text-black font-light">
						<User size={16} className="text-black" />
						<p className="text-[10px] text-black">{noOFStudents} students</p>
					</div>
					<CourseRating courseRating={courseRating} />
				</div>
			</div>
		</div>
	)
}

const CourseRating = ({ courseRating }: { courseRating: number }) => {
	const getRatingColor = (courseRating: number): string => {
		if (courseRating > 4) {
			return "text-green-600"
		} else if (courseRating >= 2.5) {
			return "text-yellow-600"
		} else {
			return "text-red-600"
		}
	}

	const ratingColor = getRatingColor(courseRating)

	return (
		<div className={`flex gap-x-2 font-poppins font-light ${ratingColor}`}>
			<Star size={16} />
			<p className="text-[10px]">{courseRating} students</p>
		</div>
	)
}
