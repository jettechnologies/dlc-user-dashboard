import { Button } from "@/components/ui/button"
import Link from "next/link"

export const QuickActions = () => {
	return (
		<div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200">
			<h3 className="text-lg  font-semibold text-gray-900 mb-4">
				Quick Actions
			</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Link href="/teacher/schedule-class" className="w-full">
					<Button className="bg-light-yellow hover:bg-light-yellow text-black font-medium py-3 h-auto w-full">
						Schedule Class
					</Button>
				</Link>
				<Button className="bg-dlc-blue-200 hover:bg-dlc-blue-200 text-white font-medium py-3 h-auto">
					Set Availability
				</Button>
			</div>
		</div>
	)
}
