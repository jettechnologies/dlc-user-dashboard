"use client"

import { AllFiles } from "./all-files"
import { RecentFiles } from "./recent-files"
import type { FileItem, FileManagerProps } from "@/types/index"
import { useState } from "react"

export default function FileManager({
	recentFiles = [],
	allFiles = [],
	onSearch,
	onSort,
	onToggleFavorite,
	onDelete,
	onCancelDownload
}: FileManagerProps) {
	const [files, setFiles] = useState<FileItem[]>(allFiles)

	const handleToggleFavorite = (fileId: string) => {
		setFiles((prev) =>
			prev.map((file) =>
				file.id === fileId ? { ...file, isFavorite: !file.isFavorite } : file
			)
		)
		onToggleFavorite?.(fileId)
	}

	const handleDelete = (fileId: string) => {
		setFiles((prev) => prev.filter((file) => file.id !== fileId))
		onDelete?.(fileId)
	}

	const handleSearch = (query: string) => {
		if (query.trim() === "") {
			setFiles(allFiles)
		} else {
			const filtered = allFiles.filter(
				(file) =>
					file.title.toLowerCase().includes(query.toLowerCase()) ||
					file.author.name.toLowerCase().includes(query.toLowerCase())
			)
			setFiles(filtered)
		}
		onSearch?.(query)
	}

	const handleSort = (sortBy: string) => {
		const sorted = [...files].sort((a, b) => {
			switch (sortBy) {
				case "name":
					return a.title.localeCompare(b.title)
				case "size":
					return a.sizeInBytes - b.sizeInBytes
				case "author":
					return a.author.name.localeCompare(b.author.name)
				default:
					return 0
			}
		})
		setFiles(sorted)
		onSort?.(sortBy)
	}

	return (
		<div className="min-h-screen max-w-7xl p-6 space-y-8">
			<RecentFiles files={recentFiles} onCancelDownload={onCancelDownload} />

			<AllFiles
				files={files}
				onSearch={handleSearch}
				onSort={handleSort}
				onToggleFavorite={handleToggleFavorite}
				onDelete={handleDelete}
			/>
		</div>
	)
}
