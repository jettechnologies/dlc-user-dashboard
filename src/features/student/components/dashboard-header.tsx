"use client"

import { useAuthState } from "@/stores"

export function DashboardHeader() {
	const { userProfile } = useAuthState()
	return (
		<div className="space-y-2  max-sm:px-6 max-sm:py-4 max-sm:bg-white">
			<h2 className="text-xl md:text-2xl font-bold text-gray-900">
				Welcome, {userProfile?.fullName} 👋
			</h2>
			<p className="text-gray-600 text-sm md:text-base">
				{"Here's an overview of your activities"}
			</p>
		</div>
	)
}
