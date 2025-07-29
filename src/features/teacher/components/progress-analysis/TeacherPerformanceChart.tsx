"use client"

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
	{ month: "Jan", hours: 10 },
	{ month: "Feb", hours: 70 },
	{ month: "Mar", hours: 90 },
	{ month: "Apr", hours: 10 },
	{ month: "May", hours: 20 },
	{ month: "Jun", hours: 40 },
	{ month: "Jul", hours: 100 },
	{ month: "Aug", hours: 50 },
	{ month: "Sep", hours: 60 },
	{ month: "Oct", hours: 60 },
	{ month: "Nov", hours: 30 },
	{ month: "Dec", hours: 80 }
]

const chartConfig = {
	hours: {
		label: "Teaching Hours",
		color: "hsl(217, 91%, 60%)"
	}
}

export default function TeacherPerformanceChart() {
	return (
		<div className="w-full max-w-5xl max-h-[510px] mx-auto p-6 bg-white">
			<ChartContainer config={chartConfig} className="h-[410px] w-full ">
				<BarChart accessibilityLayer data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
					<XAxis
						dataKey="month"
						tickLine={false}
						tickMargin={10}
						axisLine={true}
						className="text-sm text-gray-600"
					/>
					<YAxis
						tickLine={false}
						axisLine={true}
						tickMargin={10}
						domain={[0, 100]}
						ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
						tickFormatter={(value) => `${value}hr`}
						className="text-sm text-gray-600"
					/>
					<ChartTooltip
						cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
						content={
							<ChartTooltipContent
								formatter={(value, name) => (
									<div className="flex items-center gap-2">
										<div className="w-3 h-3 bg-blue-500 rounded-sm" />
										<span className="font-medium">
											{value} {name}
										</span>
									</div>
								)}
								labelFormatter={(label) => `${label}`}
							/>
						}
					/>
					<Bar
						dataKey="hours"
						fill="var(--color-hours)"
						radius={[2, 2, 0, 0]}
						className="hover:opacity-80 transition-opacity"
					/>
				</BarChart>
			</ChartContainer>

			<div className="mt-6 p-4 bg-gray-50 rounded-lg border">
				<p className="text-sm text-gray-700">
					<span className="font-semibold">Comments:</span> Your highest teaching
					time was in July and your lowest teaching time was in January and
					April.
				</p>
			</div>
		</div>
	)
}
