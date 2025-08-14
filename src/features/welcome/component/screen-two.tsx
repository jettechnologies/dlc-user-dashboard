import { DescriptionList } from "./description-list"
import { Button } from "@/components/ui"
import { useIsTabletOrMobile } from "@/config"
import { useUiComponentStore } from "@/utils/lib/query-store"
import Image from "next/image"
import { useRouter } from "next/navigation"

const descriptionsList = [
	{
		title: "Cancelled classes",
		description:
			"As a student, after paying for an on-demand class and the teacher eventually cancels the class, you are compensated with a token that can be used to attend another on-demand class.",
		link: {
			text: "Terms and Conditions pply",
			href: "/terms"
		},
		icon: "welcome-classes-icon"
	},
	{
		title: "Adding classes to timetable",
		description:
			"As a student, you can not two clashing classes with the same date and time on your timetable. You are only allowed to pick and attend one class for a specific date and time. No clashing classes allowed on the platform.",
		icon: "welcome-adding-classes-icon"
	},
	{
		title: "Token Usage",
		description:
			"A compensation token will be sent to the student phone number used for registration and the token can only be used once. User will input token code when they want to attend an on-demand class. Note that the token will be tantamount to the initial amount paid for on-demand and can only be used for the same number of hours",
		icon: "welcome-token-usage-icon"
	}
]

export const ScreenTwo = () => {
	const isTabletOrMobile = useIsTabletOrMobile()
	const router = useRouter()
	const { updateUiStore } = useUiComponentStore()

	const handleBack = () => {
		updateUiStore("screen-one")
	}
	const handleContinue = () => {
		router.push("/student")
	}

	return (
		<div className="w-full max-w-[1240px] h-full min-h-screen lg:max-h-screen font-poppins grid place-content-center px-4 md:px-0">
			<h2 className="text-[1.5rem] md:text-4xl font-semibold text-black text-center mb-8 md:mb-16">
				Welcome to Digital Learning Circle
			</h2>
			<div className="flex justify-between items-center flex-col md:flex-row mb-10 md:mb-16">
				<Image
					// src={
					// 	isTabletOrMobile
					// 		? "/images/welcome-dlc-image-one-sm.png"
					// 		: "/images/welcome-dlc-img-two.png"
					// }
					src="/images/welcome-dlc-img-two.png"
					alt="welcome screen one"
					width={isTabletOrMobile ? 300 : 600}
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
					className="w-[170px] md:w-[200px] h-[56px] rounded-[100px] bg-transparent hover:bg-transparent border-2 border-dlc-blue text-lg lg:text-2xl text-dlc-blue font-medium font-poppins"
					onClick={handleBack}
				>
					Back
				</Button>

				<Button
					className="w-[170px] md:w-[200px] h-[56px] rounded-[100px] bg-dlc-blue hover:bg-dlc-blue text-lg lg:text-2xl text-white font-medium font-poppins"
					onClick={handleContinue}
				>
					Continue
				</Button>
			</div>
		</div>
	)
}
