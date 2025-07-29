import { LiveSession } from "@/features/student/screens/live-sessions"
import {
	studentUpcomingLecturesQueryOptions,
	studentTimetableLecturesQueryOptions
} from "@/services/query"
import { getQueryClient } from "@/utils/lib/query-client"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import React from "react"

export const dynamic = "force-dynamic"

export default async function page() {
	const queryClient = getQueryClient()

	try {
		// Prefetch the data on the server using your existing query options
		await Promise.allSettled([
			queryClient.prefetchQuery({
				...studentUpcomingLecturesQueryOptions()
			}),
			queryClient.prefetchQuery({
				...studentTimetableLecturesQueryOptions()
			})
		])
	} catch (error) {
		console.error("Failed to prefetch live sessions data:", error)
	}

	// return <LiveSession />
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<LiveSession />
		</HydrationBoundary>
	)
}
