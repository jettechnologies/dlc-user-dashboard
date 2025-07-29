"use client"

import FileManager from "../../components/file-manager"
import { FileItem } from "@/types/index"

const mockRecentFiles: FileItem[] = [
	{
		id: "1",
		title: "Document title.mp4",
		size: "735KB",
		sizeInBytes: 735 * 1024,
		type: "pdf",
		author: {
			name: "Esther Peters",
			avatar: "/placeholder.svg?height=32&width=32"
		},
		isFavorite: false,
		downloadProgress: {
			downloaded: 453 * 1024,
			total: 735 * 1024,
			isDownloading: true
		}
	},
	{
		id: "2",
		title: "Document title.mp4",
		size: "735KB",
		sizeInBytes: 735 * 1024,
		type: "pdf",
		author: {
			name: "Esther Peters",
			avatar: "/placeholder.svg?height=32&width=32"
		},
		isFavorite: false,
		downloadProgress: {
			downloaded: 453 * 1024,
			total: 735 * 1024,
			isDownloading: true
		}
	},
	{
		id: "3",
		title: "Document title.mp4",
		size: "735KB",
		sizeInBytes: 735 * 1024,
		type: "pdf",
		author: {
			name: "Esther Peters",
			avatar: "/placeholder.svg?height=32&width=32"
		},
		isFavorite: false,
		downloadProgress: {
			downloaded: 453 * 1024,
			total: 735 * 1024,
			isDownloading: true
		}
	}
]

const mockAllFiles: FileItem[] = [
	{
		id: "6",
		title: "Comprehension on my vacation - English.mp4",
		size: "235KB",
		sizeInBytes: 235 * 1024,
		type: "pdf",
		author: {
			name: "Esther Peters",
			avatar: "/placeholder.svg?height=32&width=32"
		},
		isFavorite: true
	},
	{
		id: "7",
		title: "Maths on my vacation - English.mp4",
		size: "35KB",
		sizeInBytes: 35 * 1024,
		type: "pdf",
		author: {
			name: "Esther Peters",
			avatar: "/placeholder.svg?height=32&width=32"
		},
		isFavorite: true
	},
	{
		id: "8",
		title: "Comprehension on my vacation - English.mp4",
		size: "735KB",
		sizeInBytes: 735 * 1024,
		type: "pdf",
		author: {
			name: "Esther Peters",
			avatar: "/placeholder.svg?height=32&width=32"
		},
		isFavorite: true
	},
	{
		id: "9",
		title: "Comprehension on my vacation - English.mp4",
		size: "735KB",
		sizeInBytes: 735 * 1024,
		type: "pdf",
		author: {
			name: "Esther Peters",
			avatar: "/placeholder.svg?height=32&width=32"
		},
		isFavorite: false
	}
]

export const Resources = () => {
	const handleSearch = (query: string) => {
		console.log("Search:", query)
	}

	const handleSort = (sortBy: string) => {
		console.log("Sort by:", sortBy)
	}

	const handleToggleFavorite = (fileId: string) => {
		console.log("Toggle favorite:", fileId)
	}

	const handleDelete = (fileId: string) => {
		console.log("Delete file:", fileId)
	}

	const handleCancelDownload = (fileId: string) => {
		console.log("Cancel download:", fileId)
	}

	return (
		<FileManager
			recentFiles={mockRecentFiles}
			allFiles={mockAllFiles}
			onSearch={handleSearch}
			onSort={handleSort}
			onToggleFavorite={handleToggleFavorite}
			onDelete={handleDelete}
			onCancelDownload={handleCancelDownload}
		/>
	)
}
