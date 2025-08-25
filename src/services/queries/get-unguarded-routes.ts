import {
	ResponseSingleType,
	IExam,
	IEducationLevel
} from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants/endpoints"

export const fetchAllExams = async (): Promise<
	ResponseSingleType<IExam[]> | ResponseSingleType<null>
> => {
	try {
		const { getAllExams } = ENDPOINTS.getAllUnGuardedRoutes
		const response = await fetch(getAllExams, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})

		const data: ResponseSingleType<IExam[]> = await response.json()

		if (!response.ok) {
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

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

export const fetchAllLevels = async (): Promise<
	ResponseSingleType<IEducationLevel[] | null>
> => {
	try {
		const { getAllLevels } = ENDPOINTS.getAllUnGuardedRoutes
		const response = await fetch(getAllLevels, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})

		const data: ResponseSingleType<IEducationLevel[]> = await response.json()

		if (!response.ok) {
			const errorMessage =
				data?.message ?? `Request failed with status ${response.status}`
			throw new Error(errorMessage)
		}

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
