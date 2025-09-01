import { z } from "zod"

export const VoucherSchema = z.object({
	voucher_code: z
		.string()
		.regex(
			/^DLC-[A-Za-z0-9]{8}$/,
			"Invalid voucher code format. Expected: DLC-XXXXXXXX"
		)
		.optional()
})
