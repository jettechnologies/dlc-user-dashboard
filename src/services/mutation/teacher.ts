import { ResponseSingleType } from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
// import { authFetch } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export interface CreateLectureParams {
	examId: string
	subject: string
	topic: string
	description: string
	date: string
	time: string
	duration: number
	maxStudents: number
	// resources: string
}

export const createLecture = async (params: CreateLectureParams) => {
	try {
		const url = ENDPOINTS.lecture.createLecture
		const response = await authFetch<unknown>({
			url,
			options: { method: "POST", body: JSON.stringify(params) }
		})
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}

export const startLecture = async (classId: string) => {
	try {
		const url = `${ENDPOINTS.lecture.startLecture}/${classId}`
		const response = await authFetch<
			ResponseSingleType<{ moderatorJoinUrl: string }>
		>({
			url,
			options: { method: "POST" }
		})

		if (!response.data?.moderatorJoinUrl) {
			throw new Error("No authorization URL received from payment provider")
			return
		}
		window.location.href = response.data.moderatorJoinUrl
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}

export const deleteLecture = async (classId: string) => {
	try {
		const url = `${ENDPOINTS.lecture.deleteLecture}/${classId}`
		const response = await authFetch<unknown>({
			url,
			options: { method: "DELETE" }
		})
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}
