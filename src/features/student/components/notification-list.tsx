import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const notifications = [
	{
		message: "Class on Comprehension (English language) was live 2 hours ago",
		action: "View Class",
		time: "2 hours ago"
	},
	{
		message: "You logged in at 3:17pm",
		action: null,
		time: "3:17pm"
	}
]

export function NotificationsList() {
	return (
		<Card className="bg-white border-0 shadow-sm">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-lg font-semibold">Notifications</CardTitle>
				<Button variant="ghost" size="sm" className="text-blue-600">
					View All
				</Button>
			</CardHeader>
			<CardContent className="space-y-4">
				{notifications.map((notification, index) => (
					<div key={index} className="flex items-start gap-3">
						<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
						<div className="flex-1">
							<p className="text-sm text-gray-700">{notification.message}</p>
							{notification.action && (
								<Button
									variant="link"
									size="sm"
									className="p-0 h-auto text-yellow-600"
								>
									{notification.action}
								</Button>
							)}
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
