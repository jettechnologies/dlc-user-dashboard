"use client"

import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { Button } from "@/components/ui"
import { teacherResendOtp } from "@/services/mutation"
import { useTeacherSignupState } from "@/stores/teacher-signup-flow"
import { otpSchema } from "@/utils/schemas"
import { useTimer } from "react-timer-hook"
import { toast } from "sonner"
import { z } from "zod"

export interface OtpActionParams {
	email: string
	otp: string
}

interface OtpFormProps {
	email: string
	otpVerifiedAction: (params: OtpActionParams) => void
	isResendEnabled?: boolean
	otpDigits?: number
}

export const OtpForm = ({
	email,
	otpVerifiedAction,
	isResendEnabled = true,
	otpDigits = 6
}: OtpFormProps) => {
	const resetTimeStamp = 2 * 60 * 1000
	const { seconds, minutes, isRunning, restart } = useTimer({
		expiryTimestamp: new Date(Date.now() + resetTimeStamp)
	})

	const validOtpSchema = otpSchema(otpDigits)
	type OtpFormValues = z.infer<typeof validOtpSchema>

	const { teacherInfo } = useTeacherSignupState()
	const timer = `${minutes}:${seconds}`

	const handleResendOtp = async () => {
		try {
			const response = await teacherResendOtp({
				email: teacherInfo?.email ?? ""
			})
			if (!response.success) {
				toast.error(response.message)
				return
			}
			toast.success(response.message)
			const newExpiry = new Date(Date.now() + 2 * 60 * 1000)
			restart(newExpiry)
		} catch (e) {
			const errorMessage =
				e instanceof Error ? e.message : "An unexpected error occurred."
			toast.error(errorMessage)
		}
	}

	return (
		<div>
			<EnhancedForm.Root
				schema={validOtpSchema}
				onSubmit={async (data: OtpFormValues) =>
					otpVerifiedAction({
						email,
						otp: data.otp
					})
				}
				defaultValues={{ otp: "" }}
				className="mt-14 flex w-fit flex-col gap-y-8 md:min-w-[350px]"
			>
				{(methods) => {
					return (
						<div className="flex flex-col gap-y-12 items-center w-full">
							<div className="w-full lg:w-[376px]">
								<p className="font-normal w-[80%] text-center text-[16px] text-black mx-auto">
									We have sent a mail with a {otpDigits}-digit verification code
									to the provided email{" "}
									<span className="text-dlc-blue">{email}</span>
								</p>
								{isResendEnabled ? (
									<Button
										className="ml-8 mt-3 mb-6 p-0 text-light-blue/80"
										variant="ghost"
										type="button"
										onClick={handleResendOtp}
										disabled={isRunning}
									>
										{isRunning ? `Resend otp in: ${timer}` : "Resend OTP"}
									</Button>
								) : null}
								<EnhancedForm.OtpInput
									maxLength={otpDigits}
									name="otp"
									className="w-full flex justify-center"
									slotClassName="border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs h-[52px] rounded-none! w-[50px] focus:border-dlc-blue-400 focus:outline-none mx-auto"
								/>
							</div>
							{/* Submit Button */}
							<div className="w-full lg:w-[376px]">
								<EnhancedForm.Submit
									loading={methods.formState.isSubmitting}
									content="Verify OTP"
									className="h-[52px] w-full bg-light-blue text-[16px] font-semibold hover:bg-light-blue/80 lg:text-[20px]"
								/>
							</div>
						</div>
					)
				}}
			</EnhancedForm.Root>
		</div>
	)
}
