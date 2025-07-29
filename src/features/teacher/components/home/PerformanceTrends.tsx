"use client"

import { Button } from "@/components/ui/button"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
import { ChevronDown } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const chartData = [
	{ month: "Jan", thisMonth: 65, downloads: 25, currentClass: 15 },
	{ month: "Feb", thisMonth: 45, downloads: 35, currentClass: 20 },
	{ month: "Mar", thisMonth: 85, downloads: 15, currentClass: 25 },
	{ month: "Apr", thisMonth: 70, downloads: 45, currentClass: 18 },
	{ month: "May", thisMonth: 55, downloads: 30, currentClass: 22 },
	{ month: "Jun", thisMonth: 90, downloads: 20, currentClass: 28 },
	{ month: "Jul", thisMonth: 40, downloads: 50, currentClass: 16 },
	{ month: "Aug", thisMonth: 75, downloads: 35, currentClass: 24 },
	{ month: "Sep", thisMonth: 60, downloads: 40, currentClass: 20 },
	{ month: "Oct", thisMonth: 80, downloads: 25, currentClass: 26 },
	{ month: "Nov", thisMonth: 50, downloads: 45, currentClass: 18 },
	{ month: "Dec", thisMonth: 70, downloads: 30, currentClass: 22 }
]

const chartConfig = {
	thisMonth: {
		label: "This month",
		color: "hsl(217, 91%, 60%)" // blue-500
	},
	downloads: {
		label: "Downloads",
		color: "hsl(271, 91%, 65%)" // purple-500
	},
	currentClass: {
		label: "Current class",
		color: "hsl(330, 81%, 60%)" // pink-500
	}
} satisfies ChartConfig

export function PerformanceTrend() {
	return (
		<div className="bg-white rounded-lg p-6 shadow-sm">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg font-semibold text-gray-900">
					Performance Trend
				</h2>
				<Button variant="outline" size="sm">
					View <ChevronDown className="ml-2 h-4 w-4" />
				</Button>
			</div>

			<div className="space-y-4">
				<div className="flex items-center gap-6 text-sm">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-blue-500 rounded"></div>
						<span>This month</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-purple-500 rounded"></div>
						<span>Downloads</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-pink-500 rounded"></div>
						<span>Current class</span>
					</div>
				</div>

				<ChartContainer config={chartConfig} className="h-64 w-full">
					<BarChart
						data={chartData}
						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					>
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							className="text-xs fill-gray-500"
						/>
						<YAxis hide />
						<ChartTooltip content={<ChartTooltipContent />} />
						<Bar
							dataKey="thisMonth"
							fill="var(--color-thisMonth)"
							radius={[2, 2, 0, 0]}
							stackId="stack"
						/>
						<Bar
							dataKey="downloads"
							fill="var(--color-downloads)"
							radius={[0, 0, 0, 0]}
							stackId="stack"
						/>
						<Bar
							dataKey="currentClass"
							fill="var(--color-currentClass)"
							radius={[2, 2, 0, 0]}
							stackId="stack"
						/>
					</BarChart>
				</ChartContainer>
			</div>
		</div>
	)
}
