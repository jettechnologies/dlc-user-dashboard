"use client"

import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { forgetPasswordSchema } from "@/utils/schemas"
import { toast } from "sonner"

export const ForgotPasswordForm = () => {
	return (
		<div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
			<div className="w-fit px-3">
				<h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
					Forget password
				</h3>
				<EnhancedForm.Root
					schema={forgetPasswordSchema}
					onSubmit={(values) => {
						console.log(values)
						toast.success("Login successful")
					}}
					defaultValues={{ resetField: "" }}
				>
					{(methods) => {
						return (
							<div>
								<EnhancedForm.Field name="resetField" control={methods.control}>
									<EnhancedForm.Input
										name="resetField"
										type="text"
										placeholder="Enter your phone number or SSC ID"
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
		</div>
	)
}
