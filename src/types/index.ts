export interface ClassEvent {
	id: string
	subject: string
	startTime: string
	endTime: string
	day: string
	color: string
	backgroundColor: string
	description?: string
	location?: string
	instructor?: string
}

export interface FileItem {
	id: string
	title: string
	size: string
	sizeInBytes: number
	type: "pdf" | "mp4" | "doc"
	author: {
		name: string
		avatar: string
	}
	isFavorite: boolean
	downloadProgress?: {
		downloaded: number
		total: number
		isDownloading: boolean
	}
}

export interface FileManagerProps {
	recentFiles?: FileItem[]
	allFiles?: FileItem[]
	onSearch?: (query: string) => void
	onSort?: (sortBy: string) => void
	onToggleFavorite?: (fileId: string) => void
	onDelete?: (fileId: string) => void
	onCancelDownload?: (fileId: string) => void
}

export interface SubscriptionPlan {
	id: string
	name: string
	type: string
	price: string
	currency: string
	features: string[]
	isCurrentPlan?: boolean
	buttonText?: string
	onSubscribe?: () => void
}

export interface SubscriptionCardProps {
	plan: SubscriptionPlan
	className?: string
}
