"use client"

import type { ClassEvent } from "@/types/index"
import type React from "react"

interface WeekEventCardProps {
	event: ClassEvent
	style?: React.CSSProperties
	onClick?: (event: ClassEvent) => void
}

export function WeekEventCard({ event, style, onClick }: WeekEventCardProps) {
	return (
		<div
			className="absolute left-1 right-1 rounded-md p-2 cursor-pointer hover:shadow-md transition-shadow border-l-8 text-xs h-max"
			style={{
				backgroundColor: event.backgroundColor,
				borderLeftColor: event.color,
				color: event.color,
				...style
			}}
			onClick={() => onClick?.(event)}
		>
			<div className="font-semibold truncate">{event.subject}</div>
			<div className="text-xs opacity-80 truncate">
				{event.startTime} - {event.endTime}
			</div>
			{event.location && (
				<div className="text-xs opacity-70 truncate">{event.location}</div>
			)}
			{event.instructor && (
				<div className="text-xs opacity-70 truncate">{event.instructor}</div>
			)}
		</div>
	)
}
