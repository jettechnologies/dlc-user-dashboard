"use client"

import { StudentProfile, TeacherProfile } from "@/types/response-type"
// import { studentLogout, guardianLogout } from "@/mutation"
import { COOKIES_CONFIG, TOKEN_KEY, USER_ROLE_KEY } from "@/utils/constants"
import { getCookie, setCookie, deleteCookie } from "cookies-next"
import { create } from "zustand"
import type { StateCreator } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { useShallow } from "zustand/react/shallow"

type otpState = {
	otp: string | null
	userIdentity: string | null
}

export type AuthState = {
	accessToken: string | null
	role: string | null
	resetPwdState: otpState
	subscriptionStatus: boolean | null
	userProfile: TeacherProfile | StudentProfile | null
}

export type AuthActionState = {
	setAccessToken: (accessToken: string, role: string) => void
	setResetPwdState: (data: { otp?: string; userIdentity?: string }) => void
	// logout: (userType: "student" | "guardian") => void
	setUserProfile: (userProfile: TeacherProfile | StudentProfile) => void
	logout: () => void
	initializeAuth: () => Promise<void>
	setSubscriptionStatus: (status: boolean) => void
}

export type AuthSlice = AuthState & { actions: AuthActionState }

export const createAuthSlice: StateCreator<
	AuthSlice,
	[["zustand/immer", never]],
	[],
	AuthSlice
> = (set) => ({
	accessToken: null,
	role: null,
	userProfile: null,
	resetPwdState: { otp: null, userIdentity: null },
	subscriptionStatus: null,
	actions: {
		setAccessToken: (accessToken, role) => {
			setCookie(TOKEN_KEY, accessToken, COOKIES_CONFIG)
			setCookie(USER_ROLE_KEY, role, COOKIES_CONFIG)
			set((state) => ({ ...state, accessToken, role }))
		},
		setUserProfile: (userProfile) =>
			set((state) => ({ ...state, userProfile })),
		// logout: async (userType: "student" | "guardian") => {
		// 	try {
		// 		if (userType !== "student" && userType !== "guardian") {
		// 			throw new Error("Invalid user type specified for logout")
		// 		}

		// 		// const logoutPromise =
		// 		// 	userType === "student" ? studentLogout() : guardianLogout()

		// 		await Promise.all([
		// 			// logoutPromise,
		// deleteCookie(TOKEN_KEY),
		// deleteCookie(USER_ROLE_KEY)
		// 		])

		// 		set({ accessToken: null, role: null })
		// 	} catch (error) {
		// 		console.error("Logout failed:", error)
		// 		throw new Error(
		// 			`Logout failed: ${error instanceof Error ? error.message : String(error)}`
		// 		)
		// 	} finally {
		// 		window.dispatchEvent(new Event("logout"))
		// 	}
		// },

		logout: () => {
			deleteCookie(TOKEN_KEY)
			deleteCookie(USER_ROLE_KEY)
			set({ accessToken: null, role: null })
		},

		setResetPwdState: (data) => {
			set((state) => ({
				...state,
				resetPwdState: {
					otp: data.otp ?? state.resetPwdState.otp,
					userIdentity: data.userIdentity ?? state.resetPwdState.userIdentity
				}
			}))
		},
		setSubscriptionStatus: (status) => {
			set((state) => ({ ...state, subscriptionStatus: status }))
		},
		initializeAuth: async () => {
			const accessToken = getCookie(TOKEN_KEY)
			const role = getCookie(USER_ROLE_KEY)
			if (!accessToken && !role) {
				return
			}

			set(() => ({ accessToken, role }))
		}
	}
})

// Create the store with middlewares
export const useAuthStore = create<AuthSlice>()(
	devtools(
		immer((set, get, store) => ({
			...createAuthSlice(set, get, store)
		})),
		{ name: "AuthStore" }
	)
)

// Custom hook to access the store with shallow comparison
export const useAuthActions = () =>
	useAuthStore(useShallow((state) => state.actions))
export const useAuthState = () => useAuthStore(useShallow((state) => state))
