import { z } from "zod"

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Name should be at least 3 characters long" }),
	email: z.string().email({ message: "Invalid email address" }),
	contact: z.string().regex(/^[0-9]{11}$/, {
		message: "Invalid phone number, must be 11 digits"
	}),
	subject: z
		.string()
		.min(3, { message: "Subject should be at least 3 characters long" }),
	message: z
		.string()
		.min(3, { message: "Message should be at least 3 characters long" })
		.max(256, {
			message: "You have exceeded the character limit (256 characters max)"
		})
})

export type ContactFormTypes = z.infer<typeof contactFormSchema>
