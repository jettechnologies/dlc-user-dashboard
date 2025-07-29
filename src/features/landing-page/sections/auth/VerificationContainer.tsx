"use client"

import { OtpForm } from "./OtpForm"
import { VerifyEmailForm } from "./VerifyMailForm"
import { useTeacherSignupActions } from "@/stores/teacher-signup-flow"
import { useState } from "react"

export const VerificationContainer = () => {
	const [otpVerification, setOptVerification] = useState({
		otp: "",
		email: ""
	})

	const { updateTeacherInfo } = useTeacherSignupActions()

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
				<OtpForm email={otpVerification.email} />
			)}
		</div>
	)
}
