"use client"

import { ModalLayout, CustomModalProps } from "./ModalLayout"
import { Button } from "@/components/ui"
import { useAuthActions } from "@/stores"
import { useRouter } from "next/navigation"

type LogoutModalProps = Pick<
	CustomModalProps,
	"open" | "onOpenChange" | "title"
>

export const LogoutModal = ({
	open,
	onOpenChange,
	title
}: LogoutModalProps) => {
	const { logout } = useAuthActions()
	const router = useRouter()
	return (
		<ModalLayout
			open={open}
			onOpenChange={onOpenChange}
			title={title}
			size="md"
			showCloseButton={false}
		>
			<div className="w-full h-[250px] flex flex-col justify-center">
				<h3 className="text-2xl font-poppins text-black font-medium text-center">
					Log Out
				</h3>
				<p className="font-poppins font-normal text-base text-black text-center">
					Do you want to log out?
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
						onClick={() => {
							logout()
							onOpenChange?.(false)
							router.push("/")
						}}
					>
						Logout
					</Button>
				</div>
			</div>
		</ModalLayout>
	)
}
