"use client"

import { Card, CardContent } from "@/components/ui/card"
// import { Pagination } from "@/components/ui/pagination"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"
import { SubscriptionHistoryResponse } from "@/types/response-type"
// import { FaNairaSign } from "react-icons/fa6"
import { CurrencyNgn } from "@phosphor-icons/react"
import React from "react"
import { useWindowSize } from "react-use"

// Assume you have a pagination component

function createData(status: string, price: string, expiryDate: string) {
	return { status, price, expiryDate }
}

function transformSubscriptions(subscriptions: SubscriptionHistoryResponse) {
	return subscriptions.map((subscription) =>
		createData(
			subscription.status,
			subscription.plan.price,
			new Date(subscription.expiryDate).toLocaleDateString("en-US", {
				day: "numeric",
				month: "long",
				year: "numeric"
			}) + "."
		)
	)
}

interface SubscriptionTableProps {
	subscriptionHistory: SubscriptionHistoryResponse
}

export function SubscriptionHistoryTable({
	subscriptionHistory
}: SubscriptionTableProps) {
	const [page, setPage] = React.useState(1)
	const totalPages = 10

	const { width } = useWindowSize()
	const isMobile = width < 640 // Tailwind sm breakpoint

	const transformedSubscriptions = transformSubscriptions(subscriptionHistory)
	const rows = transformedSubscriptions.slice((page - 1) * 10, page * 10)

	const handleChange = (newPage: number) => {
		setPage(newPage)
	}

	console.log(handleChange, "handleChange")
	const MobileView = () => (
		<div className="w-full">
			{rows.map((row, index) => (
				<Card key={index} className="mb-4 border border-gray-200 shadow-none">
					<CardContent className="space-y-3">
						<div className="text-sm font-medium capitalize">{row.status}</div>
						<div className="flex justify-between text-sm text-gray-500">
							<span>Amount:</span>
							<div className="flex items-center gap-1 text-gray-700">
								<CurrencyNgn size={20} className="text-base" />
								<span>{row.price}</span>
							</div>
						</div>
						<div className="flex justify-between text-sm text-gray-500">
							<span>Expiry Date:</span>
							<span className="text-gray-700">{row.expiryDate}</span>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)

	return (
		<div className="w-full rounded border border-gray-300 p-4 overflow-auto">
			{isMobile ? (
				<MobileView />
			) : (
				<Table className="min-w-[600px]">
					<TableHeader>
						<TableRow>
							<TableHead className="w-1/3">Payment Status</TableHead>
							<TableHead className="w-1/3">Price</TableHead>
							<TableHead className="w-1/3">Expired Date</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow key={index}>
								<TableCell className="capitalize">{row.status}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<CurrencyNgn size={20} className="text-gray-500 text-lg" />
										{row.price}
									</div>
								</TableCell>
								<TableCell>{row.expiryDate}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}

			{subscriptionHistory.length > 10 && (
				<div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<span>Page</span>
						<div className="flex items-center border border-gray-300 px-2 py-1 rounded">
							<span>{page}</span>
						</div>
						<span>of {totalPages}</span>
					</div>
					{/* <Pagination
						page={page}
						totalPages={totalPages}
						onPageChange={handleChange}
					/> */}
				</div>
			)}
		</div>
	)
}
