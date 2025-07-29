import { TOKEN_KEY, USER_ROLE_KEY, COOKIES_CONFIG } from "./constants"
import { getCookie, OptionsType } from "cookies-next"
import type { NextApiRequest, NextApiResponse } from "next"

export const getAuthCookie = (
	req?: NextApiRequest,
	res?: NextApiResponse
): { role: string; accessToken: string } | null => {
	// const cookieParams: OptionsType = {
	// 	req: req as HttpContext["req"],
	// 	res: res as HttpContext["res"],
	// 	...cookieOptions
	// }

	const cookieParams = {
		req,
		res,
		...COOKIES_CONFIG
	} as OptionsType

	const accessToken = getCookie(TOKEN_KEY, cookieParams)
	const role = getCookie(USER_ROLE_KEY, cookieParams)

	if (!accessToken || !role) {
		return null
	}

	return { accessToken: String(accessToken), role: String(role) }
}

// export const getServerAuthCookie = (
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ): { role: string; accessToken: string } | null => {
// 	const cookieParams = {
// 		req,
// 		res,
// 		...COOKIES_CONFIG
// 	} as OptionsType

// 	const accessToken = getCookie(TOKEN_KEY, cookieParams) as string | undefined
// 	const role = getCookie(USER_ROLE_KEY, cookieParams) as string | undefined

// 	if (!accessToken || !role) return null

// 	return { accessToken, role }
// }

// export const getClientAuthCookie = (): {
// 	role: string
// 	accessToken: string
// } | null => {
// 	const cookieParams: OptionsType = {
// 		...COOKIES_CONFIG
// 	}

// 	const accessToken = getCookie(TOKEN_KEY, cookieParams) as string | undefined
// 	const role = getCookie(USER_ROLE_KEY, cookieParams) as string | undefined

// 	if (!accessToken || !role) return null

// 	return { accessToken, role }
// }
