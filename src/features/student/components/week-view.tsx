"use client"

import { DayColumn } from "./day-column"
import { EventDetailsModal } from "./event-details-modal"
import { TimeColumn } from "./time-column"
import { WeekDay } from "@/types/calender"
import { ClassEvent } from "@/types/index"
import { startOfWeek, addDays, format } from "date-fns"
import { useState } from "react"

interface WeekViewProps {
	events: ClassEvent[]
}

export function WeekView({ events }: WeekViewProps) {
	const [selectedEvent, setSelectedEvent] = useState<ClassEvent | null>(null)

	const weekDays: WeekDay[] = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday"
	]

	const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 }) // Monday

	const handleEventClick = (event: ClassEvent) => {
		setSelectedEvent(event)
	}

	const handleCloseModal = () => {
		setSelectedEvent(null)
	}

	return (
		<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
			<div className="flex">
				{/* Time column */}
				<TimeColumn />

				{/* Day columns */}
				<div className="flex-1 flex min-w-0">
					{weekDays.map((day, index) => {
						const dateForDay = addDays(startOfCurrentWeek, index)
						return (
							<div key={day} className="flex-1 border-l border-gray-200">
								<DayColumn
									day={day}
									date={format(dateForDay, "EEE, MMM d")}
									events={events}
									onEventClick={handleEventClick}
								/>
							</div>
						)
					})}
				</div>
			</div>

			{/* Event details modal */}
			{selectedEvent && (
				<EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />
			)}
		</div>
	)
}
