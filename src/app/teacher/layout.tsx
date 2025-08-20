"use client"

import { Header, SideNav } from "@/components/shared"
import { teacherSideNavItems } from "@/data"
import { LogoutModal } from "@/layout/modal"
import { getUserProfileQueryOptions } from "@/services/query"
import { useAuthActions } from "@/stores"
import { useLogoutModal } from "@/stores/logout-modal"
import { TeacherProfile } from "@/types/response-type"
import { useSuspenseQuery } from "@tanstack/react-query"

export const dynamic = "force-dynamic"

const Layout = ({ children }: { children: React.ReactNode }) => {
	const { data, isError } = useSuspenseQuery(
		getUserProfileQueryOptions("teacher")
	)

	const { isOpen, close } = useLogoutModal()

	const { setUserProfile } = useAuthActions()
	if (isError || !data) return null

	const profile = data.data as TeacherProfile

	setUserProfile(profile)
	return (
		<div className="grid min-h-[100dvh] max-w-[100dvw] grid-cols-1 gap-y-10 bg-dlc-brand-yellow tracking-wide text-slate-900 sm:grid-rows-[auto_1fr] lg:grid lg:grid-cols-[auto_1fr]">
			{/* Header */}
			<div className="sticky top-0 z-50 w-full backdrop-blur-md backdrop-filter lg:col-start-2 lg:col-end-3 lg:row-start-1">
				<div className="bg-white/80 px-6 h-fit">
					<Header userProfile={profile} navItems={teacherSideNavItems} />
				</div>
			</div>

			{/* Sidebar - only visible on laptop+ */}
			<div className="sticky top-0 hidden h-[100dvh] w-[305px] overflow-auto bg-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 lg:block lg:col-start-1 lg:col-end-2 lg:row-span-full">
				<SideNav navItems={teacherSideNavItems} />
			</div>

			{/* Content */}
			<div className="z-20 min-h-screen w-full p-0 px-6 lg:col-start-2 lg:col-end-3 lg:row-start-2">
				{children}
			</div>

			<LogoutModal open={isOpen} onOpenChange={close} />
		</div>
	)
}

export default Layout
