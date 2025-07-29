"use client"

import { ORLine } from "../../components"
import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { userSignin } from "@/services/mutation"
import { useAuthActions } from "@/stores"
import { userRoles, type UserRoles } from "@/utils/constants"
import { signinSchema } from "@/utils/schemas"
import { Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export const SigninForm = () => {
	const [userRole, setUserRole] = useState<UserRoles>("student")
	const router = useRouter()
	const { setAccessToken } = useAuthActions()

	const handleSelectUserRole = (userRole: UserRoles) => setUserRole(userRole)

	return (
		<div className="grid min-h-[450px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
			<div className="w-fit px-3">
				<h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
					Login
				</h3>
				<EnhancedForm.Root
					schema={signinSchema}
					onSubmit={async (values) => {
						try {
							const response = await userSignin(values, userRole)

							if (!response.success) {
								throw new Error(response.message)
							}

							const token = response.data?.token ?? ""
							let role = ""

							if (response?.data) {
								if ("teacherDetails" in response?.data) {
									role = response.data.teacherDetails.role
								} else if ("studentDetails" in response?.data) {
									role = response.data.studentDetails.role
								}

								if (token && role) {
									setAccessToken(token, role)
									toast.success(response.message)
									router.push(role === "STUDENT" ? "/student" : "/teacher")
								}
							}
						} catch (e) {
							const errorMessage =
								e instanceof Error ? e.message : "An unexpected error occurred."
							toast.error(errorMessage)
						}
					}}
					defaultValues={{ identifier: "", password: "" }}
				>
					{(methods) => {
						const watchedFields = methods.watch(["identifier", "password"])

						const allFieldsFilled = watchedFields.every((field) =>
							Boolean(field)
						)

						return (
							<div className="mt-6 flex items-center flex-col w-[376px]">
								<div className="w-full">
									<EnhancedForm.Field
										name="identifier"
										control={methods.control}
									>
										<EnhancedForm.Input
											name="identifier"
											placeholder="Phone for students, email for teachers"
											inputSize="lg"
											radius="10px"
											className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
										/>
									</EnhancedForm.Field>
								</div>
								<div className="w-full">
									<EnhancedForm.Field name="password" control={methods.control}>
										<EnhancedForm.Input
											name="password"
											type="password"
											placeholder="Password"
											inputSize="lg"
											radius="10px"
											className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue mt-6"
										/>
									</EnhancedForm.Field>
								</div>

								<div className="w-full mt-2 flex justify-end">
									<Link
										href="/forgot-password"
										className="text-sm font-semibold text-dlc-blue"
									>
										Forgot Password?
									</Link>
								</div>

								<div className="w-full lg:w-[376px]">
									<p className="text-sm font-medium text-black">Select Role</p>
									<div className="mt-4 flex w-full gap-x-4">
										{userRoles.map((role) => (
											<button
												key={role}
												type="button"
												className={`flex h-[36px] items-center gap-x-4 rounded-[10px] px-[14px] py-[6px] lowercase max-[780px]:flex-1 ${
													userRole === role
														? "bg-light-blue text-white"
														: "bg-[#E3E3E3] text-black"
												} `}
												onClick={() => handleSelectUserRole(role)}
											>
												<Check size={20} color="white" />
												<p className="text-[10px] font-normal capitalize lg:text-xs">
													{role.toLowerCase()}
												</p>
											</button>
										))}
									</div>
								</div>

								<div className="mt-8 w-full lg:w-[376px]">
									<EnhancedForm.Submit
										loading={methods.formState.isSubmitting}
										isDisabled={!allFieldsFilled}
										content="Login"
										className="h-[52px] w-full bg-light-blue text-[16px] font-semibold hover:bg-light-blue/80 lg:text-[20px]"
									/>
								</div>
								<div className="w-full mt-6 mb-4">
									<ORLine />
								</div>
								<div className="mt-4 flex w-full justify-center gap-x-4">
									<Link
										href="/signup"
										className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
									>
										<p className="text-[8px] font-normal text-[#131313] lg:text-xs">
											Do not have an Account?{" "}
											<span className="ml-1 text-light-blue">Sign up</span>
										</p>
									</Link>
									{/* <Link
										href="/signin/student"
										className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
									>
										<p className="text-[8px] font-normal text-[#131313] lg:text-xs">
											Have a student account?
											<span className="ml-1 text-SC-Orange">Sign in</span>
										</p>
									</Link> */}
								</div>
							</div>
						)
					}}
				</EnhancedForm.Root>
			</div>
		</div>
	)
}
