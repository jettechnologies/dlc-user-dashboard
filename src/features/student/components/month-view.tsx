import { EventCard } from "./event-card"
import { ClassEvent } from "@/types/index"

interface MonthViewProps {
	events: ClassEvent[]
}

export function MonthView({ events }: MonthViewProps) {
	// Group events by weeks (simplified - in real app you'd calculate actual weeks)
	const weeks = [
		{ label: "Week 1", events: events.slice(0, 3) },
		{ label: "Week 2", events: events.slice(3, 6) },
		{ label: "Week 3", events: events.slice(6, 9) },
		{ label: "Week 4", events: events.slice(9, 12) }
	]

	return (
		<div className="space-y-8">
			{weeks.map((week) => (
				<div key={week.label}>
					<h3 className="text-xl font-bold text-gray-900 mb-4">{week.label}</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{week.events.map((event) => (
							<EventCard key={event.id} event={event} showDay />
						))}
					</div>
					{week.events.length === 0 && (
						<div className="text-gray-400 text-sm">No classes scheduled</div>
					)}
				</div>
			))}
		</div>
	)
}
