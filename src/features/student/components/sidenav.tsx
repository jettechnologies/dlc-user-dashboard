"use client"

import {
	LayoutGrid,
	TvMinimalPlay,
	BookOpenText,
	Presentation,
	FolderOpenDot,
	ChartNoAxesCombined,
	GalleryVerticalEnd
} from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

// type NavProps = {
// 	id: number
// 	label: string
// 	path: string
// 	icon: React.SVGElementType
// }

const navItems = [
	{
		id: 1,
		label: "Dashboard",
		path: "/student",
		icon: LayoutGrid
	},
	{
		id: 2,
		label: "Live Sessions",
		path: "/student/live-sessions",
		icon: TvMinimalPlay
	},
	{
		id: 3,
		label: "My Exam",
		path: "/student/my-exam",
		icon: BookOpenText
	},
	{
		id: 4,
		label: "My Classes",
		path: "/student/my-classes",
		icon: Presentation
	},
	{
		id: 5,
		label: "Resources",
		path: "/student/resources",
		icon: FolderOpenDot
	},
	{
		id: 6,
		label: "Progress Analysis",
		path: "/student/progress-analysis",
		icon: ChartNoAxesCombined
	},
	{
		id: 7,
		label: "My Subscription",
		path: "/student/my-subscription",
		icon: GalleryVerticalEnd
	}
]

export default function SideNav() {
	const pathname = usePathname()

	const router = useRouter()

	const handleNavigate = (path: string) => {
		router.push(path)
	}

	return (
		<nav className="bg-white min-h-full h-full w-full p-4 overflow-auto">
			<Image
				src="/images/dlc-logo.svg"
				alt="dlc logo"
				width={114}
				height={75}
			/>
			<ul className="flex flex-col items-start gap-3 text-left mt-10">
				{navItems.map(({ id, label, path, icon: Icon }) => {
					const isActive = pathname === path

					return (
						<li
							key={id}
							className={`flex items-center font-medium text-base gap-4 h-[55px] min-w-full text-black rounded-[10px] cursor-pointer transition-all duration-100 ${
								isActive ? "active" : "hover:bg-slate-100"
							}`}
							onClick={() => handleNavigate(path)}
						>
							<span></span>
							<span className="size-10 rounded-full flex items-center justify-center">
								<Icon size={24} />
							</span>
							<span>{label}</span>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
