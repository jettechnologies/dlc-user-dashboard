"use client"

import { Button } from "@/components/ui"
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerClose
} from "@/components/ui/drawer"
import { ChevronDown, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

type NavLink = {
	label: string
	link: string
}

export interface MobileNavLink {
	label: string
	link: string | NavLink[]
	icon: string
}

interface MobileNavbarProps {
	isOpen: boolean
	onClose: () => void
	position?: "left" | "right"
	navLinks: MobileNavLink[]
}

export const MobileNavBar: React.FC<MobileNavbarProps> = ({
	isOpen,
	navLinks,
	onClose,
	position = "right"
}) => {
	const pathname = usePathname()
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)

	const toggleDropdown = (label: string) => {
		setOpenDropdown(openDropdown === label ? null : label)
	}

	const activeClassName = (link: string) =>
		pathname === link
			? "bg-[#FDE9D9] text-[#F47A1C]"
			: "bg-transparent text-black"

	return (
		<Drawer open={isOpen} onOpenChange={onClose} direction={position}>
			<DrawerContent className="h-full p-4">
				<DrawerTitle className="sr-only">Menu</DrawerTitle>
				<DrawerClose asChild>
					<Button
						variant="ghost"
						aria-label="close menu"
						className="mb-4 self-end text-sm font-semibold w-[24px] h-[24px] "
					>
						<span className="sr-only">close menu</span>
						<X size={24} color="#141414" />
					</Button>
				</DrawerClose>
				<ul className="mt-4 flex flex-col gap-y-6 rounded-lg font-medium">
					{navLinks.map((navLink) => {
						const isDropdown = Array.isArray(navLink.link)

						return (
							<li key={navLink.label} className="flex flex-col">
								<div
									className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 ${isDropdown ? "hover:bg-gray-100" : activeClassName(navLink.link as string)}`}
									onClick={() => isDropdown && toggleDropdown(navLink.label)}
								>
									<div className="flex items-center gap-x-2">
										<div className="relative h-[22px] w-[22px] rounded-md">
											<Image
												src={navLink.icon}
												alt={`${navLink.label}-icon`}
												fill
												className="h-full w-full object-cover"
											/>
										</div>
										{!isDropdown ? (
											<Link href={navLink.link as string}>{navLink.label}</Link>
										) : (
											<span>{navLink.label}</span>
										)}
									</div>
									{isDropdown && (
										<ChevronDown
											size={16}
											className={`transition-transform ${
												openDropdown === navLink.label ? "rotate-180" : ""
											}`}
										/>
									)}
								</div>

								{isDropdown && openDropdown === navLink.label && (
									<ul className="ml-6 mt-2 flex flex-col gap-y-2 border-l border-gray-300 pl-3">
										{(navLink.link as NavLink[]).map((sublink) => (
											<li
												key={sublink.label}
												className={`rounded-lg px-2 py-1 ${activeClassName(
													sublink.link
												)}`}
											>
												<Link
													href={sublink.link}
													className="block rounded-full px-4 py-1 capitalize focus-within:bg-SC-Light-orange focus-within:ring-2 focus-within:ring-SC-Orange hover:bg-SC-Light-orange focus:bg-SC-Light-orange"
												>
													{sublink.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						)
					})}
				</ul>
			</DrawerContent>
		</Drawer>
	)
}
