import { ClassEvent } from "@/types/index"

interface EventCardProps {
	event: ClassEvent
	showDay?: boolean
}

export function EventCard({ event, showDay = false }: EventCardProps) {
	return (
		<div
			className="flex items-center rounded-lg p-3 mb-2"
			style={{ backgroundColor: event.backgroundColor }}
		>
			<div
				className="w-1 h-12 rounded-full mr-3 flex-shrink-0"
				style={{ backgroundColor: event.color }}
			/>
			<div className="flex-1">
				<div className="text-xs text-gray-600 mb-1">
					{event.startTime} - {event.endTime} (UTC)
				</div>
				<div className="font-semibold text-sm" style={{ color: event.color }}>
					{event.subject}
				</div>
				{showDay && (
					<div className="text-xs text-gray-600 mt-1">{event.day}</div>
				)}
			</div>
		</div>
	)
}
