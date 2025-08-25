import { DescriptionList } from "./description-list"
import { Button } from "@/components/ui"
import { useIsTabletOrMobile } from "@/config"
import { useUiComponentStore } from "@/utils/lib/query-store"
import Image from "next/image"
import { useRouter } from "next/navigation"

const descriptionsList = [
	{
		title: "Adding classes to timetable",
		description:
			"As a student, you can’t have two clashing classes with the same date and time on your timetable. You are only allowed to pick and attend one class for a specific date and time. No clashing classes is allowed on the platform.",
		icon: "welcome-adding-classes-icon"
	},
	{
		title: "Token Usage",
		description:
			"A compensation token will be sent to the student phone number used for registration and the token can only be used once. User will input token code when they want to attend an on-demand class. Note that the token will be tantamount to the initial amount paid for on-demand and can only be used for the same number of hours",
		icon: "welcome-token-usage-icon"
	}
]

export const ScreenThree = () => {
	const isTabletOrMobile = useIsTabletOrMobile()
	const router = useRouter()
	const { updateUiStore } = useUiComponentStore()

	const handleBack = () => {
		updateUiStore("screen-one")
	}
	const handleContinue = () => {
		router.push("/student")
		updateUiStore("")
	}

	return (
		<div className="w-full max-w-[1240px] lg:max-h-screen font-poppins grid place-content-center px-4 md:px-0">
			<h2 className="text-[1.5rem] md:text-4xl font-semibold text-black text-center  mb-4 [max-width:1600px]:mb-8">
				Welcome to Digital Learning Circle
			</h2>
			<div className="flex justify-between items-center flex-col md:flex-row  mb-5 [max-width:1600px]:mb-10">
				<Image
					src={
						isTabletOrMobile
							? "/images/welcome-dlc-img-three-sm.png"
							: "/images/welcome-dlc-img-three.png"
					}
					alt="welcome screen three"
					width={isTabletOrMobile ? 300 : 500}
					height={isTabletOrMobile ? 200 : 400}
					className=""
				/>
				<div className="w-full md:flex-1  space-y-4 ">
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
			<div className="w-full max-w-[500px] flex justify-between mx-auto ">
				<Button
					className="w-[120px] md:w-[200px] h-[56px] rounded-[100px] bg-transparent hover:bg-transparent border-2 border-dlc-blue text-lg lg:text-2xl text-dlc-blue font-medium font-poppins"
					onClick={handleBack}
				>
					Back
				</Button>

				<Button
					className="w-[120px] md:w-[200px] h-[56px] rounded-[100px] bg-dlc-blue hover:bg-dlc-blue text-lg lg:text-2xl text-white font-medium font-poppins"
					onClick={handleContinue}
				>
					Continue
				</Button>
			</div>
		</div>
	)
}
