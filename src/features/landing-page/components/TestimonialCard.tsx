"use client"

import Image from "next/image"
import React from "react"
import { twMerge } from "tailwind-merge"

interface TestimonialCardProps {
	image: string
	name: string
	content: string
	// rating: number
	bgColor?: string
	textColor?: string
	className?: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
	image,
	name,
	content,
	// rating,
	bgColor = "bg-gray-800",
	textColor = "text-white",
	className = ""
}) => {
	return (
		<div
			className={twMerge(
				`rounded-lg shadow-md px-6 py-6 ${bgColor} ${textColor} max-w-[280px] min-h-[320px]`,
				className
			)}
		>
			<Image src={image} alt={name} width={140} height={97} className="mb-4" />
			<div className="w-full min-h-[140px] flex flex-col justify-between">
				<div>
					<h3 className="font-semibold text-lg">{name}</h3>
					<p className="text-sm mt-1 mb-3">{content}</p>
				</div>
				{/* <div className="flex gap-1 ">
					{Array.from({ length: 5 }).map((_, idx) => (
						<Star
							key={idx}
							className={`w-4 h-4 ${idx < rating ? starColor : "text-gray-400"}`}
							fill={idx < rating ? "currentColor" : "none"}
						/>
					))}
				</div> */}
			</div>
		</div>
	)
}
