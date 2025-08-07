"use client"

import { EnhancedForm } from "@/components/shared/EnhancedForm"
import {
	FileUploadZone,
	FilePreview
} from "@/components/shared/file-upload-zone"
import { teacherSignup, type CredentialItem } from "@/services/mutation"
import { useAuthActions } from "@/stores"
import {
	useTeacherSignupActions,
	useTeacherSignupState
} from "@/stores/teacher-signup-flow"
import { CredentialsSchema } from "@/utils/schemas"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const CredentialForm = () => {
	const { teacherInfo, level } = useTeacherSignupState()
	const { resetSignupState } = useTeacherSignupActions()
	const { setAccessToken } = useAuthActions()

	const router = useRouter()

	return (
		<section className="w-[80%] space-y-6">
			<div className="space-y-2 font-poppins text-black">
				<h2 className="text-2xl font-semibold">Submit Credentials</h2>
				<p className="text-sm font-normal">
					Provide necessary documents in pdf formats
				</p>
			</div>

			<section className="w-full py-8 px-4 bg-white mx-auto min-h-[400px]">
				<EnhancedForm.Root
					schema={CredentialsSchema}
					onSubmit={async (data) => {
						try {
							if (
								teacherInfo &&
								teacherInfo.email &&
								teacherInfo.fullName &&
								level
							) {
								const credentials = [
									{
										file_0: data.bed_certificate,
										name_1: "bed_certificate"
									},
									{
										file_1: data.trcn_certificate,
										name_2: "trcn_certificate"
									},
									{
										file_2: data.cv,
										name_3: "CV"
									},
									...(data.other_certifications
										? data.other_certifications.map((file, index) => ({
												[`file_${index + 3}`]: file,
												[`name_${index + 4}`]: file.name.split(".")[0]
											}))
										: [])
								]

								const teacherCredentials = credentials as CredentialItem[]

								const signupData = {
									...teacherInfo,
									level,
									credentials: teacherCredentials
								}

								const response = await teacherSignup(signupData)
								if (!response.success) {
									throw new Error(response.message)
								}

								setTimeout(() => {
									const token = response.data?.token ?? ""
									const role = response.data?.teacherDetails.role ?? ""
									if (token && role) {
										setAccessToken(token, role)
										toast.success(response.message)
										router.push("/teacher")
										resetSignupState()
									}
								}, 600)
							}
						} catch (e) {
							const errorMessage =
								e instanceof Error ? e.message : "An unexpected error occurred."
							toast.error(errorMessage)
						}
					}}
				>
					{(methods) => {
						return (
							<div className="space-y-6">
								<div className="w-full flex gap-x-6 ">
									<FileUploadZone
										name="bed_certificate"
										control={methods.control}
										accept={{ "application/pdf": [".pdf"] }}
										labelElement={
											<p className="mb-2.5 font-poppins text-xs text-black font-normal">
												Upload B.Ed certificate
											</p>
										}
										showInternalPreviews
									/>
									<FileUploadZone
										name="trcn_certificate"
										control={methods.control}
										accept={{ "application/pdf": [".pdf"] }}
										labelElement={
											<p className="mb-2.5 font-poppins text-xs text-black font-normal">
												Upload TRCN certificate
											</p>
										}
										showInternalPreviews
									/>
								</div>
								<div className="w-full flex gap-x-6">
									<FileUploadZone
										name="cv"
										control={methods.control}
										accept={{ "application/pdf": [".pdf"] }}
										labelElement={
											<p className="mb-2.5 font-poppins text-xs text-black font-normal">
												Upload CV
											</p>
										}
										showInternalPreviews
									/>
									<FileUploadZone
										name="other_certifications"
										control={methods.control}
										accept={{ "application/pdf": [".pdf"] }}
										labelElement={
											<p className="mb-2.5 font-poppins text-xs text-black font-normal">
												Upload any other certificate (Optional)
											</p>
										}
										maxFiles={5}
										multiple={true}
										// showInternalPreviews
										renderExternalPreviews={(previews, files, onRemove) => {
											return (
												<div className="mt-4 space-y-2">
													<h4 className="text-sm font-medium text-gray-700">
														Uploaded Files
													</h4>
													{previews.map((preview, index) => (
														<FilePreview
															key={index}
															index={index}
															preview={preview}
															onRemove={onRemove}
															files={files}
														/>
													))}
												</div>
											)
										}}
									/>
								</div>
								<div className="w-full mt-10 flex justify-center">
									<EnhancedForm.Submit
										loading={methods.formState.isSubmitting}
										className="w-[400px] h-[60px] rounded-[6px] bg-dlc-blue hover:bg-dlc-blue"
										content="Submit"
									/>
								</div>
							</div>
						)
					}}
				</EnhancedForm.Root>
			</section>
		</section>
	)
}
