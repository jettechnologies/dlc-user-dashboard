"use client"

import { ClassEvent } from "@/types/index"
import { X, Clock, MapPin, User } from "lucide-react"

interface EventDetailsModalProps {
	event: ClassEvent
	onClose: () => void
}

export function EventDetailsModal({ event, onClose }: EventDetailsModalProps) {
	return (
		<div className="fixed inset-0 bg-black/65 flex text-black items-center justify-center z-50 p-4 pointer-events-none">
			<div
				className="rounded-lg max-w-md w-full p-6 pointer-events-auto"
				style={{ backgroundColor: event.backgroundColor }}
			>
				<div className="flex justify-between items-start mb-4">
					<h2 className="text-xl font-bold text-gray-900">{event.subject}</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 transition-colors"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				<div className="space-y-3">
					<div className="flex items-center gap-3">
						<Clock className="w-4 h-4 text-gray-500" />
						<span className="text-sm text-gray-700">
							{event.startTime} - {event.endTime} (UTC)
						</span>
					</div>

					<div className="flex items-center gap-3">
						<div
							className="w-4 h-4 rounded-full"
							style={{ backgroundColor: event.color }}
						/>
						<span className="text-sm text-gray-700">{event.day}</span>
					</div>

					{event.location && (
						<div className="flex items-center gap-3">
							<MapPin className="w-4 h-4 text-gray-500" />
							<span className="text-sm text-gray-700">{event.location}</span>
						</div>
					)}

					{event.instructor && (
						<div className="flex items-center gap-3">
							<User className="w-4 h-4 text-gray-500" />
							<span className="text-sm text-gray-700">{event.instructor}</span>
						</div>
					)}

					{event.description && (
						<div className="mt-4 p-3 bg-gray-50 rounded-md">
							<p className="text-sm text-gray-700">{event.description}</p>
						</div>
					)}
				</div>

				{/* <div className="mt-6 flex justify-end">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
					>
						Close
					</button>
				</div> */}
			</div>
		</div>
	)
}
