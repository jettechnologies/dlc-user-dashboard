import React from "react"
import { twMerge } from "tailwind-merge"

interface CardProps {
	width?: string
	height?: string
	bgColor?: string
	className?: string
	children?: React.ReactNode
}

export const Card = ({
	width = "320px",
	height = "580px",
	bgColor = "bg-white",
	className = "",
	children
}: CardProps) => {
	// Check if `bgColor` is a gradient or a raw color code (hex or rgb)
	const isGradient =
		bgColor.includes("linear-gradient") ||
		bgColor.startsWith("#") ||
		bgColor.startsWith("rgb")

	return (
		<div
			className={twMerge(
				`block rounded-lg border border-gray-200 py-6 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100 ${!isGradient ? bgColor : ""}`,
				className
			)}
			style={{
				width,
				height,
				background: isGradient ? bgColor : undefined
			}}
		>
			{children}
		</div>
	)
}
