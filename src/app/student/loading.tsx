"use client"

import { Spinner } from "@/components/shared"

export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
			{/* SVG Spinner */}
			<Spinner />

			{/* Content */}
			<div className="text-center">
				<h2 className="text-lg font-semibold text-black">Loading...</h2>
				<p className="text-gray-600 mt-2">
					Please wait while we prepare your content.
				</p>
			</div>
		</div>
	)
}
