// import { TOKEN_KEY, USER_ROLE_KEY } from "./constants"
import { TOKEN_KEY } from "../constants"
import { serverAuthFetch } from "./server-auth-fetch"

export interface AuthFetchParams {
	url: string
	options?: RequestInit
	token?: string
}

// Server-side auth fetch (uses Next.js cookies())
// export async function serverAuthFetch<T>(params: AuthFetchParams): Promise<T> {
// 	const { url, options = {}, token } = params

// 	// Use Next.js cookies() for server-side
// 	const cookieStore = await cookies()
// 	const authToken = token || cookieStore.get(TOKEN_KEY)?.value

// 	if (!authToken) {
// 		throw new Error("Authorization token is required")
// 	}

// 	const headers = new Headers({
// 		...options.headers,
// 		"Content-Type": "application/json",
// 		Authorization: `Bearer ${authToken}`
// 	})

// 	const response = await fetch(url, {
// 		...options,
// 		headers
// 	})

// 	if (!response.ok) {
// 		const error = await response.json()
// 		throw new Error(error?.message || "Request failed")
// 	}

// 	return response.json() as Promise<T>
// }

// Client-side auth fetch (uses cookies-next)
export async function clientAuthFetch<T>(params: AuthFetchParams): Promise<T> {
	const { url, options = {}, token } = params

	// Dynamic import for client-side only
	const { getCookie } = await import("cookies-next")
	const authToken = token || getCookie(TOKEN_KEY)

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

// Universal auth fetch that works on both server and client
export async function authFetch<T>(params: AuthFetchParams): Promise<T> {
	const isServer = typeof window === "undefined"

	if (isServer) {
		return serverAuthFetch<T>(params)
	} else {
		return clientAuthFetch<T>(params)
	}
}
