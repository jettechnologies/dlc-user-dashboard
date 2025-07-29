import {
	OnDemandPlans,
	ResponseSingleType,
	OnDemandExams
} from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export const fetchAllOndemandPlans = async (): Promise<
	ResponseSingleType<OnDemandPlans[] | null>
> => {
	try {
		const url = ENDPOINTS.onDemand.getAllOndemandPlans

		const response = await authFetch<ResponseSingleType<OnDemandPlans[]>>({
			url
		})

		const data = response as ResponseSingleType<OnDemandPlans[]>
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

export const fetchAllOndemandExams = async (): Promise<
	ResponseSingleType<OnDemandExams[] | null>
> => {
	try {
		const url = ENDPOINTS.onDemand.getAllOndemandExams

		const response = await authFetch<ResponseSingleType<OnDemandExams[]>>({
			url
		})

		const data = response as ResponseSingleType<OnDemandExams[]>
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
