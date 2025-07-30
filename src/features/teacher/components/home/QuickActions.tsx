import { Button } from "@/components/ui/button"
import { useAuthState } from "@/stores"
import { TeacherProfile } from "@/types/response-type"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const QuickActions = () => {
	const { userProfile } = useAuthState()
	const teacherProfile = userProfile as TeacherProfile
	const router = useRouter()

	const handleScheduleClass = () => {
		const isApproved = teacherProfile.isApproved

		if (isApproved) {
			router.push("/teacher/schedule-class")
		} else {
			toast.warning("You need to be approved to schedule a class")
		}
	}

	return (
		<div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200">
			<h3 className="text-lg  font-semibold text-gray-900 mb-4">
				Quick Actions
			</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{/* <Link href="/teacher/schedule-class" className="w-full"> */}
				<Button
					className="bg-light-yellow hover:bg-light-yellow text-black font-medium py-3 h-auto w-full"
					onClick={handleScheduleClass}
				>
					Schedule Class
				</Button>
				{/* </Link> */}
				<Button className="bg-dlc-blue-200 hover:bg-dlc-blue-200 text-white font-medium py-3 h-auto">
					Set Availability
				</Button>
			</div>
		</div>
	)
}
