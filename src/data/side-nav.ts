import { NavItem } from "@/components/shared"
import {
	LayoutGrid,
	TvMinimalPlay,
	BookOpenText,
	Presentation,
	// FolderOpenDot,
	GalleryVerticalEnd,
	ChartNoAxesCombined,
	ReceiptText
} from "lucide-react"

export const teacherSideNavItems: NavItem[] = [
	{
		id: 1,
		label: "Dashboard",
		path: "/teacher",
		icon: LayoutGrid
	},

	{
		id: 2,
		label: "My Exam",
		path: "/teacher/my-exam",
		icon: BookOpenText
	},
	{
		id: 3,
		label: "My Classes",
		path: "/teacher/my-classes",
		icon: Presentation
	}
	// {
	// 	id: 4,
	// 	label: "Progress Analysis",
	// 	path: "/teacher/progress-analysis",
	// 	icon: ChartNoAxesCombined,
	// 	upcoming: true
	// }
	// {
	// 	id: 5,
	// 	label: "Live Sessions",
	// 	path: "/teacher/live-sessions",
	// 	icon: TvMinimalPlay,
	// 	upcoming: true
	// }
]

export const studentSideNavItems: NavItem[] = [
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
		label: "My Subscription",
		path: "/student/my-subscription",
		icon: GalleryVerticalEnd
	},
	{
		id: 6,
		label: "Subscription History",
		path: "/student/subscription-history",
		icon: ReceiptText
	}
	// {
	// 	id: 7,
	// 	label: "Resources",
	// 	path: "/student/resources",
	// 	icon: FolderOpenDot,
	// 	upcoming: true
	// },
	// {
	// 	id: 8,
	// 	label: "Progress Analysis",
	// 	path: "/student/progress-analysis",
	// 	icon: ChartNoAxesCombined,
	// 	upcoming: true
	// }
]
