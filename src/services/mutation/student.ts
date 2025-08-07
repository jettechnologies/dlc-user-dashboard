import { ResponseSingleType } from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
// import { authFetch } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export const studentAttendClass = async (classId: string) => {
	try {
		const url = `${ENDPOINTS.student.attendLecture}/${classId}`
		const response = await authFetch<
			ResponseSingleType<{ attendeeJoinUrl: string }>
		>({
			url,
			options: { method: "POST" }
		})
		if (!response.data?.attendeeJoinUrl) {
			throw new Error("No authorization URL received from payment provider")
			return
		}
		window.location.href = response.data.attendeeJoinUrl
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}

export const studentAddClassToTimetable = async (lectureId: string) => {
	try {
		const url = `${ENDPOINTS.student.addClassToTimetable}`
		const response = await authFetch<unknown>({
			url,
			options: { method: "POST", body: JSON.stringify({ lectureId }) }
		})

		// if (!response.data?.attendeeJoinUrl) {
		// 	throw new Error("No authorization URL received from payment provider")
		// 	return
		// }
		// window.location.href = response.data.attendeeJoinUrl
		// console.log(response, "response data")
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}

export interface ContactUsParams {
	name: string
	email: string
	phone: string
	reason: string
	message: string
}

export const contactUs = async (params: ContactUsParams) => {
	try {
		const url = `${ENDPOINTS.contactUs}`
		const response = await authFetch<ResponseSingleType<unknown>>({
			url,
			options: {
				method: "POST",
				body: JSON.stringify({
					...params
				})
			}
		})
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}
