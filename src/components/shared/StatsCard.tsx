import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

export interface StatsCardProps {
	title: string
	value: string
	change?: string
	icon: LucideIcon
	iconBg: string
	subtitle?: string
	description?: string
}

export function StatsCard({
	title,
	value,
	change,
	icon: Icon,
	iconBg,
	subtitle,
	description
}: StatsCardProps) {
	return (
		<Card className="relative bg-white border-0 shadow-sm">
			<CardContent className="flex flex-col">
				<div
					className={`absolute -top-3 -left-2 p-3 rounded-full w-fit ${iconBg}`}
				>
					<Icon className="h-6 w-6 text-white" />
				</div>
				<div className="space-y-2 flex flex-col items-center">
					<h3 className="text-3xl font-bold text-black">{value}</h3>
					<p className="text-sm font-medium text-black">{title}</p>
					<p className="text-xs text-gray-500">{change}</p>
					{subtitle && (
						<div className="text-xs text-gray-500 font-light">{subtitle}</div>
					)}
					{description && (
						<div className="text-xs text-green-600 font-light">
							{description}
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
