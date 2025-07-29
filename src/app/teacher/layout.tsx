"use client"

import { Header, SideNav } from "@/components/shared"
import { teacherSideNavItems } from "@/data"
import { getUserProfileQueryOptions } from "@/services/query"
import { useAuthActions } from "@/stores"
import { TeacherProfile } from "@/types/response-type"
import { useSuspenseQuery } from "@tanstack/react-query"

export const dynamic = "force-dynamic"

const Layout = ({ children }: { children: React.ReactNode }) => {
	const { data, isError } = useSuspenseQuery(
		getUserProfileQueryOptions("teacher")
	)

	const { setUserProfile } = useAuthActions()
	if (isError || !data) return null

	const profile = data.data as TeacherProfile

	setUserProfile(profile)
	return (
		<div className="grid min-h-[100dvh] max-w-[100dvw] grid-cols-1 gap-y-10 bg-dlc-brand-yellow tracking-wide text-slate-900 sm:grid-rows-[auto_1fr] md:grid md:grid-cols-[auto_1fr]">
			<div className="sticky top-0 z-50 w-full backdrop-blur-md backdrop-filter md:col-span-1 md:row-start-1">
				<div className="bg-white/80 px-6 h-fit">
					<Header userProfile={profile} />
				</div>
			</div>

			<div className="sticky top-0 hidden h-[100dvh] w-[305px] overflow-auto bg-white py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 lg:col-start-1 lg:col-end-2 lg:row-span-full lg:block ">
				<SideNav navItems={teacherSideNavItems} />
			</div>

			<div className="z-20 min-h-screen w-full p-0 md:col-start-2 md:col-end-3 md:row-start-2 px-6">
				{children}
			</div>
		</div>
	)
}

export default Layout
