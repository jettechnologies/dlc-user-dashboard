import {
	SUPPORTED_IMAGE_TYPES,
	MAX_IMAGE_SIZE,
	SUPPORTED_DOCUMENT_TYPES,
	MAX_DOCUMENT_SIZE
} from "../constants"
import { z } from "zod"

export const ImageFileSchema = z
	.custom<File>(
		(file) => {
			if (!(file instanceof File)) return false
			return SUPPORTED_IMAGE_TYPES.includes(file.type)
		},
		{
			message:
				"Unsupported file format. Supported formats are .jpeg, .png, .gif, .webp, .svg, .jpg"
		}
	)
	.refine((file) => file.size <= MAX_IMAGE_SIZE, {
		message: "File size must be less than 20mb"
	})

export const DocumentFileSchema = z
	.custom<File>(
		(file) => {
			if (!(file instanceof File)) return false
			return SUPPORTED_DOCUMENT_TYPES.includes(file.type)
		},
		{
			message:
				"Unsupported file format. Supported formats are .pdf, .doc, .docx"
		}
	)
	.refine((file) => file.size <= MAX_DOCUMENT_SIZE, {
		message: "File size must be less than 20mb"
	})

export const ScheduleClassSchema = z.object({
	examId: z.string().min(3, "Exam name must be at least 3 characters"),
	course: z.string().min(3, "Course name must be at least 3 characters"),
	topic: z.string().min(3, "Topic name must be at least 3 characters"),
	description: z.string().min(3, "Description must be at least 3 characters"),
	date: z.date(),
	time: z.string(),
	duration: z.string().regex(/^\d+$/, "Duration must be a number"),
	max_students: z.string().regex(/^\d+$/, "Max students must be a number"),
	resources: z
		.array(DocumentFileSchema)
		.min(1, {
			message: "At least one document is required"
		})
		.max(5, {
			message: "You can upload a maximum of 5 documents"
		})
		.nullable()
		.optional()
})

export type ScheduleClassValues = z.infer<typeof ScheduleClassSchema>
