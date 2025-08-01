import {
	SubscriptionPlanResponse,
	ResponseSingleType
} from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
// import { authFetch } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export const fetchAllSubscriptions = async (): Promise<
	ResponseSingleType<SubscriptionPlanResponse[]>
> => {
	try {
		const url = ENDPOINTS.subscription.getAllSubscriptions
		const response = await authFetch<
			ResponseSingleType<SubscriptionPlanResponse[]>
		>({ url })
		const data = response as ResponseSingleType<SubscriptionPlanResponse[]>
		return data
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		return {
			success: false,
			message: errorMessage,
			data: []
		}
	}
}
