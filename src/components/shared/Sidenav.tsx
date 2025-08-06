"use client"

import { Button } from "../ui"
import { LogoutModal } from "@/layout/modal"
import { type LucideProps } from "lucide-react"
import { LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export interface NavItem {
	id: number
	label: string
	path: string
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>
	upcoming?: boolean
}

interface SideNavProps {
	navItems: NavItem[]
}

export function SideNav({ navItems }: SideNavProps) {
	const pathname = usePathname()

	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

	const router = useRouter()

	const handleNavigate = (path: string) => {
		router.push(path)
	}

	return (
		<>
			<nav className="bg-white py-6 min-h-screen h-full w-full p-4 overflow-auto relative">
				<Link href="/">
					<Image
						src="/images/dlc-logo.svg"
						alt="dlc logo"
						width={114}
						height={75}
					/>
				</Link>
				<ul className="flex flex-col items-start gap-3 text-left mt-10">
					{navItems.map(({ id, label, path, icon: Icon, upcoming }) => {
						const isActive = pathname === String(path)

						return (
							<li
								key={id}
								className={`flex  items-center font-medium text-base gap-4 h-[55px] min-w-full text-black rounded-[10px] cursor-pointer transition-all duration-100 ${
									isActive ? "active" : "hover:bg-slate-100 "
								}`}
								onClick={() => (upcoming ? {} : handleNavigate(path))}
							>
								<span></span>
								<span className="size-10 rounded-full flex items-center justify-center">
									<Icon size={24} />
								</span>
								<span>{label}</span>
								{upcoming && (
									<span className="text-[10px] font-light mt-4">Upcoming</span>
								)}
							</li>
						)
					})}
				</ul>
				<Button
					className="w-[148px] pl-4 border border-gray-100 hover:text-[#F47A1C] hover:bg-transparent h-[48px] flex gap-x-[14px] items-center rounded-xl text-[#F47A1C] absolute bottom-0 left-4 right-4 border ="
					variant="ghost"
					onClick={() => setIsLogoutModalOpen(true)}
				>
					<LogOut size={24} className="-rotate-180" />
					<p className="font-poppins font-medium text-base">Logout</p>
				</Button>
			</nav>
			<LogoutModal
				open={isLogoutModalOpen}
				onOpenChange={() => setIsLogoutModalOpen(false)}
			/>
		</>
	)
}
