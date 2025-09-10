import { EnrolledClassCard } from "./enrolled-class-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TransformedLecture } from "@/utils/constants"

interface EnrolledClassCardProps {
	classes: TransformedLecture[]
}

export const EnrolledClasses = ({ classes }: EnrolledClassCardProps) => {
	return (
		<Card className="bg-white border-0 shadow-sm">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-lg font-semibold">
					Recent enrolled classes
				</CardTitle>
				{/* <Button variant="ghost" size="sm" className="text-blue-600">
					View All
				</Button> */}
			</CardHeader>
			<CardContent className="space-y-4 max-h-[250px] overflow-y-auto">
				{classes.length > 0 ? (
					classes.map((cls, index) => (
						<EnrolledClassCard key={index} {...cls} />
					))
				) : (
					<div className="w-full h-[70px] grid place-items-center">
						<p className="text-sm text-gray-500">No enrolled classes</p>
					</div>
				)}
			</CardContent>
		</Card>
	)
}
