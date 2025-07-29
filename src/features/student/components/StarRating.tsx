import React from "react"

export default function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex gap-0.5">
			{[...Array(5)].map((_, i) => (
				<span
					key={i}
					className={`text-xs ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
				>
					★
				</span>
			))}
		</div>
	)
}
