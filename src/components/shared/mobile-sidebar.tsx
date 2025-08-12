"use client"

import { Button } from "../ui"
import { NavItem } from "./Sidenav"
import { CustomAvatar } from "./custom-avatar"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger
} from "@/components/ui/drawer"
import { useLogoutModal } from "@/stores/logout-modal"
import { Menu, ChevronRight, LogOut } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import * as React from "react"

interface MobileSidebarProps {
	user: {
		fullName: string
		role: string
	}
	navItems: NavItem[]
}

export function MobileSidebar({ navItems, user }: MobileSidebarProps) {
	const [drawerOpen, setDrawerOpen] = React.useState(false)

	const pathname = usePathname()
	const router = useRouter()
	const { open } = useLogoutModal()

	const handleNavigate = (path: string) => {
		router.push(path)
		setDrawerOpen(false)
	}

	return (
		<Drawer direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
			<DrawerTrigger asChild>
				<Menu size={24} color="#000" />
			</DrawerTrigger>
			<DrawerContent className="!w-[336px]">
				<DrawerClose className="w-[55px] h-[55px] rounded-full bg-dlc-blue-200 absolute top-10 -left-6 ">
					<ChevronRight size={24} color="#fff" className="ml-3" />
				</DrawerClose>
				<DrawerHeader className="h-[160px] bg-dlc-blue-200 grid place-items-center px-[42px]">
					<div className="flex w-full gap-x-[1rem] items-center">
						<CustomAvatar
							size="lg"
							textColor="text-light-yellow"
							name={user?.fullName}
						/>
						<div className="flex flex-col gap-1 ml-3">
							<h3 className="text-[18px] font-medium text-white font-poppins">
								{user?.fullName}
							</h3>
							<p className="text-xs font-normal text-white font-poppins">
								{user?.role}
							</p>
						</div>
					</div>
				</DrawerHeader>

				<ul className="flex flex-col items-start gap-3 text-left mt-10 px-10">
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
					className="w-[148px] pl-4 border border-gray-100 hover:text-[#F47A1C] hover:bg-transparent h-[48px] flex gap-x-[14px] items-center rounded-xl text-[#F47A1C] absolute bottom-10 left-4 right-4"
					variant="ghost"
					onClick={open}
				>
					<LogOut size={24} className="-rotate-180" />
					<p className="font-poppins font-medium text-base">Logout</p>
				</Button>
			</DrawerContent>
		</Drawer>
	)
}
