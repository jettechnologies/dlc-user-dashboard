"use client"

import { useAuthState } from "@/stores"

export function DashboardHeader() {
	const { userProfile } = useAuthState()
	return (
		<div className="space-y-2">
			<h1 className="text-2xl font-bold text-gray-900">
				Welcome back {userProfile?.fullName}, 👋
			</h1>
			<p className="text-gray-600">{"Here's an overview of your activities"}</p>
		</div>
	)
}
