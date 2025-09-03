"use client"

import { ModalLayout } from "./ModalLayout"
import { Button } from "@/components/ui"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useIsSmallHeight } from "@/config"
import { ScreenOne, ScreenThree, ScreenTwo } from "@/features/welcome/component"
import { useUiComponentStore } from "@/utils/lib/query-store"
import { useRouter } from "next/navigation"

interface WelcomeModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export const WelcomeModal = ({ isOpen, setIsOpen }: WelcomeModalProps) => {
	const { store, updateUiStore } = useUiComponentStore()
	const isSmallHeight = useIsSmallHeight()
	const router = useRouter()

	const content =
		store === "screen-one" ? (
			<ScreenOne />
		) : store === "screen-two" ? (
			<ScreenTwo />
		) : (
			<ScreenThree />
		)

	const handleSkip = () => {
		router.push("/student")
	}
	const handleNext = () => {
		if (store === "screen-one") {
			updateUiStore("screen-two")
		} else {
			updateUiStore("screen-three")
		}
	}

	const handleBack = () => {
		if (store === "screen-three") {
			updateUiStore("screen-two")
		} else {
			updateUiStore("screen-one")
		}
	}
	const handleContinue = () => {
		router.push("/student")
		updateUiStore("")
	}

	return (
		<ModalLayout
			open={isOpen}
			onOpenChange={setIsOpen}
			size="5xl"
			showCloseButton={false}
			className=" bg-dlc-brand-yellow px-1 md:px-4 h-fit text-white rounded-xl"
		>
			<div className="w-full grid place-items-center">
				<div className="w-full flex justify-end md:hidden">
					<div className="flex w-fit gap-x-2">
						<Button
							variant="link"
							className="font-medium font-poppins text-sm capitalize"
							onClick={store === "screen-one" ? handleSkip : handleBack}
						>
							{store === "screen-one" ? "skip" : "back"}
						</Button>
						<Button
							variant="link"
							className="text-dlc-blue font-medium font-poppins text-sm capitalize"
							onClick={store === "screen-three" ? handleContinue : handleNext}
						>
							{store === "screen-three" ? "continue" : "next"}
						</Button>
					</div>
				</div>

				<div className="py-[0.5rem]">
					{isSmallHeight ? (
						<ScrollArea className="h-[calc(100vh-10rem)] w-full overflow-hidden">
							{content}
						</ScrollArea>
					) : (
						content
					)}
				</div>
			</div>
		</ModalLayout>
	)
}
