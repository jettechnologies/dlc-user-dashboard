import PageHeaderText from "./PageHeader"
import { FileCard } from "./file-card"
import type { FileItem } from "@/types/index"

interface RecentFilesProps {
	files: FileItem[]
	onCancelDownload?: (fileId: string) => void
}

export function RecentFiles({ files, onCancelDownload }: RecentFilesProps) {
	return (
		<div className="space-y-4">
			<PageHeaderText>Recent</PageHeaderText>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{files.map((file) => (
					<FileCard
						key={file.id}
						file={file}
						variant="recent"
						onCancelDownload={onCancelDownload}
					/>
				))}
			</div>
		</div>
	)
}
