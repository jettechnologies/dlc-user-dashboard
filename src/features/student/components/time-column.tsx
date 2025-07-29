import { timeConsts, generateTimeSlots } from "@/helpers/calender-utils"

export function TimeColumn() {
	const { startHour, endHour } = timeConsts

	const timeSlots = generateTimeSlots(startHour, endHour)

	return (
		<div className="w-20 flex-shrink-0">
			{/* Header spacer */}
			<div className="h-16 border-b border-gray-200"></div>

			{/* Time slots */}
			<div className="relative" style={{ height: "780px" }}>
				{timeSlots.map((time, index) => (
					<div
						key={time}
						className="absolute right-2 text-xs text-gray-500 -translate-y-2"
						style={{ top: `${index * 60}px` }}
					>
						{time}
					</div>
				))}

				{/* Hour lines */}
				{timeSlots.map((_, index) => (
					<div
						key={index}
						className="absolute left-0 right-0 border-t border-gray-100"
						style={{ top: `${index * 60}px` }}
					/>
				))}
			</div>
		</div>
	)
}
