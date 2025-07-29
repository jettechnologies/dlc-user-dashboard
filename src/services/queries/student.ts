import {
	ResponseSingleType,
	MultipleType,
	StudentLectureResponse,
	LectureTimetableResponse,
	StudentDashboardResponse
} from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
// import { authFetch } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export const fetchUpcomingLectures = async (): Promise<
	ResponseSingleType<{
		lectureCount: number
		lectures: StudentLectureResponse[]
	} | null>
> => {
	try {
		const url = ENDPOINTS.student.getUpomingLectures
		const response = await authFetch<
			ResponseSingleType<{
				lectureCount: number
				lectures: StudentLectureResponse[]
			}>
		>({
			url
		})

		const data = response as ResponseSingleType<{
			lectureCount: number
			lectures: StudentLectureResponse[]
		}>
		return data
	} catch (e) {
		const errorMessage =
			e instanceof Error ? e.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const fetchUpcomingLecturesByExamId = async (
	examId: string
): Promise<
	ResponseSingleType<MultipleType<StudentLectureResponse[]> | null>
> => {
	try {
		const url = `${ENDPOINTS.lecture.getAllUpcomingClasses}?examId=${examId}`
		const response = await authFetch<
			ResponseSingleType<MultipleType<StudentLectureResponse[]>>
		>({
			url
		})

		const data = response as ResponseSingleType<
			MultipleType<StudentLectureResponse[]>
		>
		return data
	} catch (e) {
		const errorMessage =
			e instanceof Error ? e.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const fetchLectureTimetable = async (): Promise<
	ResponseSingleType<LectureTimetableResponse[] | null>
> => {
	try {
		const url = ENDPOINTS.student.getAllTimetableLectures
		const response = await authFetch<
			ResponseSingleType<LectureTimetableResponse[]>
		>({
			url
		})

		const data = response as ResponseSingleType<LectureTimetableResponse[]>
		return data
	} catch (e) {
		const errorMessage =
			e instanceof Error ? e.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}

export const fetchStudentDashboard = async (): Promise<
	ResponseSingleType<StudentDashboardResponse | null>
> => {
	try {
		const url = ENDPOINTS.student.getDashboardStats
		const response = await authFetch<
			ResponseSingleType<StudentDashboardResponse>
		>({
			url
		})

		const data = response as ResponseSingleType<StudentDashboardResponse>
		return data
	} catch (e) {
		const errorMessage =
			e instanceof Error ? e.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: null
		}
	}
}
