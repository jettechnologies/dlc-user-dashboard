"use client"

import { SideNav } from "@/components/shared"
import { Header } from "@/components/shared/Header"
import { studentSideNavItems } from "@/data"
import { LogoutModal } from "@/layout/modal"
import { getUserProfileQueryOptions } from "@/services/query"
import { useAuthActions } from "@/stores"
import { useLogoutModal } from "@/stores/logout-modal"
import { StudentProfile } from "@/types/response-type"
import { useSuspenseQuery } from "@tanstack/react-query"

export default function StudentLayout({
	children
}: {
	children: React.ReactNode
}) {
	const { data, isError } = useSuspenseQuery(
		getUserProfileQueryOptions("student")
	)
	const { isOpen, close } = useLogoutModal()

	const { setUserProfile } = useAuthActions()
	if (isError || !data) return null

	const profile = data.data as StudentProfile

	setUserProfile(profile)

	return (
		<div className="grid min-h-[100dvh] max-w-[100dvw] grid-cols-1 gap-y-10 bg-dlc-brand-yellow tracking-wide text-slate-900 sm:grid-rows-[auto_1fr] lg:grid lg:grid-cols-[auto_1fr]">
			{/* Header */}
			<div className="sticky top-0 z-50 w-full backdrop-blur-md backdrop-filter lg:col-start-2 lg:col-end-3 lg:row-start-1">
				<div className="bg-white/80 px-6 h-fit">
					<Header userProfile={profile} navItems={studentSideNavItems} />
				</div>
			</div>

			{/* Sidebar - only visible on laptop+ */}
			<div className="sticky top-0 hidden h-[100dvh] w-[305px] overflow-auto bg-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 lg:block lg:col-start-1 lg:col-end-2 lg:row-span-full">
				<SideNav navItems={studentSideNavItems} />
			</div>

			{/* Content */}
			<div className="z-20 min-h-screen w-full p-0 px-6 lg:col-start-2 lg:col-end-3 lg:row-start-2">
				{children}
			</div>

			<LogoutModal open={isOpen} onOpenChange={close} />
		</div>
		// <div className="grid min-h-[100dvh] max-w-[100dvw] grid-cols-1 gap-y-10 bg-dlc-brand-yellow tracking-wide text-slate-900 sm:grid-rows-[auto_1fr] md:grid md:grid-cols-[auto_1fr]">
		// 	<div className="sticky top-0 z-50 w-full backdrop-blur-md backdrop-filter md:col-span-1 md:row-start-1">
		// 		<div className="bg-white/80 px-6 h-fit">
		// 			<Header userProfile={profile} navItems={studentSideNavItems} />
		// 		</div>
		// 	</div>

		// 	<div className="sticky top-0 hidden h-[100dvh] w-[305px] overflow-auto bg-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 lg:col-start-1 lg:col-end-2 lg:row-span-full lg:block">
		// 		<SideNav navItems={studentSideNavItems} />
		// 	</div>

		// 	<div className="z-20 min-h-screen w-full p-0 md:col-start-2 md:col-end-3 md:row-start-2 px-6 max-w-[1360px]">
		// 		{children}
		// 	</div>
		// 	<LogoutModal open={isOpen} onOpenChange={close} />
		// </div>
	)
}
