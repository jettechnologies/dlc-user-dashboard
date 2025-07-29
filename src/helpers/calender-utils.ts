export const timeConsts = {
	startHour: 7,
	endHour: 16
}

export function parseTime(timeStr: string): { hour: number; minute: number } {
	const [time, period] = timeStr.toLowerCase().split(/([ap]m)/)
	const [hourStr, minuteStr = "0"] = time.split(":")
	let hour = Number.parseInt(hourStr)
	const minute = Number.parseInt(minuteStr)

	if (period === "pm" && hour !== 12) {
		hour += 12
	} else if (period === "am" && hour === 12) {
		hour = 0
	}

	return { hour, minute }
}

export function getEventPosition(
	startTime: string,
	endTime: string,
	startHour = timeConsts.startHour
) {
	const start = parseTime(startTime)
	const end = parseTime(endTime)

	const startMinutes = (start.hour - startHour) * 60 + start.minute
	const duration = (end.hour - start.hour) * 60 + (end.minute - start.minute)

	const top = Math.max(0, (startMinutes / 60) * 60) // 60px per hour
	const height = Math.max(30, (duration / 60) * 60) // Minimum 30px height

	return { top, height }
}

export function generateTimeSlots(startHour = 7, endHour = 16): string[] {
	const slots: string[] = []

	for (let hour = startHour; hour <= endHour; hour++) {
		const displayHour = hour > 12 ? hour - 12 : hour
		const period = hour < 12 ? "AM" : "PM"
		slots.push(`${displayHour}:00 ${period}`)
	}

	return slots
}
