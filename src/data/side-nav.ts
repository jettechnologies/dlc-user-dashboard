import { NavItem } from "@/components/shared"
import {
	LayoutGrid,
	TvMinimalPlay,
	BookOpenText,
	Presentation,
	FolderOpenDot,
	GalleryVerticalEnd,
	ChartNoAxesCombined
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
		label: "Live Sessions",
		path: "/teacher/live-sessions",
		icon: TvMinimalPlay,
		upcoming: true
	},
	{
		id: 3,
		label: "My Exam",
		path: "/teacher/my-exam",
		icon: BookOpenText
	},
	{
		id: 4,
		label: "My Classes",
		path: "/teacher/my-classes",
		icon: Presentation
	},
	{
		id: 5,
		label: "Progress Analysis",
		path: "/teacher/progress-analysis",
		icon: ChartNoAxesCombined,
		upcoming: true
	}
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
		label: "Resources",
		path: "/student/resources",
		icon: FolderOpenDot,
		upcoming: true
	},
	{
		id: 6,
		label: "Progress Analysis",
		path: "/student/progress-analysis",
		icon: ChartNoAxesCombined,
		upcoming: true
	},
	{
		id: 7,
		label: "My Subscription",
		path: "/student/my-subscription",
		icon: GalleryVerticalEnd
	}
]
