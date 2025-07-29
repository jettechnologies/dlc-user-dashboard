import { ResponseSingleType, SubscriptionResponse } from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
// import { authFetch } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export const initializePayment = async (amount: number) => {
	try {
		const url = `${ENDPOINTS.subscription.initializePayment}`
		const response = await authFetch<ResponseSingleType<SubscriptionResponse>>({
			url,
			options: { method: "POST", body: JSON.stringify({ amount }) }
		})
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}
