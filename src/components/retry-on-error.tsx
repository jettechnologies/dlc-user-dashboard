"use client"

import { useEffect } from "react"

export default function RetryOnError({
	message,
	retry,
	delay = 2000
}: {
	message: string
	retry?: () => void
	delay?: number
}) {
	useEffect(() => {
		const timer = setTimeout(() => {
			retry ? retry() : window.location.reload()
		}, delay)

		return () => clearTimeout(timer)
	}, [retry, delay])

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<p className="text-red-500 font-medium">Error: {message}</p>
			<p className="text-gray-500">Retrying in 2 seconds...</p>
		</div>
	)
}
