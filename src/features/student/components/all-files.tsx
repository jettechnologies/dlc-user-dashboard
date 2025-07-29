"use client"

import PageHeaderText from "./PageHeader"
import { FileCard } from "./file-card"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import type { FileItem } from "@/types/index"
import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

interface AllFilesProps {
	files: FileItem[]
	onSearch?: (query: string) => void
	onSort?: (sortBy: string) => void
	onToggleFavorite?: (fileId: string) => void
	onDelete?: (fileId: string) => void
}

export function AllFiles({
	files,
	onSearch,
	onSort,
	onToggleFavorite,
	onDelete
}: AllFilesProps) {
	const [searchQuery, setSearchQuery] = useState("")

	const handleSearchChange = (value: string) => {
		setSearchQuery(value)
		onSearch?.(value)
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<PageHeaderText>All Files</PageHeaderText>

				<div className="flex items-center gap-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
						<Input
							placeholder="Search pdf"
							value={searchQuery}
							onChange={(e) => handleSearchChange(e.target.value)}
							className="pl-10 w-64 bg-white"
						/>
					</div>

					<div className="flex items-center gap-2 ">
						<span className="text-sm text-gray-700">Sort by</span>
						<Select onValueChange={onSort} defaultValue="date">
							<SelectTrigger className="w-32 bg-white">
								<SelectValue />
								<SlidersHorizontal className="w-4 h-4" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="date">Date</SelectItem>
								<SelectItem value="size">Size</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{files.map((file) => (
					<FileCard
						key={file.id}
						file={file}
						variant="grid"
						onToggleFavorite={onToggleFavorite}
						onDelete={onDelete}
					/>
				))}
			</div>
		</div>
	)
}
