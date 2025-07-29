"use client"

import { CalendarHeader } from "./calender-header"
import { MonthView } from "./month-view"
import { WeekView } from "./week-view"
import { CalendarView } from "@/types/calender"
import { ClassEvent } from "@/types/index"
import { useState } from "react"

interface ClassScheduleCalenderProps {
	classEvents: ClassEvent[]
}

export default function ClassScheduleCalender({
	classEvents
}: ClassScheduleCalenderProps) {
	const [activeView, setActiveView] = useState<CalendarView>("Week")

	const handleViewChange = (view: CalendarView) => {
		setActiveView(view)
	}

	const renderCalendarView = () => {
		switch (activeView) {
			case "Week":
				return <WeekView events={classEvents} />
			case "Month":
				return <MonthView events={classEvents} />

			default:
				return <WeekView events={classEvents} />
		}
	}

	return (
		<div className=" bg-white p-6 rounded-lg border-[1px] border-[#D9D9D9]">
			<div className="max-w-7xl mx-auto">
				<CalendarHeader
					activeView={activeView}
					onViewChange={handleViewChange}
				/>

				{/* Blue separator line */}
				<div className="w-full h-0.5 bg-[#D9D9D9] mb-8"></div>

				{renderCalendarView()}
			</div>
		</div>
	)
}
