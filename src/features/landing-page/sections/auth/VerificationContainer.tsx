"use client"

import { OtpForm, type OtpActionParams } from "./OtpForm"
import { VerifyEmailForm } from "./VerifyMailForm"
import { teacherVerifyOtp } from "@/services/mutation"
import { useTeacherSignupActions } from "@/stores/teacher-signup-flow"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export const VerificationContainer = () => {
	const router = useRouter()
	const [otpVerification, setOptVerification] = useState({
		otp: "",
		email: ""
	})

	const { updateTeacherInfo } = useTeacherSignupActions()

	const handleTeacherVerifyOtp = async (params: OtpActionParams) => {
		try {
			const response = await teacherVerifyOtp(params)
			if (!response.success) {
				toast.error(response.message)
				return
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
	}

	return (
		<div>
			{!otpVerification.email ? (
				<VerifyEmailForm
					setOtp={(email, fullName) => {
						setOptVerification({ ...otpVerification, email })
						updateTeacherInfo({ fullName, email })
					}}
				/>
			) : (
				<OtpForm
					email={otpVerification.email}
					otpVerifiedAction={handleTeacherVerifyOtp}
				/>
			)}
		</div>
	)
}
