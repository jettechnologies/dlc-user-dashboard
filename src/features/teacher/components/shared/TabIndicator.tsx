import { Button } from "@/components/ui"
import { cn } from "@/utils/lib/utils"

interface TabIndicatorProps<T extends string> {
	activeTab: T
	setActiveTab: (tab: T) => void
	tabs: T[]
	tabLabels: Record<T, string>
	className?: string
	tabButtonClassName?: string
}

export const TabIndicator = <T extends string>({
	activeTab,
	setActiveTab,
	tabs,
	tabLabels,
	className,
	tabButtonClassName
}: TabIndicatorProps<T>) => {
	const getActiveTabStyles = (tab: T) => {
		return activeTab === tab ? "bg-dlc-blue-700 hover:bg-dlc-blue-700" : ""
	}

	return (
		<div
			className={cn(
				`flex space-x-1 mb-6 border border-gray-100 rounded-sm p-2 w-full bg-light-yellow-200`,
				className
			)}
		>
			{tabs.map((tab) => (
				<Button
					key={tab}
					variant={activeTab === tab ? "default" : "ghost"}
					onClick={() => setActiveTab(tab)}
					className={cn(
						"h-[30px] min-w-[147px] w-1/3 font-poppins text-xs font-normal hover:bg-transparent",
						getActiveTabStyles(tab),
						tabButtonClassName
					)}
				>
					{tabLabels[tab]}
				</Button>
			))}
		</div>
	)
}
