"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Calendar, LogIn, LogOut } from "lucide-react"

export type NotificationType =
	| "class-is-live"
	| "class-going-live"
	| "class-scheduled"
	| "user-login"
	| "user-logout"

export interface Notification {
	id: string
	type: NotificationType
	title: string
	description?: string
	timestamp: Date
	actionText?: string
	actionLink?: string
}

const getIcon = (type: NotificationType) => {
	switch (type) {
		case "class-is-live":
			return (
				<div className="w-[25px] h-[25px] flex items-center justify-center bg-red-200">
					<div className="w-2 h-2 bg-red-500 rounded-full" />
				</div>
			)
		case "class-going-live":
			return (
				<div className="w-[25px] h-[25px] flex items-center justify-center bg-gray-200">
					<div className="w-2 h-2 bg-gray-500 rounded-full" />
				</div>
			)
		case "class-scheduled":
			return (
				<div className="w-[25px] h-[25px] flex items-center justify-center bg-blue-200">
					<Calendar className="w-4 h-4 text-blue-500" />
				</div>
			)
		case "user-login":
			return (
				<div className="w-[25px] h-[25px] flex items-center justify-center bg-green-200">
					<LogIn className="w-4 h-4 text-green-500" />
				</div>
			)
		case "user-logout":
			return (
				<div className="w-[25px] h-[25px] flex items-center justify-center bg-red-200">
					<LogOut className="w-4 h-4 text-red-500" />
				</div>
			)
		default:
			return null
	}
}

// const getBadge = (type: NotificationType) => {
// 	switch (type) {
// 		case "class-is-live":
// 			return (
// 				<Badge variant="destructive" className="text-xs">
// 					Live
// 				</Badge>
// 			)
// 		case "class-going-live":
// 			return (
// 				<Badge variant="secondary" className="text-xs">
// 					Starting Soon
// 				</Badge>
// 			)
// 		case "class-scheduled":
// 			return (
// 				<Badge variant="outline" className="text-xs">
// 					Scheduled
// 				</Badge>
// 			)
// 		case "user-login":
// 			return (
// 				<Badge className="text-xs bg-green-100 text-green-800">Login</Badge>
// 			)
// 		case "user-logout":
// 			return <Badge className="text-xs bg-red-100 text-red-800">Logout</Badge>
// 		default:
// 			return null
// 	}
// }

interface Props {
	notification: Notification
	compact?: boolean
}

export const NotificationItem = ({ notification, compact }: Props) => {
	const { title, description, timestamp, actionText, type } = notification

	const formattedDate = format(timestamp, "yyyy-MM-dd")
	const formattedTime = format(timestamp, "HH:mm")

	return (
		// <div
		// 	className={`flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors ${compact ? "items-center" : ""} border-2 border-black`}
		// >
		// 	<div className="flex-shrink-0 mt-1">{getIcon(type)}</div>
		// 	<div className="flex-1 min-w-0 border-2 border-red-500">
		// 		<div className="flex items-center gap-2 mb-1">
		// 			<p className="text-sm font-medium text-gray-900 truncate">{title}</p>
		// 			{getBadge(type)}
		// 		</div>
		// 		{!compact && description && (
		// 			<p className="text-xs text-gray-600 mb-2">{description}</p>
		// 		)}
		// 		<div className="flex items-center justify-between">
		// 			<p className="text-xs text-gray-500">
		// 				{formattedTime} • {formattedDate}
		// 			</p>
		// 			{actionText && (
		// 				<Button size="sm" variant="outline" className="text-xs">
		// 					{actionText}
		// 				</Button>
		// 			)}
		// 		</div>
		// 	</div>
		// </div>

		<div
			key={notification.id}
			className="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg transition-colors"
		>
			<div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
			<div className="flex-1 min-w-0">
				<p className="text-sm text-gray-900 mb-1">{notification.title}</p>
				{notification.description && (
					<p className="text-xs text-gray-600 mb-2">
						{notification.description}
					</p>
				)}
				<div className="flex items-center justify-between">
					<p className="text-xs text-gray-500">{formattedTime}</p>
					{notification.actionText && (
						<Button
							size="sm"
							className={`text-xs ${
								notification.type === "class-is-live"
									? "bg-yellow-400 hover:bg-yellow-500 text-black"
									: notification.type === "class-scheduled"
										? "bg-blue-500 hover:bg-blue-600 text-white"
										: "bg-gray-200 hover:bg-gray-300 text-gray-800"
							}`}
						>
							{notification.actionText}
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
