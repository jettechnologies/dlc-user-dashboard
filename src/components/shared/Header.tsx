"use client"

import { NavItem } from "./Sidenav"
import { CustomAvatar } from "./custom-avatar"
import { MobileSidebar } from "./mobile-sidebar"
import { useIsMobile } from "@/config"
import type { TeacherProfile, StudentProfile } from "@/types/response-type"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface HeaderProps {
	userProfile: TeacherProfile | StudentProfile
	navItems: NavItem[]
}

export function Header({ userProfile, navItems }: HeaderProps) {
	const isMobile = useIsMobile()
	return (
		<div className="w-full bg-white h-[81px] flex items-center justify-between lg:justify-end">
			<Link href="/" className="lg:hidden">
				<Image
					src={isMobile ? "/images/dlc-logo-sm.png" : "/images/dlc-logo.svg"}
					alt="dlc logo"
					width={isMobile ? 54 : 114}
					height={36}
				/>
			</Link>
			<div className="flex items-center gap-5">
				{/* <NotificationDialog /> */}
				<div className="items-center gap-x-4 hidden lg:flex">
					<div className="min-w-[40px] flex flex-col  font-poppins">
						<h3 className="text-base font-medium text-black">
							{userProfile?.fullName}
						</h3>
						<p className="text-sm font-normal text-black">
							{userProfile?.role}
						</p>
					</div>

					<CustomAvatar
						name={userProfile?.fullName}
						size="md"
						textColor="text-black"
					/>
				</div>
				<div className="lg:hidden">
					<MobileSidebar navItems={navItems} user={userProfile} />
				</div>
			</div>
		</div>
	)
}
