"use client"

import { OtpForm, type OtpActionParams } from "./OtpForm"
import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { studentForgetPassword, studentVerifyOtp } from "@/services/mutation"
import { forgetPasswordSchema } from "@/utils/schemas"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export const ForgotPasswordForm = () => {
	const router = useRouter()
	const [showOtpForm, setShowOtpForm] = useState(false)
	const handleVerifyOtp = async (params: OtpActionParams) => {
		try {
			const response = await studentVerifyOtp(params)
			if (!response.success) {
				throw new Error(response.message)
			}

			toast.success(response.message)
			router.push("/reset-password")
		} catch (e) {
			const errorMessage =
				e instanceof Error ? e.message : "An unexpected error occurred."
			toast.error(errorMessage)
		}
	}
	return (
		<div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
			{!showOtpForm ? (
				<div className="w-fit px-3">
					<h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
						Forget password
					</h3>
					<EnhancedForm.Root
						schema={forgetPasswordSchema}
						onSubmit={async (values, options) => {
							try {
								const data = {
									email: values.resetField
								}
								const response = await studentForgetPassword(data)
								if (!response.success) {
									throw new Error(response.message)
								}

								toast.success(response.message)
								options?.resetForm()
								localStorage.setItem("forget-password-email", values.resetField)
								setShowOtpForm(true)
							} catch (e) {
								const errorMessage =
									e instanceof Error
										? e.message
										: "An unexpected error occurred."
								toast.error(errorMessage)
							}
						}}
						defaultValues={{ resetField: "" }}
					>
						{(methods) => {
							return (
								<div>
									<EnhancedForm.Field
										name="resetField"
										control={methods.control}
									>
										<EnhancedForm.Input
											name="resetField"
											type="text"
											placeholder="Enter your email address"
											className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue mt-6 focus:border-dlc-blue-400 focus:outline-none"
										/>
									</EnhancedForm.Field>
									<div className="mt-8 w-full lg:w-[376px]">
										<EnhancedForm.Submit
											loading={methods.formState.isSubmitting}
											content="Verify"
											className="h-[52px] w-full bg-light-blue text-[16px] font-semibold hover:bg-light-blue/80 lg:text-[20px]"
										/>
									</div>
								</div>
							)
						}}
					</EnhancedForm.Root>
				</div>
			) : (
				<OtpForm
					email={localStorage.getItem("forget-password-email") as string}
					otpVerifiedAction={handleVerifyOtp}
					isResendEnabled={false}
					otpDigits={4}
				/>
			)}
		</div>
	)
}
