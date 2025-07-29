import { ClassEvent } from "."

export type CalendarView = "Week" | "Month"
export type WeekDay =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday"

export interface CalendarData {
	events: ClassEvent[]
}

export interface TimeSlot {
	hour: number
	minute: number
	label: string
}
