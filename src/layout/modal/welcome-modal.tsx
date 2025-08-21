import { ModalLayout } from "./ModalLayout"
import { ScreenOne, ScreenThree, ScreenTwo } from "@/features/welcome/component"
import { useUiComponentStore } from "@/utils/lib/query-store"

interface WelcomeModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export const WelcomeModal = ({ isOpen, setIsOpen }: WelcomeModalProps) => {
	const { store } = useUiComponentStore()

	return (
		<ModalLayout
			open={isOpen}
			onOpenChange={setIsOpen}
			size="5xl"
			showCloseButton={false}
			className=" bg-dlc-brand-yellow px-2 h-fit text-white rounded-xl"
		>
			<div className="w-full grid place-items-center py-[2.5rem]">
				{store === "screen-one" ? (
					<ScreenOne />
				) : store === "screen-two" ? (
					<ScreenTwo />
				) : (
					<ScreenThree />
				)}
			</div>
		</ModalLayout>
	)
}
