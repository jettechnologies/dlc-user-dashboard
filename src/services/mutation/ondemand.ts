import {
	ResponseSingleType,
	SubscriptionResponse,
	RedeemVoucherResponse
} from "@/types/response-type"
import { ENDPOINTS } from "@/utils/constants"
import { authFetch } from "@/utils/lib/auth-fetch"

export interface addOnDemandParams {
	examId: string
	planId: string
}

export interface RedeemOnDemandVoucherParams {
	examId: string
	code: string
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

export const redeemOnDemandVoucher = async (
	params: RedeemOnDemandVoucherParams
) => {
	try {
		const url = ENDPOINTS.onDemand.redeemOnDemandVoucher
		const response = await authFetch<ResponseSingleType<RedeemVoucherResponse>>(
			{
				url,
				options: { method: "POST", body: JSON.stringify({ ...params }) }
			}
		)
		return response
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."
		throw new Error(errorMessage)
	}
}
