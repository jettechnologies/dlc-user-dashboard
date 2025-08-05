"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

export const description = "A bar chart"

const chartData: { month: string; desktop: number }[] = []

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#226CE0"
	}
} satisfies ChartConfig

export function HoursChart() {
	const hasData = chartData.length > 0

	return (
		<Card>
			<CardHeader>
				<CardTitle>Hours Spent</CardTitle>
				{/* <CardDescription>January - June 2024</CardDescription> */}
			</CardHeader>
			<CardContent>
				{hasData ? (
					<ChartContainer config={chartConfig}>
						<BarChart accessibilityLayer data={chartData}>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="month"
								tickLine={false}
								tickMargin={4}
								axisLine={false}
								tickFormatter={(value) => value.slice(0, 3)}
							/>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
						</BarChart>
					</ChartContainer>
				) : (
					<div className="h-[200px] flex flex-col items-center justify-center text-center text-muted-foreground">
						<p className="text-sm font-medium">No data available</p>
						{/* <p className="text-xs">Chart data is not yet populated</p> */}
					</div>
				)}
			</CardContent>
		</Card>
	)
}

// "use client"

// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle
// } from "@/components/ui/card"
// import {
// 	ChartConfig,
// 	ChartContainer,
// 	ChartTooltip,
// 	ChartTooltipContent
// } from "@/components/ui/chart"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

// export const description = "A bar chart"

// const chartData = [
// 	{ month: "January", desktop: 186 },
// 	{ month: "February", desktop: 305 },
// 	{ month: "March", desktop: 237 },
// 	{ month: "April", desktop: 73 },
// 	{ month: "May", desktop: 209 },
// 	{ month: "June", desktop: 214 },
// 	{ month: "July", desktop: 198 },
// 	{ month: "August", desktop: 245 },
// 	{ month: "September", desktop: 180 },
// 	{ month: "October", desktop: 276 },
// 	{ month: "November", desktop: 231 },
// 	{ month: "December", desktop: 199 }
// ]

// const chartConfig = {
// 	desktop: {
// 		label: "Desktop",
// 		color: "#226CE0"
// 	}
// } satisfies ChartConfig

// export function HoursChart() {
// 	return (
// 		<Card>
// 			<CardHeader>
// 				<CardTitle>Bar Chart</CardTitle>
// 				<CardDescription>January - June 2024</CardDescription>
// 			</CardHeader>
// 			<CardContent>
// 				<ChartContainer config={chartConfig}>
// 					<BarChart accessibilityLayer data={chartData}>
// 						<CartesianGrid vertical={false} />
// 						<XAxis
// 							dataKey="month"
// 							tickLine={false}
// 							tickMargin={4}
// 							axisLine={false}
// 							tickFormatter={(value) => value.slice(0, 3)}
// 						/>
// 						<ChartTooltip
// 							cursor={false}
// 							content={<ChartTooltipContent hideLabel />}
// 						/>
// 						<Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
// 					</BarChart>
// 				</ChartContainer>
// 			</CardContent>
// 			{/* <CardFooter className="flex-col items-start gap-2 text-sm">
// 				<div className="flex gap-2 leading-none font-medium">
// 					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
// 				</div>
// 				<div className="text-muted-foreground leading-none">
// 					Showing total visitors for the last 6 months
// 				</div>
// 			</CardFooter> */}
// 		</Card>
// 	)
// }
