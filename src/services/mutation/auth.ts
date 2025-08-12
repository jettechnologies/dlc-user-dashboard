/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
	ResponseSingleType,
	StudentAuthResponse,
	TeacherAuthResponse
} from "@/types/response-type"
import { type UserRoles } from "@/utils/constants"
import { ENDPOINTS } from "@/utils/constants/endpoints"
import { TeacherSignupInfo, TeacherVerifyMailFormValues } from "@/utils/schemas"

const authEndpoints = ENDPOINTS.auth

type SignupFormParams = {
	fullName: string
	phoneNumber: string
	email: string
	password: string
	exam: string
}

type SigninParams = {
	identifier: string
	password: string
}
interface FileObject {
	path: string
	relativePath: string
}

export type CredentialItem = {
	[key: `file_${number}`]: File | FileObject
	[key: `name_${number}`]: string
}

type TeacherFormParams = {
	fullName: string
	email: string
	phoneNumber: string
	password: string
	type: "SCHOOL" | "TRAINING" | null
	level: string
	credentials: CredentialItem[]
}

type VerifyOTPParams = {
	email: string
	otp: string
}

// const transformCredentials = (credentials: CredentialItem[]) => {
// 	return credentials.reduce(
// 		(acc, item, index) => {
// 			// Extract the file and name from each credential item
// 			const fileKey = `file_${index}` as const
// 			const nameKey = `name_${index}` as const

// 			// Find the file and name in the current item
// 			const file = Object.entries(item).find(([key]) =>
// 				key.startsWith("file_")
// 			)?.[1]
// 			const name = Object.entries(item).find(([key]) =>
// 				key.startsWith("name_")
// 			)?.[1]

// 			// Add them to the accumulator with matching indices
// 			if (file && name) {
// 				return {
// 					...acc,
// 					[fileKey]: file,
// 					[nameKey]: name
// 				}
// 			}
// 			return acc
// 		},
// 		{} as Record<`file_${number}`, File> & Record<`name_${number}`, string>
// 	)
// }

export const studentSignup = async (
	params: SignupFormParams
): Promise<ResponseSingleType<StudentAuthResponse | null>> => {
	const { studentSignup: studentSignupEndpoint } = authEndpoints

	try {
		const response = await fetch(studentSignupEndpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		})

		if (!response.ok) {
			// API returned 4xx/5xx
			const errorData = await response.json()
			console.log(errorData, "errorData within studentSignup")
			const errorMessage =
				errorData?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		const data: ResponseSingleType<StudentAuthResponse> = await response.json()
		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

function isFileObject(obj: any): obj is FileObject {
	return (
		obj && typeof obj === "object" && "path" in obj && "relativePath" in obj
	)
}

export const teacherSignup = async (
	params: TeacherFormParams
): Promise<
	ResponseSingleType<TeacherAuthResponse> | ResponseSingleType<null>
> => {
	const { teacherSignup: teacherSignupEndpoint } = authEndpoints
	const { credentials, ...restParams } = params

	// Create FormData instance
	const formData = new FormData()

	// Add regular fields
	Object.entries(restParams).forEach(([key, value]) => {
		formData.append(key, value ?? "")
	})

	credentials.forEach((credential: CredentialItem, index) => {
		const fileKey = `file_${index}`
		const nameKey = `name_${index}`

		// Find the file and name in the current credential item
		const fileEntry = Object.entries(credential).find(([key]) =>
			key.startsWith("file_")
		)
		const nameEntry = Object.entries(credential).find(([key]) =>
			key.startsWith("name_")
		)

		if (fileEntry && nameEntry) {
			const [_, file] = fileEntry as [`file_${number}`, File | FileObject]
			const [__, name] = nameEntry as [`name_${number}`, string]

			// If file is a File object (from browser File API)
			if (file instanceof File) {
				formData.append(fileKey, file)
			}
			// If file is an object with path (like in your example)
			else if (isFileObject(file)) {
				// Convert to Blob if needed, or use the path directly
				const blob = new Blob([JSON.stringify(file)], {
					type: "application/json"
				})
				formData.append(fileKey, blob, file.path.split("/").pop())
			}

			formData.append(nameKey, name)
		}
	})

	try {
		const response = await fetch(teacherSignupEndpoint, {
			method: "POST",
			// Do NOT set Content-Type header - let the browser set it with boundary
			body: formData
		})

		const data: ResponseSingleType<TeacherAuthResponse> = await response.json()

		if (!response.ok) {
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const teacherRequestOtp = async (
	params: TeacherVerifyMailFormValues
): Promise<ResponseSingleType<{} | null>> => {
	const { teacherRequestOtp } = authEndpoints

	try {
		const response = await fetch(teacherRequestOtp, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		})

		const data: ResponseSingleType<{}> = await response.json()

		if (!response.ok) {
			// API returned 4xx/5xx
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const teacherResendOtp = async (params: {
	email: string
}): Promise<ResponseSingleType<{} | null>> => {
	const { teacherResendOtp } = authEndpoints

	try {
		const response = await fetch(teacherResendOtp, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		})

		const data: ResponseSingleType<{}> = await response.json()

		if (!response.ok) {
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const teacherVerifyOtp = async (
	params: VerifyOTPParams
): Promise<ResponseSingleType<{} | null>> => {
	const { teacherVerifyOtp } = authEndpoints

	try {
		const response = await fetch(teacherVerifyOtp, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		})

		const data: ResponseSingleType<{}> = await response.json()

		if (!response.ok) {
			// API returned 4xx/5xx
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const userSignin = async (
	params: SigninParams,
	userRole: UserRoles
): Promise<
	ResponseSingleType<StudentAuthResponse | TeacherAuthResponse | null>
> => {
	const { studentLogin, teacherLogin } = authEndpoints
	const url = userRole === "student" ? studentLogin : teacherLogin

	const { identifier, password } = params

	const credentials =
		userRole === "student"
			? { phoneNumber: `234${identifier.substring(1)}`, password }
			: { email: identifier, password }

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(credentials)
		})

		if (!response.ok) {
			const errorData = await response.json()
			console.log(errorData)
			const errorMessage =
				errorData?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		// Parse successful response
		const data = (await response.json()) as typeof userRole extends "student"
			? ResponseSingleType<StudentAuthResponse>
			: ResponseSingleType<TeacherAuthResponse>

		return data
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."

		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

// for forget password flow
export const studentForgetPassword = async (params: {
	email: string
}): Promise<ResponseSingleType<{} | null>> => {
	const { forgetPassword } = authEndpoints

	try {
		const response = await fetch(forgetPassword, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		})

		const data: ResponseSingleType<{}> = await response.json()

		if (!response.ok) {
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const studentVerifyOtp = async (params: {
	email: string
	otp: string
}): Promise<
	ResponseSingleType<{
		verified: true
	} | null>
> => {
	const { forgetPasswordVerifyOtp } = authEndpoints

	try {
		const response = await fetch(forgetPasswordVerifyOtp, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		})

		const data: ResponseSingleType<{
			verified: true
		}> = await response.json()

		if (!response.ok) {
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const studentResetPassword = async (params: {
	email: string
	newPassword: string
}): Promise<ResponseSingleType<{} | null>> => {
	const { resetPassword } = authEndpoints

	try {
		const response = await fetch(resetPassword, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		})

		const data: ResponseSingleType<{}> = await response.json()

		if (!response.ok) {
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

		return data
	} catch (error: any) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}
