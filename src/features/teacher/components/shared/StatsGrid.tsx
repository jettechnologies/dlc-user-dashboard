import { StatsCard, StatsCardProps } from "@/components/shared"

interface StatsGridProps<T extends StatsCardProps> {
	statsData: T[]
}

export function StatsGrid<T extends StatsCardProps>({
	statsData
}: StatsGridProps<T>) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{statsData.map((stat, index) => (
				<StatsCard key={index} {...stat} />
			))}
		</div>
	)
}
