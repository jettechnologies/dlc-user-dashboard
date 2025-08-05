import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
	title: string
	value: string
	change?: string
	icon: LucideIcon
	iconColor: string
}

export function StatsCard({
	title,
	value,
	change,
	icon: Icon,
	iconColor
}: StatsCardProps) {
	return (
		<Card className="relative bg-white border-0 shadow-sm">
			<CardContent className="flex flex-col">
				<div
					className={`absolute -top-3 -left-2 p-3 rounded-full w-fit ${iconColor}`}
				>
					<Icon className="h-6 w-6 text-white" />
				</div>
				<div className="space-y-2 flex flex-col items-center">
					<h3 className="text-3xl font-bold text-gray-900">{value}</h3>
					<p className="text-sm font-medium text-gray-900">{title}</p>
					<p className="text-xs text-gray-500">{change}</p>
				</div>
			</CardContent>
		</Card>
	)
}
