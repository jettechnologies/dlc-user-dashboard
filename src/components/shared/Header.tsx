"use client"

// import { NotificationDialog } from "./notification"
// import { useAuthState } from "@/stores"
import { NavItem } from "./Sidenav"
import { CustomAvatar } from "./custom-avatar"
import { MobileSidebar } from "./mobile-sidebar"
import type { TeacherProfile, StudentProfile } from "@/types/response-type"
import React from "react"

interface HeaderProps {
	userProfile: TeacherProfile | StudentProfile
	navItems: NavItem[]
}

export function Header({ userProfile, navItems }: HeaderProps) {
	return (
		<div className="w-full bg-white h-[81px] flex items-center justify-end">
			<div className="flex items-center gap-5">
				{/* <NotificationDialog /> */}
				<div className="items-center gap-x-4 hidden md:flex">
					<div className="min-w-[40px] flex flex-col  font-poppins">
						<h3 className="text-base font-medium text-black">
							{userProfile?.fullName}
						</h3>
						<p className="text-sm font-normal text-black">
							{userProfile?.role}
						</p>
					</div>
					{/* <Avatar>
						<AvatarImage src="/icons/profile-icon.svg" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar> */}
					<CustomAvatar
						name={userProfile?.fullName}
						size="md"
						textColor="text-black"
					/>
				</div>
				<div className="md:hidden">
					<MobileSidebar navItems={navItems} user={userProfile} />
				</div>
			</div>
		</div>
	)
}
