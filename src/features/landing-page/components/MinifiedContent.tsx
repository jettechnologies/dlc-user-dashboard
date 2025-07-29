"use client"

import { useState, useRef, useEffect } from "react"

export const MinifiedContent = ({
	title,
	children
}: {
	title?: string
	children: React.ReactNode
}) => {
	const [expanded, setExpanded] = useState(false)
	const [showReadMore, setShowReadMore] = useState(false)
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (contentRef.current) {
			// Check if there are multiple child nodes
			const hasMultipleChildren = contentRef.current.children.length > 1

			// Get word count
			const textContent = contentRef.current.textContent || ""
			const wordCount = textContent.trim().split(/\s+/).length

			// Show button if either condition is met
			setShowReadMore(wordCount > 250 || hasMultipleChildren)
		}
	}, [children])

	return (
		<div className="mb-8">
			<h2 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl">
				{title}
			</h2>
			<div
				ref={contentRef}
				className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-full" : "max-h-32"}`}
			>
				{children}
			</div>
			{showReadMore && (
				<button
					onClick={() => setExpanded(!expanded)}
					className="mt-2 flex items-center font-medium text-blue-600 hover:text-blue-800"
				>
					{expanded ? "Read Less" : "Read More"}
					<svg
						className={`ml-1 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			)}
		</div>
	)
}
