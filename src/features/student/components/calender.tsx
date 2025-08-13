"use client"

import { CalendarHeader } from "./calender-header"
import { MonthView } from "./month-view"
import { WeekView } from "./week-view"
import { useIsTabletOrMobile } from "@/config"
import { CalendarView } from "@/types/calender"
import { ClassEvent } from "@/types/index"
import { useEffect, useState } from "react"

interface ClassScheduleCalenderProps {
	classEvents: ClassEvent[]
}

export default function ClassScheduleCalender({
	classEvents
}: ClassScheduleCalenderProps) {
	const isTabletOrMobile = useIsTabletOrMobile()

	const [activeView, setActiveView] = useState<CalendarView | null>(null)

	useEffect(() => {
		setActiveView(isTabletOrMobile ? "Month" : "Week")
	}, [isTabletOrMobile])

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
		<div className=" bg-white p-6 rounded-lg border-[1px] border-[#D9D9D9] max-w-[1110px]">
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
