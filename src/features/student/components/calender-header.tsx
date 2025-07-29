import { CalendarView } from "@/types/calender"

interface CalendarHeaderProps {
	activeView: CalendarView
	onViewChange: (view: CalendarView) => void
}

export function CalendarHeader({
	activeView,
	onViewChange
}: CalendarHeaderProps) {
	const views: CalendarView[] = ["Week", "Month"]

	return (
		<div className="flex justify-between items-center mb-8">
			<h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
			<div className="flex gap-6">
				{views.map((view) => (
					<button
						key={view}
						onClick={() => onViewChange(view)}
						className={`text-lg font-medium transition-colors ${
							activeView === view
								? "text-black border-b-2 border-light-yellow"
								: "text-gray-400 hover:text-gray-600"
						}`}
					>
						{view}
					</button>
				))}
			</div>{" "}
		</div>
	)
}
