/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog"
import { cn } from "@/utils/lib/utils"
import React from "react"

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "5xl"

export type CustomModalProps = {
	open?: boolean
	onOpenChange?: (open: boolean) => void
	triggerChild?: React.ReactElement<any, any>
	title?: string
	titleClassName?: string
	description?: string
	children?: React.ReactNode
	footer?: React.ReactNode
	size?: ModalSize
	className?: string
	showCloseButton?: boolean
}

const sizeMap: Record<ModalSize, string> = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-md",
	lg: "sm:max-w-lg",
	xl: "sm:max-w-xl",
	"2xl": "sm:max-w-2xl",
	"5xl": "sm:max-w-5xl"
}

export function ModalLayout({
	open,
	onOpenChange,
	title,
	titleClassName,
	triggerChild,
	description,
	children,
	footer,
	size = "md",
	className,
	showCloseButton = true
}: CustomModalProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>{triggerChild}</DialogTrigger>
			<DialogContent
				showCloseButton={showCloseButton}
				className={cn(sizeMap[size], className)}
			>
				{(title || description) && (
					<DialogHeader>
						{title && (
							<DialogTitle className={cn("text-primary", titleClassName)}>
								{title}
							</DialogTitle>
						)}
						{description && (
							<DialogDescription>{description}</DialogDescription>
						)}
					</DialogHeader>
				)}
				{children}
				{footer && <DialogFooter>{footer}</DialogFooter>}
			</DialogContent>
		</Dialog>
	)
}
