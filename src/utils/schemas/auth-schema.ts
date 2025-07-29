import { DocumentFileSchema } from "./schedule-class"
import { z } from "zod"

export const signupSchema = z
	.object({
		fullName: z
			.string()
			.min(3, "Fullname must be at least 3 characters")
			.max(100, "Fullname is too long"),

		mobile: z
			.string()
			.min(10, "Contact number must be at least 11 digits")
			.max(15, "Contact number is too long"),

		email: z.string().email("Invalid email format"),

		exam: z.string().min(1, "Exam field is required"),

		password: z.string().min(8, "Password must be at least 8 characters"),

		confirmPassword: z.string()

		// termsAgreement: z
		// 	.boolean({
		// 		required_error: "You must accept the terms and conditions."
		// 	})
		// 	.refine((value) => value === true, {
		// 		message: "You must accept the terms and conditions."
		// 	})
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"]
	})

export type SignupFormValues = z.infer<typeof signupSchema>

export const teacherPartialSignupSchema = z
	.object({
		phoneNumber: z
			.string()
			.min(10, "Contact number must be at least 11 digits")
			.max(15, "Contact number is too long"),

		password: z.string().min(8, "Password must be at least 8 characters"),

		confirmPassword: z.string(),

		type: z
			.enum(["SCHOOL", "TRAINING"], {
				errorMap: () => ({
					message: "Role must be either 'School teacher' or 'training teacher'"
				})
			})
			.nullable()

		// termsAgreement: z
		// 	.boolean({
		// 		required_error: "You must accept the terms and conditions."
		// 	})
		// 	.refine((value) => value === true, {
		// 		message: "You must accept the terms and conditions."
		// 	})
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"]
	})

export const teacherVerifyMailSchema = z.object({
	fullName: z
		.string()
		.min(3, "Fullname must be at least 3 characters")
		.max(100, "Fullname is too long"),
	email: z.string().email("Invalid email format")
})

export type TeacherVerifyMailFormValues = z.infer<
	typeof teacherVerifyMailSchema
>

export type TeacherPartialSignupValues = z.infer<
	typeof teacherPartialSignupSchema
>

export type TeacherSignupFormValues = TeacherVerifyMailFormValues &
	TeacherPartialSignupValues

export const signinSchema = z.object({
	identifier: z.string().refine(
		(value) => {
			const isPhone = /^\d{11}$/.test(value)
			const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

			return isPhone || isEmail
		},
		{
			message: "Enter a valid 11-digit phone number or a valid email address"
		}
	),
	password: z.string().min(8, "Password must be at least 8 characters")
})

export type SigninFormValues = z.infer<typeof signinSchema>

export const forgetPasswordSchema = z.object({
	resetField: z
		.string()
		.refine(
			(value) =>
				/^\d{11}$/.test(value) ||
				/^SC\d{4}$/.test(value) ||
				/^SCG\d{4}$/.test(value),
			{
				message:
					"Enter a valid 11-digit phone number or a valid SSC ID (e.g., SC1234 or SCG1234)"
			}
		)
})

export type ForgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>

export const resetPasswordSchema = z
	.object({
		password: z.string().min(8, "Password must be at least 8 characters"),
		confirmPassword: z.string()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"]
	})

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>

export const otpSchema = z.object({
	otp: z.string().length(6, "OTP must be exactly 6 digits")
})

export type OtpFormValues = z.infer<typeof otpSchema>

export const CredentialsSchema = z.object({
	bed_certificate: DocumentFileSchema.nullable(),
	trcn_certificate: DocumentFileSchema.nullable(),
	cv: DocumentFileSchema.nullable(),
	other_certifications: z
		.array(DocumentFileSchema)
		.max(5, "At most 5 document are to be uploaded")
		.optional()
		.nullable()
})

export type CredentialsFormValues = z.infer<typeof CredentialsSchema>

export type TeacherSignupInfo = Omit<TeacherSignupFormValues, "confirmPassword">

export interface TeacherSignupFlow {
	teacherInfo: TeacherSignupInfo
	level: string
}
