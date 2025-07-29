import {
	CourseAnalyticsCard,
	CourseAnalyticsCardProps
} from "./CourseAnalyticsCard"

interface CourseAnalyticsGridProps {
	courseAnalytics: CourseAnalyticsCardProps[]
}

export const CourseAnalyticsGrid = ({
	courseAnalytics
}: CourseAnalyticsGridProps) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{courseAnalytics.map((stat, index) => (
				<CourseAnalyticsCard key={index} {...stat} />
			))}
		</div>
	)
}
