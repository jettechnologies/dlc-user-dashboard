import { cn } from "@/utils/lib/utils"

export const PageWrapper = ({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<main className={cn("max-w-6xl mx-auto 2xl:mx-0 space-y-6", className)}>
			{children}
		</main>
	)
}
