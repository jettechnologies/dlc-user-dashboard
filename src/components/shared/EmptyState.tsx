// import { mulish } from "./fonts"
import { cn } from "@/utils/lib/utils"
import Image, { ImageProps } from "next/image"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface EmptyStateProps {
	// Content
	title: string
	description?: string | ReactNode
	children?: ReactNode

	// Image
	imageSrc?: string
	imageAlt?: string
	imageProps?: Partial<ImageProps>
	imageSize?: "sm" | "md" | "lg" | "xl" | number

	// Styling
	className?: string
	titleClassName?: string
	descriptionClassName?: string
	containerClassName?: string

	// Layout
	verticalSpacing?: "sm" | "md" | "lg"
	textAlignment?: "left" | "center" | "right"

	// Actions
	action?: ReactNode
}

const sizeMap = {
	sm: 120,
	md: 160,
	lg: 200,
	xl: 240
}

export const EmptyState = ({
	title,
	description,
	children,
	imageSrc = "/icons/empty-state.svg",
	imageAlt = "Empty state",
	imageProps = {},
	imageSize = "md",
	className = "",
	titleClassName = "",
	descriptionClassName = "",
	containerClassName = "",
	verticalSpacing = "md",
	textAlignment = "center",
	action
}: EmptyStateProps) => {
	// Calculate image dimensions
	const calculatedSize =
		typeof imageSize === "number" ? imageSize : sizeMap[imageSize]

	// Spacing classes
	const spacingClasses = {
		sm: "space-y-2",
		md: "space-y-4",
		lg: "space-y-6"
	}

	// Alignment classes
	const alignmentClasses = {
		left: "text-left items-start",
		center: "text-center items-center",
		right: "text-right items-end"
	}

	return (
		<div
			className={twMerge(
				`flex h-64 flex-col justify-center p-4`,
				alignmentClasses[textAlignment],
				containerClassName,
				className
			)}
		>
			<div
				className={twMerge(
					"flex flex-col items-center",
					spacingClasses[verticalSpacing]
				)}
			>
				{imageSrc && (
					<Image
						src={imageSrc}
						alt={imageAlt}
						width={calculatedSize}
						height={calculatedSize * 0.6}
						className={twMerge("object-cover", imageProps.className)}
						{...imageProps}
					/>
				)}

				<div
					className={twMerge("flex flex-col", spacingClasses[verticalSpacing])}
				>
					<h3
						className={cn(
							`text-lg font-semibold text-[#252733]`,
							titleClassName
						)}
					>
						{title}
					</h3>

					{description && (
						<div className={cn("text-sm text-gray-500", descriptionClassName)}>
							{description}
						</div>
					)}
				</div>

				{children}

				{action && <div className="mt-4">{action}</div>}
			</div>
		</div>
	)
}
