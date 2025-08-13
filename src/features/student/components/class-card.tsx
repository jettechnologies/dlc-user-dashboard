"use client"

import StarRating from "./StarRating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useState } from "react"

export type ClassStatus = "Ongoing" | "Not_started"

export interface ClassCardData {
	id: string
	title: string
	instructor: string
	rating: number
	time: string
	status: ClassStatus
	badge: string
	students: string[]
}

interface ClassCardProps extends ClassCardData {
	handleClick?: (id: string) => void
	isLoading?: boolean
	showJoinButton?: boolean
}

export function ClassCard({
	id,
	title,
	instructor,
	rating,
	time,
	status,
	badge,
	handleClick,
	students,
	showJoinButton = true,
	isLoading
}: ClassCardProps) {
	const [activeId, setActiveId] = useState("")
	return (
		<Card className="min-w-[305px] bg-dlc-blue-200 text-white border-0 h-[192px]">
			<CardContent className="space-y-4">
				<div className="flex items-center justify-between">
					<Badge>{badge}</Badge>
					<div className="flex items-center gap-2">
						<Badge
							variant={status === "Ongoing" ? "default" : "secondary"}
							className={`${status === "Ongoing" ? "bg-orange-500" : "bg-gray-500 text-white"} rounded-full`}
						>
							{status.replaceAll("_", " ")}
						</Badge>
						<span className="text-xs">{time}</span>
					</div>
				</div>

				<h3 className="font-medium text-xs font-poppins">{title}</h3>

				<div className="flex items-center gap-2">
					<Avatar className="size-5">
						<AvatarImage src="/icons/profile-icon.svg" />
						<AvatarFallback>DP</AvatarFallback>
					</Avatar>
					<span className="text-xs">{instructor}</span>
					<div className="flex items-center gap-1">
						<StarRating rating={4} />
						<span className="text-sm">{rating}</span>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex -space-x-2">
						{students.map((student, index) => (
							<Avatar key={index} className="size-8 border-2 border-white">
								<AvatarImage src={"/icons/profile-icon.svg"} />
								<AvatarFallback>S{index + 1}</AvatarFallback>
							</Avatar>
						))}
						<div className="size-5 z-20 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600">
							+2
						</div>
					</div>

					{showJoinButton ? (
						<Button
							variant={status === "Ongoing" ? "secondary" : "outline"}
							disabled={isLoading && activeId === id}
							size="sm"
							onClick={() => {
								handleClick?.(id)
								setActiveId(id)
							}}
							// className={`${
							// 	status === "Ongoing"
							// 		? "bg-yellow-500 text-black hover:bg-yellow-600"
							// 		: "bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
							// } rounded-full text-xs`}
							className={`${
								status === "Ongoing"
									? "bg-yellow-500 text-black hover:bg-yellow-600 shadow-lg shadow-yellow-400 animate-pulse-glow"
									: "bg-transparent border border-white text-white hover:bg-white hover:text-blue-600"
							} rounded-full text-xs`}
						>
							{isLoading && activeId === id ? (
								"Loading..."
							) : status === "Ongoing" ? (
								"Join the class"
							) : (
								<>
									<Plus className="h-4 w-4 mr-1" />
									Add class
								</>
							)}
						</Button>
					) : null}
				</div>
			</CardContent>
		</Card>
	)
}
