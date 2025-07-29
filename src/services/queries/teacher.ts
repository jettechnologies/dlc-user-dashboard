import { LectureStatus } from "@/types/response-type"
import {
	IExam,
	LectureResponse,
	MultipleType,
	TeacherDashboardResponse,
	ResponseSingleType
} from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
// import { authFetch } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export const fetchTeacherExams = async (): Promise<
	ResponseSingleType<IExam[] | null>
> => {
	try {
		const url = ENDPOINTS.teacher.fetchAllExams
		const response = await authFetch<ResponseSingleType<IExam[]>>({
			url
		})

		// const data = response as ResponseSingleType<IExam[]>
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const fetchAllLectures = async (
	status: LectureStatus
): Promise<ResponseSingleType<MultipleType<LectureResponse[]> | null>> => {
	try {
		const url = `${ENDPOINTS.lecture.getAllLecture}?status=${status}`
		const response = await authFetch<
			ResponseSingleType<MultipleType<LectureResponse[]>>
		>({
			url
		})

		// const data = response as ResponseSingleType<MultipleType<LectureResponse[]>>
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const fetchTeacherDashboard = async (): Promise<
	ResponseSingleType<TeacherDashboardResponse | null>
> => {
	try {
		const url = ENDPOINTS.teacher.getDashboardStats
		const response = await authFetch<
			ResponseSingleType<TeacherDashboardResponse>
		>({
			url
		})

		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}
