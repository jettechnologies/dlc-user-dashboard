"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { SubscriptionCardProps } from "@/types/index"
import { cn } from "@/utils/lib/utils"
import { Check } from "lucide-react"

export function SubscriptionCard({ plan, className }: SubscriptionCardProps) {
	return (
		<Card
			className={cn(
				"w-full max-w-sm bg-gradient-to-b from-yellow-400 to-yellow-500 border-2 border-yellow-600 text-gray-900 font-poppins",
				className
			)}
		>
			<CardHeader className="pb-4">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-bold">
						{plan.name}{" "}
						<span className="text-sm font-normal">
							({plan.currency}) {plan.type}
						</span>
					</h3>
				</div>
				<hr className="border-yellow-600/30" />
			</CardHeader>

			<CardContent className="space-y-6">
				<div className="flex items-center justify-between">
					<div className="text-4xl font-bold text-gray-900">{plan.price}</div>
					{plan.isCurrentPlan && (
						<Badge
							variant="secondary"
							className="bg-white text-gray-900 hover:bg-white/90"
						>
							Current Plan
						</Badge>
					)}
				</div>

				<div className="space-y-3">
					{plan.features.map((feature, index) => (
						<div key={index} className="flex items-center gap-3">
							<Check className="w-3 h-3 text-yellow-600" color="white" />
							<p className="text-[11px] text-black leading-relaxed">
								{feature}
							</p>
						</div>
					))}
				</div>
			</CardContent>

			<CardFooter className="pt-6">
				<Button
					onClick={plan.onSubscribe}
					className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 rounded-lg"
					disabled={plan.isCurrentPlan}
				>
					{plan.isCurrentPlan ? "Current Plan" : plan.buttonText || "Subscribe"}
				</Button>
			</CardFooter>
		</Card>
	)
}
