"use client"

// import { FilePreview, FileUploadZone } from "@/components/shared"
import { EnhancedForm } from "@/components/shared/EnhancedForm"
import { DatePickerField, TimePickerPopover } from "@/components/shared/form"
import CustomSelect from "@/components/shared/form/Select"
import { Button } from "@/components/ui"
import { useCreateLecture } from "@/services/mutation/useQuery-mutation"
import { getTeacherExamsQueryOptions } from "@/services/query"
import { createExamIdOptions } from "@/utils/constants"
import {
	ScheduleClassValues,
	ScheduleClassSchema
} from "@/utils/schemas/schedule-class"
import { useSuspenseQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

export const ScheduleForm = () => {
	const [isTimeSelected, setIsTimeSelected] = useState(false)
	const router = useRouter()

	const { mutateAsync: createLecture, isPending } = useCreateLecture()
	const { data: exams, isError } = useSuspenseQuery(
		getTeacherExamsQueryOptions()
	)

	const examOptions = createExamIdOptions(exams.data ?? [])

	// const handleFormSubmit: SubmitHandler<ScheduleClassValues> = async (data) => {
	// 	try {
	// 		const {
	// 			examId,
	// 			course,
	// 			topic,
	// 			date,
	// 			time,
	// 			duration,
	// 			max_students,
	// 			description
	// 		} = data

	// 		const dateString = format(date, "yyyy-MM-dd")

	// 		const newData = {
	// 			examId,
	// 			subject: course,
	// 			topic,
	// 			description,
	// 			date: dateString,
	// 			time,
	// 			duration: parseInt(duration, 10),
	// 			maxStudents: parseInt(max_students, 10)
	// 		}

	// 		await createLecture(newData)
	// 		router.push("/teacher/my-classes")
	// 	} catch (e) {
	// 		const errorMessage =
	// 			e instanceof Error ? e.message : "An unexpected error occurred."
	// 		toast.error(errorMessage)
	// 	}
	// }

	if (exams.data === null && isError) return <div>Something went wrong</div>

	return (
		<EnhancedForm.Root
			schema={ScheduleClassSchema}
			onSubmit={async (data) => {
				try {
					const {
						examId,
						course,
						topic,
						date,
						time,
						duration,
						max_students,
						description
					} = data

					const dateString = format(date, "yyyy-MM-dd")

					const newData = {
						examId,
						subject: course,
						topic,
						description,
						date: dateString,
						time,
						duration: parseInt(duration, 10),
						maxStudents: parseInt(max_students, 10)
					}

					await createLecture(newData)
					router.push("/teacher/my-classes")
				} catch (e) {
					const errorMessage =
						e instanceof Error ? e.message : "An unexpected error occurred."
					toast.error(errorMessage)
				}
			}}
		>
			{(methods) => {
				return (
					<div className="flex flex-col gap-y-5">
						<div className="w-[80%]">
							<EnhancedForm.Field
								name="examId"
								control={methods.control}
								label="course"
								labelClassName="font-poppins font-normal text-xs text-black capitalize"
								render={(field) => (
									<CustomSelect
										field={field}
										height="40px"
										fontSize="12px"
										options={examOptions}
										value={field.value as string}
										textColor="#000000"
										placeholder="Select exam"
										borderStyle="1px solid black"
										borderRadius="10px"
									/>
								)}
							/>
						</div>

						<div className="w-[80%] flex gap-x-4 ">
							<EnhancedForm.Field
								name="course"
								control={methods.control}
								label="course"
								labelClassName="font-poppins font-normal text-xs text-black capitalize"
							>
								<EnhancedForm.Input
									name="course"
									placeholder="Enter course name"
									inputSize="lg"
									radius="10px"
									className="h-[40px] border border-dlc-gray text-black placeholder:text-black text-xs font-normal bg-white"
								/>
							</EnhancedForm.Field>
							<EnhancedForm.Field
								name="topic"
								control={methods.control}
								label="topic"
								labelClassName="font-poppins font-normal text-xs text-black capitalize"
							>
								<EnhancedForm.Input
									name="topic"
									placeholder="Enter course topic"
									inputSize="lg"
									radius="10px"
									className="h-[40px] border border-dlc-gray text-black placeholder:text-black text-xs font-normal bg-white"
								/>
							</EnhancedForm.Field>
						</div>
						<div className="w-[80%] flex gap-x-4">
							<EnhancedForm.Field
								name="description"
								control={methods.control}
								label="Description"
								labelClassName="font-poppins font-normal text-xs text-black capitalize"
							>
								<EnhancedForm.TextArea
									name="description"
									placeholder="Enter what will be covered in the class and details to help the student prepare well for the class"
									inputSize="lg"
									radius="10px"
									className="h-[120px] border border-dlc-gray text-black placeholder:text-black text-xs lg:text-xs font-normal bg-white"
								/>
							</EnhancedForm.Field>
						</div>
						<div className="w-[80%] flex gap-x-4">
							<DatePickerField
								name="date"
								control={methods.control}
								label="Date"
								labelClassName="font-poppins font-normal text-xs text-black capitalize text-black"
								className="border border-dlc-gray w-full h-[40px] text-black"
							/>
							<EnhancedForm.Field
								name="time"
								control={methods.control}
								label="Time"
								labelClassName="font-poppins font-normal text-xs text-black capitalize"
							>
								<TimePickerPopover
									control={methods.control}
									name="time"
									selectedTime={methods.watch("time")}
									onClose={() => setIsTimeSelected(false)}
									onOpen={() => setIsTimeSelected(true)}
									isOpen={isTimeSelected}
									triggerClassName="h-[40px] border border-dlc-gray text-black placeholder:text-black text-xs font-normal rounded-[6px] px-4"
								/>
							</EnhancedForm.Field>
						</div>
						<div className="w-[80%] flex gap-x-4">
							<EnhancedForm.Field
								name="duration"
								control={methods.control}
								label="Duation(Minutes)"
								labelClassName="font-poppins font-normal text-xs text-black capitalize"
							>
								<EnhancedForm.Input
									name="duration"
									placeholder="Enter duration in minutes"
									inputSize="lg"
									radius="10px"
									className="h-[40px] border border-dlc-gray text-black placeholder:text-black text-xs font-normal bg-white"
								/>
							</EnhancedForm.Field>
							<EnhancedForm.Field
								name="max_students"
								control={methods.control}
								label="Max Students"
								labelClassName="font-poppins font-normal text-xs text-black capitalize"
							>
								<EnhancedForm.Input
									name="max_students"
									placeholder="Enter max students"
									inputSize="lg"
									radius="10px"
									className="h-[40px] border border-dlc-gray text-black placeholder:text-black text-xs font-normal bg-white"
								/>
							</EnhancedForm.Field>
						</div>
						{/* <div className="w-[80%]">
							<FileUploadZone
								name="resources"
								control={methods.control}
								accept={{ "application/pdf": [".pdf"] }}
								maxFiles={5}
								labelElement={
									<p className="mb-2.5 font-poppins text-xs text-black capitalize font-normal">
										Upload Resources (Optional)
									</p>
								}
								multiple={true}
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
						</div> */}
						<div className="w-[80%] flex gap-x-10 px-12">
							<EnhancedForm.Submit
								loading={isPending}
								className="w-[144px] h-[44px] rounded-[6px] bg-dlc-blue hover:bg-dlc-blue"
								content="Schedule"
							/>
							<Button
								variant="default"
								type="button"
								className="w-[144px] h-[44px] rounded-[6px] text-black flex items-center justify-center font-poppins text-base font-normal bg-gray-200 opacity-30"
							>
								Save as draft
							</Button>
						</div>
					</div>
				)
			}}
		</EnhancedForm.Root>
	)
}
