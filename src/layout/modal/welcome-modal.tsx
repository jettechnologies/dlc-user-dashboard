"use client"

import { ModalLayout } from "./ModalLayout"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useIsSmallHeight } from "@/config"
import { ScreenOne, ScreenThree, ScreenTwo } from "@/features/welcome/component"
import { useUiComponentStore } from "@/utils/lib/query-store"

interface WelcomeModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export const WelcomeModal = ({ isOpen, setIsOpen }: WelcomeModalProps) => {
	const { store } = useUiComponentStore()
	const isSmallHeight = useIsSmallHeight()

	const content =
		store === "screen-one" ? (
			<ScreenOne />
		) : store === "screen-two" ? (
			<ScreenTwo />
		) : (
			<ScreenThree />
		)

	return (
		<ModalLayout
			open={isOpen}
			onOpenChange={setIsOpen}
			size="5xl"
			showCloseButton={false}
			className=" bg-dlc-brand-yellow px-2 h-fit text-white rounded-xl"
		>
			<div className="w-full grid place-items-center py-[2.5rem]">
				{isSmallHeight ? (
					<ScrollArea className="h-[calc(100vh-10rem)] w-full">
						{content}
					</ScrollArea>
				) : (
					content
				)}
			</div>
		</ModalLayout>
	)
}
