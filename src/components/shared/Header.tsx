"use client"

import { NotificationDialog } from "./notification"
// import { useAuthState } from "@/stores"
import type { TeacherProfile, StudentProfile } from "@/types/response-type"
import Image from "next/image"
import React from "react"

interface HeaderProps {
	userProfile: TeacherProfile | StudentProfile
}

export function Header({ userProfile }: HeaderProps) {
	// const { userProfile } = useAuthState()

	return (
		<div className="w-full bg-white h-[81px] flex items-center justify-end">
			<div className="flex items-center gap-5">
				<NotificationDialog />
				<div className="flex items-center gap-x-2">
					<div className="min-w-[40px] flex flex-col  font-poppins">
						<h3 className="text-base font-medium text-black">
							{userProfile?.fullName}
						</h3>
						<p className="text-sm font-normal text-black">
							{userProfile?.role}
						</p>
					</div>
					<Image
						src="/icons/profile-icon.svg"
						alt="profile icon"
						width={40}
						height={40}
					/>
				</div>
			</div>
		</div>
	)
}
