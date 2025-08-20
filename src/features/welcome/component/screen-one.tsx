import { DescriptionList } from "./description-list"
import { Button } from "@/components/ui"
import { useIsTabletOrMobile } from "@/config"
import { useUiComponentStore } from "@/utils/lib/query-store"
import Image from "next/image"
import { useRouter } from "next/navigation"

const descriptionsList = [
	{
		title: "Dashboard",
		description:
			"On your dashboard, you’ll see upcoming classes, hours spent, activities, registered and available classes, plus your most recent enrollments.",
		icon: "welcome-dashboard-icon"
	},
	{
		title: "Subscription",
		description:
			"The subscription section on the platform shows you your current plan and options to upgrade. As a user, you can only upgrade and not downgrade a subscription. Your subscription gives you access to the platform.",
		icon: "welcome-subscription-icon"
	}
]

export const ScreenOne = () => {
	const isTabletOrMobile = useIsTabletOrMobile()
	const router = useRouter()
	const { updateUiStore } = useUiComponentStore()

	const handleSkip = () => {
		router.push("/student")
	}
	const handleNext = () => {
		updateUiStore("screen-two")
	}

	return (
		<div className="w-full max-w-[1240px] h-full  lg:max-h-screen font-poppins grid place-content-center px-4 md:px-0">
			<h2 className="text-[1.5rem] md:text-4xl font-semibold text-black text-center mb-4 [max-width:1600px]:mb-8">
				Welcome to Digital Learning Circle
			</h2>
			<div className="flex justify-between items-center flex-col md:flex-row mb-5 [max-width:1600px]:mb-10">
				<Image
					src={
						isTabletOrMobile
							? "/images/welcome-dlc-image-one-sm.png"
							: "/images/welcome-dlc-img-one.png"
					}
					alt="welcome screen one"
					width={isTabletOrMobile ? 300 : 500}
					height={isTabletOrMobile ? 200 : 400}
				/>
				<div className="w-full md:flex-1  space-y-4">
					<h4 className="text-lg md:text-2xl font-medium text-black">
						Important things to note on the platform
					</h4>
					<div className="flex flex-col gap-y-4">
						{descriptionsList.map((description, index) => (
							<DescriptionList
								key={index}
								title={description.title}
								description={description.description}
								icon={description.icon}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="w-full max-w-[500px] flex justify-between mx-auto gap-x-4">
				<Button
					className="w-[150px] md:w-[200px] h-[56px] rounded-[100px] bg-transparent hover:bg-transparent border-2 border-dlc-blue text-lg lg:text-2xl text-dlc-blue font-medium font-poppins"
					onClick={handleSkip}
				>
					Skip
				</Button>

				<Button
					className="w-[150px] md:w-[200px] h-[56px] rounded-[100px] bg-dlc-blue hover:bg-dlc-blue text-lg lg:text-2xl text-white font-medium font-poppins"
					onClick={handleNext}
				>
					Next
				</Button>
			</div>
		</div>
	)
}
