"use client"

import { Button } from "../ui"
import { cn } from "@/utils/lib/utils"
import { FileText, Trash2, CloudUpload } from "lucide-react"
import Image from "next/image"
import React, {
	useMemo,
	useRef,
	useState,
	useImperativeHandle,
	forwardRef,
	type ReactNode
} from "react"
import { useDropzone, type Accept } from "react-dropzone"
import {
	useController,
	type Control,
	type FieldPath,
	type FieldValues
} from "react-hook-form"
import { toast } from "sonner"

export const FilePreview = ({
	index,
	preview,
	onRemove,
	files
}: {
	index: number
	preview: string
	onRemove: (index: number) => void
	files: File[]
}) => (
	<div
		key={index}
		className="flex items-center justify-between rounded-md border border-gray-200 p-3"
	>
		<div className="flex items-center space-x-3">
			{preview.startsWith("blob:") ? (
				<Image
					src={preview}
					alt={`Preview ${index}`}
					className="h-8 w-8 rounded object-cover"
				/>
			) : (
				<div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
					<FileText className="h-4 w-4 text-gray-500 font-normal" />
				</div>
			)}
			<span className="text-sm text-gray-700">
				{files[index]?.name || preview}
			</span>
		</div>
		<Button
			type="button"
			onClick={() => onRemove(index)}
			className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
		>
			<Trash2 />
		</Button>
	</div>
)

interface FileUploadZoneProps<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>
> {
	name: TName
	control: Control<TFieldValues>
	accept: Accept | undefined
	maxFiles?: number
	maxSize?: number
	borderColor?: string
	borderRadius?: string | number
	multiple?: boolean
	children?: ReactNode
	onImageUpload?: (file: File[] | File) => void
	wrapperClassName?: string
	showInternalPreviews?: boolean
	labelElement?: ReactNode
	renderExternalPreviews?: (
		previews: string[],
		files: File[],
		onRemove: (index: number) => void
	) => ReactNode
}

// You must declare the component using function syntax to use generics with forwardRef
function FileUploadZoneInner<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>
>(
	{
		name,
		control,
		accept,
		maxFiles = 1,
		maxSize = 2048576,
		children,
		borderColor = "border-gray-300",
		borderRadius = "rounded-md",
		multiple = false,
		onImageUpload,
		wrapperClassName,
		showInternalPreviews = false,
		labelElement,
		renderExternalPreviews
	}: FileUploadZoneProps<TFieldValues, TName>,
	ref: React.Ref<{
		open: () => void
		remove?: () => void
		previews: string[]
		files: File[]
	} | null>
) {
	const {
		field,
		fieldState: { error }
	} = useController({
		name,
		control
	})

	const [uploading, setUploading] = useState(false)
	const [previews, setPreviews] = useState<string[]>([])
	const [files, setFiles] = useState<File[]>([])
	const isOpening = useRef(false)

	console.log(uploading)

	const handleFilePreview = (acceptedFiles: File[]) => {
		const previewUrls = acceptedFiles.map((file) =>
			file.type.startsWith("image/") ? URL.createObjectURL(file) : file.name
		)

		if (multiple) {
			setPreviews((prev) => [...prev, ...previewUrls])
			setFiles((prev) => [...prev, ...acceptedFiles])
			const allFiles = [...files, ...acceptedFiles]
			field.onChange(allFiles)
			if (onImageUpload) onImageUpload(allFiles)
		} else {
			setPreviews(previewUrls)
			setFiles(acceptedFiles)
			field.onChange(acceptedFiles[0])
			if (onImageUpload) onImageUpload(acceptedFiles[0])
		}
		setUploading(false)
	}

	const handleRemoveFile = (index: number) => {
		const newPreviews = previews.filter((_, i) => i !== index)
		const newFiles = files.filter((_, i) => i !== index)

		// Revoke object URL if it's a blob
		if (previews[index]?.startsWith("blob:")) {
			URL.revokeObjectURL(previews[index])
		}

		setPreviews(newPreviews)
		setFiles(newFiles)

		if (multiple) {
			field.onChange(newFiles.length > 0 ? newFiles : null)
		} else {
			field.onChange(null)
		}
	}

	const InternalPreviewGrid = () => (
		<div className="mt-4 space-y-2">
			<h4 className="text-sm font-medium text-gray-700">Uploaded Files</h4>
			{previews.map((preview, index) => (
				<FilePreview
					key={index}
					index={index}
					preview={preview}
					files={files}
					onRemove={handleRemoveFile}
				/>
			))}
		</div>
	)

	const {
		getRootProps,
		getInputProps,
		open: dropzoneOpen,
		isDragAccept,
		isDragReject
	} = useDropzone({
		accept,
		multiple: multiple || false,
		maxFiles,
		maxSize,
		onDrop: (acceptedFiles) => {
			setUploading(true)
			handleFilePreview(acceptedFiles)
		},
		onDropRejected: (rejections) => {
			const errorMessages = rejections
				.flatMap(({ file, errors }) =>
					errors.map((error) => `${file.name}: ${error.message}`)
				)
				.join("\n")
			toast.error(errorMessages)
			setUploading(false)
		}
	})

	useImperativeHandle(ref, () => ({
		open: () => {
			if (!isOpening.current) {
				isOpening.current = true
				dropzoneOpen()
				setTimeout(() => {
					isOpening.current = false
				}, 100)
			}
		},
		remove: () => {
			// Revoke all object URLs
			previews.forEach((url) => {
				if (url.startsWith("blob:")) {
					URL.revokeObjectURL(url)
				}
			})
			field.onChange(null)
			setPreviews([])
			setFiles([])
		},
		previews,
		files
	}))

	// Clean up preview URLs on unmount
	React.useEffect(() => {
		return () => {
			previews.forEach((url) => {
				if (url.startsWith("blob:")) {
					URL.revokeObjectURL(url)
				}
			})
		}
	}, [previews])

	const borderColorClass = useMemo(() => {
		if (isDragReject || error) return "border-red-500"
		if (isDragAccept) return "border-green-500"
		return borderColor
	}, [isDragReject, isDragAccept, error, borderColor])

	return (
		<div className="w-full">
			{labelElement}

			<div className="min-h-[250px] flex flex-col">
				<div
					{...getRootProps()}
					className={cn(
						"flex flex-col flex-1 cursor-pointer border-2 border-dashed p-6 text-center transition-colors hover:border-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none",
						borderColorClass,
						borderRadius,
						wrapperClassName
					)}
				>
					<input {...getInputProps()} />

					{showInternalPreviews && previews.length > 0 ? (
						<div
							className={cn(
								"flex-1 min-h-0 overflow-y-auto mt-2 w-full flex flex-wrap justify-center items-center gap-4"
							)}
						>
							{previews.map((preview, index) => (
								<div key={index} className="inline-flex">
									{preview.startsWith("blob:") ? (
										<Image
											src={preview}
											alt={`Preview ${index}`}
											width={150}
											height={150}
											className="object-cover rounded-md"
											unoptimized
										/>
									) : (
										<p className="text-sm text-muted-foreground">{preview}</p>
									)}
								</div>
							))}
						</div>
					) : (
						children || (
							<div className="flex flex-col items-center justify-center py-6 flex-1">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
									<CloudUpload className="h-6 w-6 text-gray-400" />
								</div>
								<p className="mb-2 text-sm text-gray-600 text-center">
									Upload Files, materials, presentations or documents.
								</p>
								<Button
									type="button"
									variant="outline"
									className="text-sm text-gray-700 border-gray-300 hover:bg-gray-50"
								>
									Choose Files
								</Button>
							</div>
						)
					)}
				</div>
			</div>

			{error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}

			{/* External previews */}
			{!showInternalPreviews && previews.length > 0 && (
				<div className="mt-4">
					{renderExternalPreviews ? (
						renderExternalPreviews(previews, files, handleRemoveFile)
					) : (
						<InternalPreviewGrid />
					)}
				</div>
			)}
		</div>
	)
}

// Export with generic wrapper
export const FileUploadZone = forwardRef(FileUploadZoneInner) as <
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>
>(
	props: FileUploadZoneProps<TFieldValues, TName> & {
		ref?: React.Ref<{ open: () => void; remove?: () => void }>
	}
) => ReturnType<typeof FileUploadZoneInner>
