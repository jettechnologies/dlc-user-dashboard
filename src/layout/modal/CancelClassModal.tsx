"use client"

import { ModalLayout, CustomModalProps } from "./ModalLayout"
import { Button } from "@/components/ui"

type LogoutModalProps = Pick<
	CustomModalProps,
	"open" | "onOpenChange" | "title"
> & {
	onCancelClass: () => void
	isDeleting?: boolean
}

export const CancelClassModal = ({
	open,
	onOpenChange,
	title,
	onCancelClass,
	isDeleting
}: LogoutModalProps) => {
	return (
		<ModalLayout
			open={open}
			onOpenChange={onOpenChange}
			title={title}
			size="md"
			showCloseButton={false}
		>
			<div className="w-full h-[250px] flex flex-col justify-center">
				<h3 className="text-2xl font-poppins font-semibold text-black text-center">
					Delete Class
				</h3>
				<p className="text-base font-poppins text-muted-foreground text-center">
					Are you sure you want to cancel this upcoming class?
				</p>
				<div className="mt-10 w-full flex justify-between">
					<Button
						className="w-[144px] h-[44px] rounded-xl p-2.5 bg-gray-100 text-black hover:bg-gray-100"
						onClick={() => onOpenChange?.(false)}
					>
						Cancel
					</Button>
					<Button
						className="w-[144px] h-[44px] rounded-xl p-2.5 bg-red-500 text-white hover:bg-red-500"
						onClick={onCancelClass}
					>
						{isDeleting ? "Deleting..." : "Confirm"}
					</Button>
				</div>
			</div>
		</ModalLayout>
	)
}
