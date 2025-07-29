"use client"

import { AuthInitializer } from "@/components/AuthInitializer"
import { getQueryClient } from "@/utils/lib/query-client"
import { QueryClientProvider } from "@tanstack/react-query"
import { useState, ReactNode } from "react"
import { Toaster } from "sonner"

export function Providers({ children }: { children: ReactNode }) {
	// Use the optimized query client pattern
	const [queryClient] = useState(() => getQueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<AuthInitializer />
			{children}
			<Toaster richColors />
		</QueryClientProvider>
	)
}

// "use client"

// import { AuthInitializer } from "@/components/AuthInitializer"
// import {
// 	QueryClient,
// 	QueryClientProvider,
// 	QueryKey,
// 	MutationCache
// } from "@tanstack/react-query"
// import { ReactNode } from "react"
// import { Toaster, toast } from "sonner"

// declare module "@tanstack/react-query" {
// 	interface Register {
// 		mutationMeta: {
// 			invalidatesQuery?: QueryKey
// 			successMessage?: string
// 			errorMessage?: string
// 		}
// 	}
// }

// // const queryClient = new QueryClient()

// const queryClient = new QueryClient({
// 	mutationCache: new MutationCache({
// 		onSuccess: (_data, _variables, _context, mutation) => {
// 			if (mutation.meta?.successMessage) {
// 				toast.success(mutation.meta?.successMessage)
// 			}
// 		},
// 		onError: (_error, _variables, _context, mutation) => {
// 			// if (mutation.meta?.errorMessage) {
// 			// 	toast.error(mutation.meta?.successMessage)
// 			// }
// 			let message: string | undefined

// 			if (_error instanceof Error && _error.message) {
// 				message = _error.message
// 			}
// 			if (!message && mutation.meta?.errorMessage) {
// 				message = mutation.meta.errorMessage
// 			}
// 			if (!message) {
// 				message = "An unexpected error occurred."
// 			}

// 			toast.error(message)
// 		},
// 		onSettled: (_data, _error, _variables, _context, mutation) => {
// 			{
// 				if (mutation.meta?.invalidatesQuery) {
// 					queryClient.invalidateQueries({
// 						queryKey: mutation.meta?.invalidatesQuery
// 					})
// 				}
// 			}
// 		}
// 	}),
// 	defaultOptions: {
// 		queries: {
// 			staleTime: 1000 * 60 * 5,
// 			refetchOnWindowFocus: false
// 		}
// 	}
// })

// export function Providers({ children }: { children: ReactNode }) {
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			{/* <Suspense fallback={<div>Loading...</div>}> */}
// 			<AuthInitializer />
// 			{children}
// 			<Toaster richColors />
// 			{/* </Suspense> */}
// 		</QueryClientProvider>
// 	)
// }
