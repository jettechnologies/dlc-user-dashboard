"use client"

// import { fetchStudentProfile } from "@/queries"
import { useAuthActions } from "@/stores"
import { TOKEN_KEY, USER_ROLE_KEY } from "@/utils/constants"
import { getCookie } from "cookies-next"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

export const AuthInitializer = () => {
	const { initializeAuth } = useAuthActions()
	const pathname = usePathname()
	const router = useRouter()

	// const getSubscriptionStatus = useCallback(async () => {
	// 	const response = await fetchStudentProfile()
	// 	if (!response) return

	// 	if (response.success && response.data) {
	// 		setSubscriptionStatus(response.data.subscriptionStatus)
	// 	}
	// }, [setSubscriptionStatus])

	useEffect(() => {
		const accessToken = getCookie(TOKEN_KEY)
		const role = getCookie(USER_ROLE_KEY)

		if (accessToken && role) {
			// if (role === "student") {
			// 	getSubscriptionStatus()
			// }

			if (pathname === "/signin/student" && role === "student") {
				router.push("/dashboard/student")
			} else if (pathname === "/signin/guardian" && role === "guardian") {
				router.push("/dashboard/guardian")
			}
		}

		initializeAuth()
	}, [initializeAuth, pathname, router])

	return null
}
