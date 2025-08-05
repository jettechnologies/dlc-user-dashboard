"use client"

import { useAuthState } from "@/stores"

export function WelcomeHeader() {
	const { userProfile } = useAuthState()

	return (
		<div className="bg-white rounded-lg p-6 shadow-sm">
			<h1 className="text-2xl font-semibold text-gray-900 mb-2">
				Welcome {userProfile?.fullName} 👋
			</h1>
			{/* <p className="text-black font-normal text-xs">
				You have 3 classes scheduled for tomorrow.
			</p> */}
		</div>
	)
}
