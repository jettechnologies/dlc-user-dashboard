"use client"

import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import React from "react"

export interface PaginationProps {
	currentPage: number
	totalCount: number
	itemsPerPage: number
	onPageChange: (page: number) => void
}

export const Pagination = ({
	currentPage,
	totalCount,
	itemsPerPage,
	onPageChange
}: PaginationProps) => {
	const totalPages = Math.ceil(totalCount / itemsPerPage)

	const handlePageClick = (newPageIndex: number) => {
		if (newPageIndex >= 1 && newPageIndex <= totalPages) {
			onPageChange(newPageIndex)
		}
	}

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / 5) * 5
		return new Array(5)
			.fill(0)
			.map((_, idx) => start + idx + 1)
			.filter((pageNum) => pageNum <= totalPages)
	}

	return (
		<div className="flex w-full flex-col gap-y-4 px-6 py-2">
			<div className="flex w-full items-center justify-between gap-4">
				{/* Previous Button */}
				<div
					onClick={() => handlePageClick(currentPage - 1)}
					className={`flex w-[106px] cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-200 px-3 py-2 ${
						currentPage <= 1 ? "cursor-not-allowed opacity-50" : ""
					}`}
				>
					<Minus size={16} className="text-muted-foreground" />

					<p className="font-medium font-poppins text-black">Previous</p>
				</div>

				{/* First Page & Left Ellipsis */}
				{currentPage > 3 && (
					<>
						<Button
							variant="outline"
							size="sm"
							onClick={() => handlePageClick(1)}
						>
							1
						</Button>
						{currentPage > 4 && <span className="text-sm">...</span>}
					</>
				)}

				{/* Page Numbers */}
				<div className="flex items-center gap-2">
					{getPaginationGroup().map((item) => (
						<Button
							key={item}
							size="sm"
							onClick={() => handlePageClick(item)}
							variant={item === currentPage ? "secondary" : "ghost"}
						>
							{item}
						</Button>
					))}
				</div>

				{/* Right Ellipsis & Last Page */}
				{totalPages > currentPage + 2 && (
					<>
						{totalPages > currentPage + 3 && (
							<span className="text-sm">...</span>
						)}
						<Button
							variant="ghost"
							size="sm"
							onClick={() => handlePageClick(totalPages)}
						>
							{totalPages}
						</Button>
					</>
				)}

				{/* Next Button */}
				<div
					onClick={() => handlePageClick(currentPage + 1)}
					className={`flex w-[106px] cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-200 px-3 py-2 ${
						currentPage >= totalPages ? "cursor-not-allowed opacity-50" : ""
					}`}
				>
					<p className="font-medium font-poppins text-black">Next</p>

					<Plus size={20} className="text-muted-foreground" />
				</div>
			</div>
		</div>
	)
}
