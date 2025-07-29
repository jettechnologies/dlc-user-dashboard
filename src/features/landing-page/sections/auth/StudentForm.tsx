"use client"

import { ORLine } from "../../components"
import { SignupProps } from "../../containers/auth"
import { EnhancedForm } from "@/components/shared/EnhancedForm"
import CustomSelect from "@/components/shared/form/Select"
import { studentSignup } from "@/services/mutation"
import { useAuthActions } from "@/stores"
import { signupSchema, type SignupFormValues } from "@/utils/schemas"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

export const StudentForm = ({ examOptions }: SignupProps) => {
	const { setAccessToken } = useAuthActions()
	const router = useRouter()
	const submit: SubmitHandler<SignupFormValues> = async (data) => {
		try {
			const { fullName, mobile, email, password, exam } = data

			const newMobile = `234${mobile.substring(1)}`

			const signupData = {
				fullName,
				phoneNumber: newMobile,
				email,
				password,
				exam
			}

			const response = await studentSignup(signupData)
			if (!response.success) {
				throw new Error(response.message)
			}

			setTimeout(() => {
				const token = response.data?.token ?? ""
				const role = response.data?.studentDetails.role ?? ""
				if (token && role) {
					setAccessToken(token, role)
					toast.success(response.message)
					router.push("/student")
				}
			}, 600)
		} catch (e) {
			const errorMessage =
				e instanceof Error ? e.message : "An unexpected error occurred."
			toast.error(errorMessage)
		}
	}

	return (
		<div>
			<EnhancedForm.Root
				schema={signupSchema}
				onSubmit={submit}
				defaultValues={{
					fullName: "",
					mobile: "",
					email: "",
					password: "",
					confirmPassword: ""
				}}
				className="mt-10 flex w-fit flex-col gap-y-8 md:min-w-[350px]"
			>
				{(methods) => {
					const watchedFields = methods.watch([
						"fullName",
						"mobile",
						"email",
						"exam",
						"password",
						"confirmPassword"
					])

					const allFieldsFilled = watchedFields.every((field) => Boolean(field))

					return (
						<>
							<EnhancedForm.Field name="fullName" control={methods.control}>
								<EnhancedForm.Input
									name="fullName"
									placeholder="Fullname"
									inputSize="lg"
									radius="10px"
									className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs"
								/>
							</EnhancedForm.Field>

							<EnhancedForm.Field name="mobile" control={methods.control}>
								<EnhancedForm.Input
									name="mobile"
									placeholder="Phone number"
									inputSize="lg"
									radius="10px"
									className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs"
								/>
							</EnhancedForm.Field>

							<EnhancedForm.Field name="email" control={methods.control}>
								<EnhancedForm.Input
									name="email"
									placeholder="Email address"
									inputSize="lg"
									radius="10px"
									className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs"
								/>
							</EnhancedForm.Field>

							<EnhancedForm.Field
								name="exam"
								control={methods.control}
								render={(field) => (
									<CustomSelect
										field={field}
										height="52px"
										fontSize="12px"
										options={examOptions}
										value={field.value}
										textColor="var(--dlc-blue-400)"
										placeholder="Select exam"
									/>
								)}
								formItemClassName="border-2 border-dlc-blue-400 rounded-[10px] bg-white shadow-md"
							/>

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

							{/* Terms Agreement */}
							<div className="w-full lg:w-[376px]">
								<div className="w-full">
									<p className="text-center font-poppins text-[10px] text-black">
										By registering for Digital Learning Circle, you agree to the{" "}
										<Link href="/terms" className="text-dlc-blue">
											Terms
										</Link>{" "}
										and{" "}
										<Link href="/policy" className="text-dlc-blue">
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
