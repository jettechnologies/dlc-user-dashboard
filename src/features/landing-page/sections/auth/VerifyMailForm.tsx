import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { teacherRequestOtp } from "@/services/mutation"
import {
	teacherVerifyMailSchema,
	type TeacherVerifyMailFormValues
} from "@/utils/schemas"
import { SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

interface VerifyEmailFormProps {
	setOtp: (email: string, fullName: string) => void
}

export const VerifyEmailForm = ({ setOtp }: VerifyEmailFormProps) => {
	const submit: SubmitHandler<TeacherVerifyMailFormValues> = async (data) => {
		try {
			const response = await teacherRequestOtp(data)
			if (!response.success) {
				toast.error(response.message)
				return
			}

			setTimeout(() => {
				toast.success(response.message)
				setOtp(data.email, data.fullName)
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
				schema={teacherVerifyMailSchema}
				onSubmit={submit}
				defaultValues={{
					email: "",
					fullName: ""
				}}
				className="mt-10 flex w-fit flex-col gap-y-8 md:min-w-[350px]"
			>
				{(methods) => {
					const watchedFields = methods.watch(["email", "fullName"])

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

							<EnhancedForm.Field name="email" control={methods.control}>
								<EnhancedForm.Input
									name="email"
									placeholder="Email address"
									inputSize="lg"
									radius="10px"
									className="h-[52px] border-2 border-dlc-blue-400 text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue text-xs"
								/>
							</EnhancedForm.Field>

							{/* Submit Button */}
							<div className="w-full lg:w-[376px]">
								<EnhancedForm.Submit
									loading={methods.formState.isSubmitting}
									isDisabled={!allFieldsFilled}
									content="Verify Email"
									className="h-[52px] w-full bg-light-blue text-[16px] font-semibold hover:bg-light-blue/80 lg:text-[20px]"
								/>
							</div>
						</>
					)
				}}
			</EnhancedForm.Root>
		</div>
	)
}
