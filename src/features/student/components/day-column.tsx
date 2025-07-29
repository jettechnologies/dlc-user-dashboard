"use client"

import { WeekEventCard } from "./week-event-card"
import { getEventPosition } from "@/helpers/calender-utils"
import { WeekDay } from "@/types/calender"
import { ClassEvent } from "@/types/index"

interface DayColumnProps {
	day: WeekDay
	date: string
	events: ClassEvent[]
	onEventClick?: (event: ClassEvent) => void
}

export function DayColumn({ day, events, date, onEventClick }: DayColumnProps) {
	const dayEvents = events.filter(
		(event) => event.day.toLowerCase() === day.toLowerCase()
	)

	return (
		<div className="flex-1 min-w-0">
			{/* Day header */}
			<div className="text-center py-3 border-b border-gray-200 bg-gray-50">
				<div className="font-semibold text-gray-900">{day}</div>
				<div className="text-xs text-gray-500">{date}</div>
			</div>

			{/* Events container */}
			<div className="relative" style={{ height: "780px" }}>
				{/* 13 hours * 60px */}
				{dayEvents.map((event) => {
					const { top, height } = getEventPosition(
						event.startTime,
						event.endTime
					)
					return (
						<WeekEventCard
							key={event.id}
							event={event}
							style={{
								top: `${top}px`,
								height: `${height}px`
							}}
							onClick={onEventClick}
						/>
					)
				})}
			</div>
		</div>
	)
}
