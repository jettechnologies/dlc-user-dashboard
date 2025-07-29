import { JSON_PLACEHOLDER_URL } from "@/constants"
import { apiHelper } from "@/helpers/api-helper/api-helper"

// import { ApiResponseType, ApiResponse } from "@/utils/types"

// import { ApiResponse } from "@/utils/types"

interface ContactUsParams {
	fullName: string
	email: string
	phoneNumber: string
	subject: string
	message: string
}

export const contactUs = async (params: ContactUsParams) => {
	try {
		// const { contactUs } = ENDPOINTS.student

		const request = await apiHelper.post<unknown>(
			`${JSON_PLACEHOLDER_URL}/posts`,
			params
		)

		if (request.status !== 200) {
			throw new Error(`Request failed with status ${request.status}`)
		} else {
			const response: unknown = request.data
			return response
		}
	} catch (error) {
		console.error("Error fetching quiz summary:", error)
		return null
	}
}

// import { JSON_PLACEHOLDER_URL } from "@/constants"
// import { apiHelper } from "@/helpers/api-helper/api-helper"
// import { ApiResponseType } from "@/utils/types"

// interface ContactUsParams {
//   fullName: string
//   email: string
//   phoneNumber: string
//   subject: string
//   message: string
// }

// interface ContactUsResponse {
//   id: number
//   // Add other expected response fields here
// }

// export const contactUs = async (
//   params: ContactUsParams
// ): Promise<ApiResponseType<ContactUsResponse> | null> => {
//   try {
//     const response = await apiHelper.post<ContactUsResponse>(
//       `${JSON_PLACEHOLDER_URL}/posts`,
//       params
//     )

//     return response
//   } catch (error) {
//     console.error("Error in contactUs API call:", error)
//     return null
//   }
// }
