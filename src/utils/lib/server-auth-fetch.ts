"use server"

import { TOKEN_KEY } from "../constants"
import { cookies } from "next/headers"

export interface AuthFetchParams {
	url: string
	options?: RequestInit
	token?: string
}

// Server-side auth fetch (uses Next.js cookies())
export async function serverAuthFetch<T>(params: AuthFetchParams): Promise<T> {
	const { url, options = {}, token } = params

	// Use Next.js cookies() for server-side
	const cookieStore = await cookies()
	const authToken = token || cookieStore.get(TOKEN_KEY)?.value

	if (!authToken) {
		throw new Error("Authorization token is required")
	}

	const headers = new Headers({
		...options.headers,
		"Content-Type": "application/json",
		Authorization: `Bearer ${authToken}`
	})

	const response = await fetch(url, {
		...options,
		headers
	})

	if (!response.ok) {
		const error = await response.json()
		throw new Error(error?.message || "Request failed")
	}

	return response.json() as Promise<T>
}
