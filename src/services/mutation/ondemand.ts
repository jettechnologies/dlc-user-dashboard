import { ResponseSingleType, SubscriptionResponse } from "@/types/response-type"
import { authFetch } from "@/utils/lib/auth-fetch"
import { ENDPOINTS } from "@/utils/constants"

export interface addOnDemandParams {
	examId: string
	planId: string
}
export const addOnDemand = async (params: addOnDemandParams) => {
	try {
		const url = ENDPOINTS.onDemand.addOnDemandExam
		const response = await authFetch<ResponseSingleType<SubscriptionResponse>>({
			url,
			options: { method: "POST", body: JSON.stringify({ ...params }) }
		})
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}
