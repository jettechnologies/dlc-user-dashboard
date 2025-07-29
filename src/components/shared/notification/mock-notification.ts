import { Notification } from "./NotificationItem"

export const mockNotifications: Notification[] = [
	{
		id: "1",
		type: "class-is-live",
		title: "Class on Comprehension (English language) is live now.",
		timestamp: new Date(),
		actionText: "Join the class"
	},
	{
		id: "2",
		type: "class-is-live",
		title: "Class on Comprehension (English language) is live now.",
		timestamp: new Date(),
		actionText: "Join the class"
	},
	{
		id: "3",
		type: "class-going-live",
		title:
			"Class on Comprehension (English language) is going live in 5minutes.",
		timestamp: new Date()
	},
	{
		id: "4",
		type: "class-going-live",
		title:
			"Class on Comprehension (English language) is going live in 5minutes.",
		timestamp: new Date()
	},
	{
		id: "5",
		type: "class-scheduled",
		title:
			"Teacher Esther Peter has scheduled an English class for 2nd June, 2025.",
		timestamp: new Date(),
		actionText: "Add to calendar"
	},
	{
		id: "6",
		type: "user-login",
		title: "You have successfully logged in.",
		timestamp: new Date()
	},
	{
		id: "7",
		type: "user-logout",
		title: "You logged out",
		timestamp: new Date()
	},
	// Yesterday notifications
	{
		id: "8",
		type: "class-scheduled",
		title: "Math class scheduled for tomorrow.",
		timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
		actionText: "Add to calendar"
	},
	// Last week notifications
	{
		id: "9",
		type: "user-login",
		title: "You have successfully logged in.",
		timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
	},
	// Older notifications
	{
		id: "10",
		type: "class-is-live",
		title: "History class was live.",
		timestamp: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
	}
]
