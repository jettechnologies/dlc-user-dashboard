"use client"

import { Notification, NotificationItem } from "./NotificationItem"

interface Props {
	notifications: Notification[]
	isCompactView?: boolean
}

const groupByDate = (notifications: Notification[]) => {
	const today = new Date()
	today.setHours(0, 0, 0, 0)

	const yesterday = new Date(today)
	yesterday.setDate(today.getDate() - 1)

	const lastWeek = new Date(today)
	lastWeek.setDate(today.getDate() - 7)

	const groups = {
		Today: [] as Notification[],
		Yesterday: [] as Notification[],
		"Last Week": [] as Notification[],
		Older: [] as Notification[]
	}

	for (const n of notifications) {
		const date = new Date(n.timestamp)
		date.setHours(0, 0, 0, 0)

		if (date.getTime() === today.getTime()) groups.Today.push(n)
		else if (date.getTime() === yesterday.getTime()) groups.Yesterday.push(n)
		else if (date > lastWeek) groups["Last Week"].push(n)
		else groups.Older.push(n)
	}

	return groups
}

export const NotificationList = ({ notifications, isCompactView }: Props) => {
	const grouped = groupByDate(notifications)

	return (
		<div className="space-y-6 px-2 pb-4">
			{Object.entries(grouped).map(([label, items]) =>
				items.length > 0 ? (
					<div key={label}>
						<h3 className="text-sm font-semibold text-gray-900 mb-3">
							{label}
						</h3>
						<div className="space-y-2">
							{items.map((n) => (
								<NotificationItem
									key={n.id}
									notification={n}
									compact={isCompactView}
								/>
							))}
						</div>
					</div>
				) : null
			)}
		</div>
	)
}
