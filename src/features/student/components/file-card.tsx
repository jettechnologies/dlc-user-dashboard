"use client"

import { DeleteModal } from "./delete-modal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { FileItem } from "@/types/index"
import { Heart, Trash2 } from "lucide-react"
import { useState } from "react"

interface FileCardProps {
	file: FileItem
	variant?: "recent" | "grid"
	onToggleFavorite?: (fileId: string) => void
	onDelete?: (fileId: string) => void
	onCancelDownload?: (fileId: string) => void
}

export function FileCard({
	file,
	variant = "grid",
	onToggleFavorite,
	onDelete,
	onCancelDownload
}: FileCardProps) {
	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const getFileIcon = () => (
		<div className="w-16 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
			PDF
		</div>
	)

	if (variant === "recent") {
		return (
			<Card className="w-full bg-white border border-gray-200">
				<CardContent className="p-4 space-y-3">
					<div className="text-sm font-medium text-gray-900 truncate">
						{file.title}
					</div>

					<div className="flex justify-center">{getFileIcon()}</div>

					<div className="text-center text-sm text-gray-600">{file.size}</div>

					{file.downloadProgress?.isDownloading && (
						<div className="space-y-2">
							<Progress
								value={
									(file.downloadProgress.downloaded /
										file.downloadProgress.total) *
									100
								}
								className="h-1"
							/>
							<div className="flex justify-between items-center text-[10px]">
								<span className="text-gray-600">
									Downloading{" "}
									{Math.round(file.downloadProgress.downloaded / 1024)}kB/
									{Math.round(file.downloadProgress.total / 1024)}kB
								</span>
								<Button
									variant="ghost"
									size="sm"
									className="text-red-500 hover:text-red-700 h-auto p-0"
									onClick={() => onCancelDownload?.(file.id)}
								>
									Cancel
								</Button>
							</div>
						</div>
					)}

					<div className="flex items-center gap-2">
						<Avatar className="w-6 h-6">
							<AvatarImage src={file.author.avatar || "/placeholder.svg"} />
							<AvatarFallback className="text-xs">
								{file.author.name
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<span className="text-sm text-gray-700">{file.author.name}</span>
					</div>
				</CardContent>
			</Card>
		)
	}

	return (
		<>
			<Card className="w-full bg-white border border-gray-200 relative group">
				<CardContent className="p-4 space-y-3">
					<div className="flex justify-between items-start">
						<Button
							variant="ghost"
							size="sm"
							className="absolute top-2 right-2 p-1 h-auto"
							onClick={() => onToggleFavorite?.(file.id)}
						>
							<Heart
								className={`w-4 h-4 ${
									file.isFavorite
										? "fill-red-500 text-red-500"
										: "text-gray-400 hover:text-red-500"
								}`}
							/>
						</Button>
					</div>

					<div className="flex justify-center">{getFileIcon()}</div>

					<div className="text-center text-sm text-gray-600">{file.size}</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2 flex-1 min-w-0">
							<Avatar className="w-6 h-6 flex-shrink-0">
								<AvatarImage src={file.author.avatar || "/placeholder.svg"} />
								<AvatarFallback className="text-xs">
									{file.author.name
										.split(" ")
										.map((n: string) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<span className="text-sm text-gray-700 truncate">
								{file.author.name}
							</span>
						</div>

						<Button
							variant="ghost"
							size="sm"
							className="p-1 h-auto opacity-0 group-hover:opacity-100 transition-opacity"
							onClick={() => setShowDeleteModal(true)}
						>
							<Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
						</Button>
					</div>

					<div className="text-sm text-gray-900 font-medium">{file.title}</div>
				</CardContent>
			</Card>

			<DeleteModal
				isOpen={showDeleteModal}
				onClose={() => setShowDeleteModal(false)}
				onConfirm={() => {
					onDelete?.(file.id)
					setShowDeleteModal(false)
				}}
				itemName={file.title}
			/>
		</>
	)
}
