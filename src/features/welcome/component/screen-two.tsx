import { DescriptionList } from "./description-list"
import { Button } from "@/components/ui"
import { useIsTabletOrMobile } from "@/config"
import { useUiComponentStore } from "@/utils/lib/query-store"
import Image from "next/image"

const descriptionsList = [
	{
		title: "On-demand",
		description:
			"The on-demand feature lets you attend classes outside the exam you registered for during onboarding for a fee. It works only with an active subscription for a set duration (e.g., 12 or 24 hours) and also allows you to preview available classes before payment.",
		icon: "welcome-ondemand-icon"
	},
	{
		title: "Cancelled classes",
		description:
			"As a student, after paying for an on-demand class and the teacher eventually cancels the class, you are compensated with a token that can be used to attend another on-demand class.",
		link: {
			text: "Terms and Conditions pply",
			href: "/terms"
		},
		icon: "welcome-classes-icon"
	}
]

export const ScreenTwo = () => {
	const isTabletOrMobile = useIsTabletOrMobile()
	const { updateUiStore } = useUiComponentStore()

	const handleBack = () => {
		updateUiStore("screen-one")
	}
	const handleNext = () => {
		updateUiStore("screen-three")
	}

	return (
		<div className="w-full max-w-[1240px] lg:max-h-screen font-poppins grid place-content-center px-4 md:px-0">
			<h2 className="text-[1.5rem] md:text-4xl font-semibold text-black text-center mb-4 [max-width:1600px]:mb-8">
				Welcome to Digital Learning Circle
			</h2>
			<div className="flex justify-between items-center flex-col md:flex-row mb-5 [max-width:1600px]:mb-10">
				<Image
					src="/images/welcome-dlc-img-two.png"
					alt="welcome screen two"
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
					onClick={handleNext}
				>
					Next
				</Button>
			</div>
		</div>
	)
}
