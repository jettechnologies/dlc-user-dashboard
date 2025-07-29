import { Button } from "@/components/ui/button"
import { FileText, Eye, Download } from "lucide-react"

interface DocumentCardProps {
	title: string
	subtitle: string
	time: string
}

export function DocumentCard({ title, subtitle, time }: DocumentCardProps) {
	return (
		<div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
			<div className="p-3 rounded-full bg-yellow-400">
				<FileText className="h-5 w-5 text-white" />
			</div>

			<div className="flex-1 min-w-0">
				<h3 className="font-medium text-gray-900">{title}</h3>
				<p className="text-sm text-gray-600">{subtitle}</p>
				<p className="text-xs text-gray-500">{time}</p>
			</div>

			<div className="flex gap-2">
				<Button variant="outline" size="sm">
					<Eye className="h-4 w-4" />
				</Button>
				<Button variant="outline" size="sm">
					<Download className="h-4 w-4" />
				</Button>
			</div>
		</div>
	)
}
