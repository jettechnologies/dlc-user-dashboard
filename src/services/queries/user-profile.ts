import {
	TeacherProfile,
	StudentProfile,
	ResponseSingleType
} from "@/types/response-type"
import { UserRoles } from "@/utils/constants"
import { ENDPOINTS } from "@/utils/constants/endpoints"
// import { authFetch } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export const fetchUserProfile = async (
	userRole: UserRoles
): Promise<ResponseSingleType<TeacherProfile | StudentProfile | null>> => {
	try {
		const url =
			userRole === "student"
				? ENDPOINTS.auth.getStudentProfile
				: ENDPOINTS.auth.getTeacherProfile
		const response = await authFetch<
			ResponseSingleType<TeacherProfile | StudentProfile | null>
		>({ url })
		const data = response as typeof userRole extends "student"
			? ResponseSingleType<StudentProfile>
			: ResponseSingleType<TeacherProfile>
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
