"use client"

import { ORLine } from "../../components"
import { EnhancedForm } from "@/components/shared/EnhancedForm"
import {
	useTeacherSignupActions,
	useTeacherSignupState
} from "@/stores/teacher-signup-flow"
import {
	teacherPartialSignupSchema,
	type TeacherPartialSignupValues
} from "@/utils/schemas"
import { TeacherRoles } from "@/utils/types"
import { Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

export const TeacherForm = () => {
	const [selectedRole, setSelectedRole] = useState<TeacherRoles>("SCHOOL")

	const { setTeacherInfo, updateTeacherInfo } = useTeacherSignupActions()
	const { teacherInfo } = useTeacherSignupState()
	const router = useRouter()

	const submit: SubmitHandler<TeacherPartialSignupValues> = async (data) => {
		const { phoneNumber, password } = data
		const newMobile = `234${phoneNumber.substring(1)}`

		if (teacherInfo && teacherInfo.email && teacherInfo.fullName) {
			const fullName = teacherInfo?.fullName
			const email = teacherInfo?.email

			const signupData = {
				fullName,
				phoneNumber: newMobile,
				email,
				password,
				type: selectedRole
			}

			setTeacherInfo(signupData)
			updateTeacherInfo(signupData)

			setTimeout(() => {
				router.push("/teacher-signup?ui=teacher-exams")
			}, 300)

			return
		}

		toast.warning("Email and fullname not filled")
		setTimeout(() => {
			router.push("/signup")
		}, 300)
	}

	return (
		<div>
			<EnhancedForm.Root
				schema={teacherPartialSignupSchema}
				onSubmit={submit}
				defaultValues={{
					phoneNumber: "",
					password: "",
					type: "SCHOOL",
					confirmPassword: ""
				}}
				className="mt-10 flex w-fit flex-col gap-y-8 md:min-w-[350px]"
			>
				{(methods) => {
					const watchedFields = methods.watch([
						"phoneNumber",
						"password",
						"confirmPassword"
					])

					const allFieldsFilled = watchedFields.every((field) => Boolean(field))

					const handleRoleSelect = (role: TeacherRoles) => {
						setSelectedRole(role)
						methods.setValue("type", role, { shouldValidate: true })
					}

					return (
						<>
							<EnhancedForm.Field name="phoneNumber" control={methods.control}>
								<EnhancedForm.Input
									name="phoneNumber"
									placeholder="Phone number"
									inputSize="lg"
									radius="10px"
									className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs"
								/>
							</EnhancedForm.Field>

							<EnhancedForm.Field name="password" control={methods.control}>
								<EnhancedForm.Input
									name="password"
									type="password"
									placeholder="Password"
									inputSize="lg"
									radius="10px"
									className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs"
								/>
							</EnhancedForm.Field>

							<EnhancedForm.Field
								name="confirmPassword"
								control={methods.control}
							>
								<EnhancedForm.Input
									name="confirmPassword"
									type="password"
									placeholder="Confirm Password"
									inputSize="lg"
									radius="10px"
									className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs"
								/>
							</EnhancedForm.Field>

							{/* Role Selection */}
							<div className="w-full lg:w-[376px]">
								<p className="text-sm font-medium text-black">Select Role</p>
								<div className="mt-4 flex w-full gap-x-4">
									{(["SCHOOL", "TRAINING"] as TeacherRoles[]).map((role) => (
										<button
											key={role}
											type="button"
											className={`flex h-[36px] items-center gap-x-4 rounded-[10px] px-[14px] py-[6px] lowercase max-[780px]:flex-1 ${
												selectedRole === role
													? "bg-light-blue text-white"
													: "bg-[#E3E3E3] text-black"
											} ${methods.formState.errors.type ? "border border-red-500" : ""}`}
											onClick={() => handleRoleSelect(role)}
										>
											<Check size={20} color="white" />
											<p className="text-[10px] font-normal capitalize lg:text-xs">
												{role.toLowerCase()} teacher
											</p>
										</button>
									))}
								</div>
								{methods.formState.errors.type && (
									<p className="mt-1 text-sm text-red-500">
										{methods.formState.errors.type.message}
									</p>
								)}
							</div>

							{/* Terms Agreement */}
							<div className="w-full lg:w-[376px]">
								<div className="flex w-full items-center gap-x-2">
									<p className="text-center font-poppins text-[10px] text-black">
										By registering for Digital Learning Circle, you agree to the{" "}
										<Link href="/terms" className="text-light-blue">
											Terms
										</Link>{" "}
										and{" "}
										<Link href="/policy" className="text-light-blue">
											Privacy Policy
										</Link>
										.
									</p>
								</div>
							</div>

							{/* Submit Button */}
							<div className="w-full lg:w-[376px]">
								<EnhancedForm.Submit
									loading={methods.formState.isSubmitting}
									isDisabled={!allFieldsFilled}
									content="Register"
									className="h-[52px] w-full bg-light-blue text-[16px] font-semibold hover:bg-light-blue/80 lg:text-[20px]"
								/>
							</div>
							<ORLine />
							{/* Sign In Link */}
							<div className="flex w-full justify-center gap-x-4">
								<Link
									href="/signin"
									className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
								>
									<p className="text-[8px] font-normal text-[#131313] lg:text-xs">
										If you have an Account?
										<span className="ml-1 text-light-blue">Sign In</span>
									</p>
								</Link>
							</div>
						</>
					)
				}}
			</EnhancedForm.Root>
		</div>
	)
}
