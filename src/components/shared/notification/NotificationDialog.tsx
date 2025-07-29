"use client"

import { NotificationList } from "./NotificationList"
import { mockNotifications } from "./mock-notification"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog"
import { X, Bell } from "lucide-react"
import { useState } from "react"

export function NotificationDialog() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<div className="rounded-full w-8 h-8 flex items-center justify-center relative cursor-pointer">
					<Bell size={34} />
					<div className="bg-red-600 w-2 h-2 absolute top-0 right-0 rounded-full" />
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[800px] w-full" showCloseButton={false}>
				<DialogHeader className="flex flex-row items-center justify-between">
					<DialogTitle>Notifications</DialogTitle>
					<Button
						size="icon"
						variant="ghost"
						onClick={() => setIsOpen(false)}
						className="hover:bg-transparent focus:outline-0"
					>
						<X className="w-4 h-4" />
					</Button>
				</DialogHeader>

				<div className="px-1 pb-4 max-h-[550px] overflow-y-auto">
					<NotificationList notifications={mockNotifications} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
