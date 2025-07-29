import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

const resources = [
	{
		name: "English Phonetics",
		size: "8.5 MB",
		progress: 100
	},
	{
		name: "English Sounds",
		size: "578 KB",
		progress: 75
	},
	{
		name: "Fundamental English",
		size: "2.5 MB",
		progress: 45
	}
]

export function ResourcesList() {
	return (
		<Card className="bg-white border-0 shadow-sm max-h-fit">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Your Resources</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{resources.map((resource, index) => (
					<div key={index} className="flex items-center gap-3 py-3">
						<div className="p-2 bg-orange-100 rounded">
							<Image
								src="/icons/pdf-icon.svg"
								alt="pdf icon"
								width={30}
								height={30}
							/>
						</div>
						<div className="flex-1 space-y-1">
							<div className="flex items-center justify-between">
								<span className="font-normal text-sm">{resource.name}</span>
								<span className="text-xs text-gray-500">{resource.size}</span>
							</div>
							<Progress value={resource.progress} className="h-1" />
							{resource.progress < 100 && (
								<p className="text-xs text-gray-500">
									Downloading... {resource.progress}% complete
								</p>
							)}
						</div>
						<Button variant="ghost" size="sm" className="text-xs">
							downlaod
						</Button>
					</div>
				))}

				<div className="flex justify-center items-center">
					<Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
						see more
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
