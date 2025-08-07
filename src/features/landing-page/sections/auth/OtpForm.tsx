"use client"

import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { teacherVerifyOtp } from "@/services/mutation"
import { otpSchema, type OtpFormValues } from "@/utils/schemas"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface OtpFormProps {
	email: string
}

export const OtpForm = ({ email }: OtpFormProps) => {
	const router = useRouter()

	return (
		<div>
			<EnhancedForm.Root
				schema={otpSchema}
				onSubmit={async (data: OtpFormValues) => {
					try {
						const verifyData = {
							email,
							otp: data.otp
						}
						const response = await teacherVerifyOtp(verifyData)
						if (!response.success) {
							toast.error(response.message)
						}

						setTimeout(() => {
							toast.success(response.message)
							router.push("/signup?ui=email-verifed")
						}, 600)
					} catch (e) {
						const errorMessage =
							e instanceof Error ? e.message : "An unexpected error occurred."
						toast.error(errorMessage)
					}
				}}
				defaultValues={{ otp: "" }}
				className="mt-14 flex w-fit flex-col gap-y-8 md:min-w-[350px]"
			>
				{(methods) => {
					return (
						<div className="flex flex-col gap-y-12 items-center w-full">
							<div className="w-full lg:w-[376px]">
								<p className="font-normal w-[80%] text-center text-[16px] text-black mx-auto mb-6">
									We have sent a mail with a 6-digit verification code to the
									provided email <span className="text-dlc-blue">{email}</span>
								</p>
								<EnhancedForm.OtpInput
									maxLength={6}
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
