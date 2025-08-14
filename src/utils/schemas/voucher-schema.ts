import { z } from "zod"

export const VoucherSchema = z.object({
	voucher_code: z.string().max(8, "Voucher is too long").optional()
})
