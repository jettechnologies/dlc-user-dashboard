import {
	SubscriptionPlanResponse,
	ResponseSingleType,
	SubscriptionHistoryResponse
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

export const fetchAllSubscriptionsPlain = async (): Promise<
	ResponseSingleType<SubscriptionPlanResponse[]>
> => {
	try {
		const url = ENDPOINTS.subscription.getAllSubscriptions

		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`)
		}

		const data = (await response.json()) as ResponseSingleType<
			SubscriptionPlanResponse[]
		>
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

export const fetchSubscriptionHistory = async (): Promise<
	ResponseSingleType<SubscriptionHistoryResponse>
> => {
	try {
		const url = ENDPOINTS.subscription.getSubscriptionHistory
		const response = await authFetch<
			ResponseSingleType<SubscriptionHistoryResponse>
		>({ url })
		const data = response as ResponseSingleType<SubscriptionHistoryResponse>
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
